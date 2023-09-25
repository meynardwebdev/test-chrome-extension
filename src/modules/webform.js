import organizations from "./organizations";
import fieldMapping from "./field-mapping";
import attachDeathCertFile from "./death-certs";
import { alertFunction, getOrganizationName, getCancelText, getEditText, getName, checkFileSize, todaysDate, logFunction } from "./utils";

function fillWebForm(url, active_tab, closure_id, tasks) {
	if (!closure_id) {
		return;
	}

	if (!tasks.hasOwnProperty(closure_id)) {
		alertFunction(active_tab.id, `Closure ID ${closure_id} not found.`)
		return;
	}

	let user = tasks[closure_id].user;
	let deceased_person = tasks[closure_id].deceased_person;
	let organization = tasks[closure_id].organization;
	let org_name = getOrganizationName(url);
	let fields = fieldMapping[org_name];
	let task_type = tasks[closure_id].task_type;
	let data = {
		'user': user,
		'deceased_person': deceased_person,
		'organization': organization,
		'task_type': task_type,
	};

	if (task_type === 'TakeOver') {
		alertFunction(active_tab.id, 'Task not supported!')
	}

	if (organizations[org_name].group === 'lottery_organization') {
		let cancel_text = getCancelText(data, 'de loten');
		let edit_text = getEditText(data, 'de loten');

		function code(fields, data, edit_text, cancel_text, task_type) {
			for (const form_type in fields) {
				for (const field in fields[form_type]) {
					if (field === 'gender') {
						document.getElementById(fields[form_type][field]).value = data[form_type][field] === 'M' ? 'Meneer' : 'Mevrouw';
						document.getElementById(fields[form_type][field]).dispatchEvent(new Event('change'));
					} else if (field === 'npl_selectors') {
						for (const selector in fields[form_type][field]) {
							document.getElementById(selector).value = fields[form_type][field][selector];
							document.getElementById(selector).dispatchEvent(new Event('change'));
						}
					} else {
						let value = '';
						if (field === 'explanation') {
							if (task_type === 'Terminate') {
								value = cancel_text;
							} else if (task_type === 'TakeOver') {
								value = edit_text;
							}
						} else if (field === 'initials') {
							value = data[form_type][field] || data[form_type]['first_name'].slice(0, 1);
						} else {
							value = data[form_type][field];
						}
						document.getElementById(fields[form_type][field]).value = value || '';
					}
				}
			}
		}

		checkFileSize(active_tab.id, deceased_person.death_cert_base64, 5);

		chrome.scripting.executeScript({
			target: {tabId: active_tab.id},
			function: code,
			args: [fields, data, edit_text, cancel_text, task_type],
		});

		setTimeout(function () {
			chrome.scripting.executeScript({
				target: {tabId: active_tab.id},
				function: attachDeathCertFile,
				args: [deceased_person.death_cert_base64, deceased_person.death_cert_mime_type, deceased_person.death_cert_filename, organizations[org_name].group],
			});
		}, 1000);
	}
}

export default fillWebForm

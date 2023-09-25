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

    if(task_type === 'TakeOver'){
        alertFunction(active_tab.id, 'Let op, betreft overzetting! zelf data nieuwe contractant toevoegen!')
    }


// ++++Postcode Loterij, Vrienden Loterij, Bankgiro Loterij++++ //
    if (organizations[org_name].group === 'lottery_organization') {
        let cancel_text = getCancelText(data, 'de loten');
        let edit_text = getEditText(data, 'de loten');

        function code(fields, data, edit_text, cancel_text, task_type){
            for (const form_type in fields){
                for (const field in fields[form_type]){
                    if (field === 'gender') {
                        document.getElementById(fields[form_type][field]).value = data[form_type][field] === 'M' ? 'Meneer' : 'Mevrouw';
                        document.getElementById(fields[form_type][field]).dispatchEvent(new Event('change'));
                    } else if (field === 'npl_selectors') {
                        for(const selector in fields[form_type][field]) {
                            document.getElementById(selector).value = fields[form_type][field][selector]; 
                            document.getElementById(selector).dispatchEvent(new Event('change'));
                        } 
                    } else {
                        let value = '';
                        if (field ==='explanation') {
                            if (task_type === 'Terminate'){ 
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
            target: { tabId: active_tab.id },
            function: code,
            args: [fields, data, edit_text, cancel_text, task_type],
        });

        setTimeout(function () {
            chrome.scripting.executeScript({
                target: { tabId: active_tab.id },
                function: attachDeathCertFile,
                args: [deceased_person.death_cert_base64, deceased_person.death_cert_mime_type, deceased_person.death_cert_filename, organizations[org_name].group],
            });
        }, 1000);


// ++++DPG Media kranten++++ //
    } else if (organizations[org_name].group === 'dpg_media') {
        let cancel_text = getCancelText(data, 'het abonnement');
        let edit_text = getEditText(data, 'het abonnement');
        let contact_name = getName(data['user']);

        
        function code(fields, data, edit_text, cancel_text, task_type, contact_name){
            const webform_anchor = document.querySelector('a[data-toggle*="#webform-client-form-125"]');
            webform_anchor.scrollIntoView();
            webform_anchor.click();

            for (const form_type in fields) {
                for (const field in fields[form_type]){
                    if (field === 'question') {
                        document.getElementById(fields[form_type][field].id).selectedIndex = fields[form_type][field].value;
                    } else {
                        let value = ""
                        if(field === 'confirm_email'){
                            value = data[form_type]['email'];
                        } else if(field === 'contact_name'){
                            value = contact_name;
                        } else if (field === 'explanation') {
                            if (task_type === 'Terminate'){ 
                                value = cancel_text;
                            } else if (task_type === 'TakeOver') {
                                value = edit_text;
                            }
                        } else {
                            value = data[form_type][field];
                        }
                        document.getElementById(fields[form_type][field]).value = value || '';
                    }
                }
            }
        }

        checkFileSize(active_tab.id, deceased_person.death_cert_base64, 2);

        chrome.scripting.executeScript({
            target: { tabId: active_tab.id },
            function: code,
            args: [fields, data, edit_text, cancel_text, task_type, contact_name],
        });

        setTimeout(function () {
            chrome.scripting.executeScript({
                target: { tabId: active_tab.id },
                function: attachDeathCertFile,
                args: [deceased_person.death_cert_base64, deceased_person.death_cert_mime_type, deceased_person.death_cert_filename, organizations[org_name].group],
            });
        }, 1000);


// ++++DPG Magazines++++ //
    } else if (organizations[org_name].group === 'dpg_magazines') {
        let cancel_text = 'Abonnee is overleden';
        let edit_text= 'ivm overlijden het abonnement graag OVERZETTEN op naam van:';

        function code(fields, data, edit_text, cancel_text, task_type){

            // scroll to the webform and toggle
            document.getElementById('klntn-ask-editorial').click();
            document.getElementById(fields['organization']['name']).value= data['organization']['name'];
            document.getElementById('klntn-form-onderwerp').value= data['task_type'] === 'Terminate' ? 'opzeggen' : 'vraag';
            document.getElementById('klntn-form-onderwerp').dispatchEvent(new Event('change'));
            document.getElementById('klntn-abonnementsduur').value= 'langer dan 12 maanden';

            // fill the webform
            for (const form_type in fields) {
                for (const field in fields[form_type]){
                    let value = ""
                    if(field === 'confirm_email'){
                        value = data[form_type]['email'];
                    } else if (field === 'explanation') {
                        if (task_type === 'Terminate'){ 
                            value = cancel_text;
                        } else if (task_type === 'TakeOver') {
                            value = edit_text;
                        } 
                    } else {
                        value = data[form_type][field];
                    }
                    if(field === 'telnr_nabestaande'){
                        document.getElementsByName(fields[form_type][field])[1].value = value || '';
                    } else {
                        document.getElementsByName(fields[form_type][field])[0].value = value || '';
                    }           
                }
            }
        }

        checkFileSize(active_tab.id, deceased_person.death_cert_base64, 2);

        chrome.scripting.executeScript({
            target: { tabId: active_tab.id },
            function: code,
            args: [fields, data, edit_text, cancel_text, task_type],
        });

        setTimeout(function () {
            chrome.scripting.executeScript({
                target: { tabId: active_tab.id },
                function: attachDeathCertFile,
                args: [deceased_person.death_cert_base64, deceased_person.death_cert_mime_type, deceased_person.death_cert_filename, organizations[org_name].group],
            });
        }, 1000);


// ++++Mediahuis++++ //
    } else if (organizations[org_name].group === 'mediahuis') {
        let cancel_text = getCancelText(data, 'het abonnement');
        let edit_text = getEditText(data, 'het abonnement');

        function code(fields, data, edit_text, cancel_text, task_type){
            for (const form_type in fields){
                for (const field in fields[form_type]){
                    if (field ==='selectable') {
                        document.getElementById(fields[form_type][field].id).value = fields[form_type][field].value;
                    } else {
                        let value = '';
                        if (field === 'gender') {
                            value = data[form_type][field] === 'M' ? 'Dhr.' : 'Mevr.'; 
                        } else if (field ==='explanation') {
                            if (task_type === 'Terminate'){ 
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
                        document.getElementById(fields[form_type][field]).dispatchEvent(new Event('change'));
                    }
                }
            }
        };

        checkFileSize(active_tab.id, deceased_person.death_cert_base64, 5);

        chrome.scripting.executeScript({
            target: { tabId: active_tab.id },
            function: code,
            args: [fields, data, edit_text, cancel_text, task_type],
        });

        setTimeout(function () {
            chrome.scripting.executeScript({
                target: { tabId: active_tab.id },
                function: attachDeathCertFile,
                args: [deceased_person.death_cert_base64, deceased_person.death_cert_mime_type, deceased_person.death_cert_filename, organizations[org_name].group],
            });
        }, 1000);


// ++++Hartstichting++++ //
    } else if (org_name === 'hartstichting') {
        
        function code(fields, data){
            for (const form_type in fields){
                for (const field in fields[form_type]){
                    if (field === 'gender') {
                        document.getElementById(fields[form_type][field]+(data[form_type][field] === 'M' ? '1' : '2')).click();
                    } else {
                        let value = data[form_type][field] || '';
                        document.getElementById(fields[form_type][field]).focus();
                        document.execCommand('insertText', false, value);
                    }
                }
            }
        }

        chrome.scripting.executeScript({
            target: { tabId: active_tab.id },
            function: code,
            args: [fields, data],
        });


// ++++CentraalBeheer++++ //
    } else if (org_name === 'centraalbeheer') {
        
        function code(fields, data){
            for (const form_type in fields){
                for (const field in fields[form_type]){
                    if (field === 'gender') {
                        document.getElementsByName(fields[form_type][field])[(data[form_type][field] === 'M' ? 0 : 1)].click();
                    } else {
                        let value = ""
                        if(field === 'relation'){
                            value = data[form_type][field];
                            if (value === 'Partner'){
                                value = 'Partner van';
                            } else if (value === 'Zoon' || value === 'Dochter'){
                                value = 'Zoon of dochter van';
                            } else if (value === 'Vader' || value === 'Moeder'){
                                value = 'Vader of moeder van';
                            } else if (value === 'Broer' || value === 'Zus'){
                                value = 'Broer of zus van';
                            } else {
                                value = 'Anders';
                            }
                        } else if (field === 'product'){
                            value = 'Ik weet het niet';
                        } else if (field === 'initials'){
                            value = data[form_type][field] || data[form_type]['first_name'].slice(0, 1);
                        } else if (field === 'birth_date' || field === 'died_date'){
                            value = data[form_type][field] || "";
                            if (value.includes("-")){
                                value = value.split("-").reverse().join("-");
                            }
                        } else {
                            value = data[form_type][field] || "";
                        }
                        document.getElementById(fields[form_type][field]).value = value || '';
                        document.getElementById(fields[form_type][field]).dispatchEvent(new Event('change'));
                    }
                }
            }
        }

        chrome.scripting.executeScript({
            target: { tabId: active_tab.id },
            function: code,
            args: [fields, data],
        });


// ++++ANWB++++ //
    } else if (org_name === 'anwb') {

        function click(){
            document.getElementsByClassName('PONCHO-button PONCHO-button--primary')[0].click();
        }

        function select(task_type){
            document.getElementById('checkbox-unknown').click();
            if (task_type === 'TakeOver') {
                document.getElementById('formFieldInputRadioButtonGroup-1').click();
            }
        }

        function code_dp(fields, data){
            for (const field in fields['deceased_person']){
                if (field === 'gender'){
                    document.getElementById(fields['deceased_person'][field]+(data['deceased_person'][field] === 'M' ? '-0' : '-1')).click();
                    document.getElementById(fields['deceased_person'][field]+(data['deceased_person'][field] === 'M' ? '-0' : '-1')).dispatchEvent(new Event('blur'));
                } else {
                    document.getElementById(fields['deceased_person'][field]).value = data['deceased_person'][field] || '';
                    document.getElementById(fields['deceased_person'][field]).dispatchEvent(new Event('blur'));
                    console.log(fields['deceased_person'][field], data['deceased_person'][field] || '');
                }
            }
        }

        function code_user(fields, data){
            for (const field in fields['user']){
                if (field === 'gender'){
                    document.getElementById(fields['user'][field]+(data['user'][field] === 'M' ? '-0' : '-1')).click();
                    document.getElementById(fields['user'][field]+(data['user'][field] === 'M' ? '-0' : '-1')).dispatchEvent(new Event('blur'));
                } else {
                    document.getElementById(fields['user'][field]).value = data['user'][field] || '';
                    document.getElementById(fields['user'][field]).dispatchEvent(new Event('blur'));
                    console.log(fields['user'][field], data['user'][field] || '');
                }
            }
        }

        checkFileSize(active_tab.id, deceased_person.death_cert_base64, 1);

        chrome.scripting.executeScript({
            target: { tabId: active_tab.id },
            function: click,
        });

        setTimeout(function () {
            chrome.scripting.executeScript({
                target: { tabId: active_tab.id },
                function: code_dp,
                args: [fields, data],
            });
        }, 500);

        setTimeout(function () {
            chrome.scripting.executeScript({
                target: { tabId: active_tab.id },
                function: attachDeathCertFile,
                args: [deceased_person.death_cert_base64, deceased_person.death_cert_mime_type, deceased_person.death_cert_filename, org_name],
            });
        }, 500);

        setTimeout(function () {
            chrome.scripting.executeScript({
                target: { tabId: active_tab.id },
                function: click,
            });
        }, 2000);

        setTimeout(function () {
            chrome.scripting.executeScript({
                target: { tabId: active_tab.id },
                function: select,
                args: [task_type],
            });
        }, 2500);

        setTimeout(function () {
            chrome.scripting.executeScript({
                target: { tabId: active_tab.id },
                function: click,
            });
        }, 3000);

        setTimeout(function () {
            chrome.scripting.executeScript({
                target: { tabId: active_tab.id },
                function: code_user,
                args: [fields, data],
            });
        }, 3500);

        setTimeout(function () {
            chrome.scripting.executeScript({
                target: { tabId: active_tab.id },
                function: click,
            });
        }, 4000);

        
// ++++Linkedin++++ //
    } else if (org_name === 'linkedin') {
        let user_name = getName(data['user']);
        let dp_name = getName(data['deceased_person']);

        function code(fields, data, user_name, dp_name){
            for (const form_type in fields){
                for (const field in fields[form_type]){
                    if (field === 'relation') {
                        document.getElementById(fields[form_type][field]).click();
                    } else {
                        let value = '';
                        if (field === 'contact_name'){
                            if (form_type === 'user'){
                                value = user_name;
                            } else {
                                value = dp_name
                            }
                        } else if (field === 'proof'){
                            value = 'zie bijlage';
                        } else {
                            value = data[form_type][field] || '';
                        }
                        document.getElementById(fields[form_type][field]).focus();
                        document.execCommand('insertText', false, value);
                    }
                }
            }
        }

        chrome.scripting.executeScript({
            target: { tabId: active_tab.id },
            function: code,
            args: [fields, data, user_name, dp_name],
        });

        setTimeout(function () {
            chrome.scripting.executeScript({
                target: { tabId: active_tab.id },
                function: attachDeathCertFile,
                args: [deceased_person.death_cert_base64, deceased_person.death_cert_mime_type, deceased_person.death_cert_filename, org_name],
            });
        }, 1000);
    }
}

export default fillWebForm

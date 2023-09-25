import fillWebForm from "./webform";
import { alertFunction, logFunction } from "./utils"
let api_requests = [];
let tasks = [];

function loadOpenTasks(active_tab, url, org_id, closure_id = null, force = false, callback = null) {
    let api_endpoint = `${process.env.API_BASE_URL}/extension-api/dim/get-form-fields/${org_id}`;
    if (closure_id) {
        api_endpoint += `/${closure_id}`;
    }

    // (tries to) prevent browser from making SAME api request multiple times, unless needed/forced
    if (tasks[url] && callback && !force) {
        callback(tasks[url]);
    } else if (org_id) { 
        api_requests.push(api_endpoint);
        fetch(api_endpoint, {
            credentials: "same-origin",
            headers: {
                'Content-Type': 'application/json',
                'Accept':'application/json'
          }
        })
            .then(response => response.json())
            .then(data => {
                if (data.cases !== undefined) {
                    tasks[url] = data.cases;
                    if (callback) {
                        callback(tasks[url]);
                    }
                    if (closure_id) {
                        setTimeout(function () {
                            fillWebForm(url, active_tab, closure_id, tasks[url]);
                            api_requests.splice(api_requests.indexOf(api_endpoint), 1);
                        }, 1000);
                    }
                } else {
                    alertFunction(active_tab.id, `Error: tab.id: ${active_tab.id} message: ${data.message}`);
                    logFunction(active_tab.id, data.message)

                }
            })
            .catch((error) => {
                logFunction(active_tab.id, `Error: ${error}`)
            });
    } else {
        logFunction(active_tab.id, `unknown org_id = ${org_id}`);
    }
}

export default loadOpenTasks
'use strict';
import loadOpenTasks from "./modules/app";
import fillWebForm from "./modules/webform";
import { getUrlParams, getAllowedUrls, getName } from "./modules/utils";

let open_tasks_el = document.getElementById('open-tasks');
let reload_open_tasks = document.getElementById('load-open-tasks');

chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
    let active_tab = tabs[0];
    let uri_params = getUrlParams(active_tab.url);  
    let url = uri_params.url;

    if (getAllowedUrls().findIndex(object => {return object.urlMatches === url}) > -1) { 
        let org_id = uri_params.org_id;
        let closure_id = uri_params.closure_id;

        loadOpenTasks(active_tab, url, org_id, null, false, function(tasks) {
            populateTasks(tasks, closure_id);
        });

    } else {
        open_tasks_el.length = 0;
        open_tasks_el.options[open_tasks_el.options.length] = new Option('-- Web-form not supported --', '');
    }
});

reload_open_tasks.onclick = function() {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        let active_tab = tabs[0];
        let uri_params = getUrlParams(active_tab.url);
        let url = uri_params.url;

        if (getAllowedUrls().findIndex(object => {return object.urlMatches === url}) > -1) {
            let org_id = uri_params.org_id;
            let closure_id = uri_params.closure_id;

            // clear current lists
            open_tasks_el.length = 0;
            open_tasks_el.options[open_tasks_el.options.length] = new Option('-- Reloading open tasks... --', '');
    
            foreceReloadTasks(url, active_tab, org_id, closure_id);
        }
    });
};

open_tasks_el.onchange = function(element) {
    let closure_id = element.target.value;

    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        let active_tab = tabs[0];
        let uri_params = getUrlParams(active_tab.url);
        let url = uri_params.url;
        let org_id = uri_params.org_id;

        loadOpenTasks(active_tab, url, org_id, null, false, function(tasks) {
            fillWebForm(url, active_tab, closure_id, tasks)
        });
    });
};

function populateTasks(tasks, closure_id)
{
    // clear Open Task dropdown list
    open_tasks_el.length = 0;

    if (Object.keys(tasks).length > 0) {
        open_tasks_el.options[open_tasks_el.options.length] = new Option('-- Select a Task --', '');
        for (const [id, props] of Object.entries(tasks)) {
            let deceased_person = getName(props.deceased_person);
            open_tasks_el.options[open_tasks_el.options.length] = new Option(`Case #${id} - ${deceased_person}`, id);
        }

        if (closure_id) {
            open_tasks_el.value = closure_id;
        }
    } else {
        open_tasks_el.options[open_tasks_el.options.length] = new Option('-- No available open Task --', '');
    }
}

function foreceReloadTasks(url, active_tab, org_id, closure_id = null)
{
    loadOpenTasks(active_tab, url, org_id, null, true, function(tasks) {
        populateTasks(tasks, closure_id);
    });
}
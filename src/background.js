import loadOpenTasks from "./modules/app";
import { getUrlParams, getAllowedUrls } from "./modules/utils";

chrome.webNavigation.onCompleted.addListener(function(tab) {
    //prevent script from running in iframes
    if(tab.frameId === 0){ 
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            let active_tab = tabs[0];
            let url_params = getUrlParams(active_tab.url);
            let url = url_params.url;
            let org_id = url_params.org_id;
            let closure_id = url_params.closure_id;
    
            loadOpenTasks(active_tab, url, org_id, closure_id, true);
        })
    }
}, {
    url: getAllowedUrls()
});

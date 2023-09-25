import organizations from "./organizations";
 
function getUrlParams(raw_web_form_url) {
    let web_form_url = raw_web_form_url.replace('#', '');
    let uri_request = raw_web_form_url.split('?');

    return {
        'url': uri_request[0],
        'closure_id': getParamValue(web_form_url, 'closure_id'),
        'org_id': getParamValue(web_form_url, 'org_id'),
        'action': getParamValue(web_form_url, 'action',)
    };
}

function getParamValue(url, param) {
    return (new URLSearchParams(new URL(url).search).get(param) || false);
}

function getAllowedUrls() {
    const allowed_urls = [];

    for(const organization in organizations) {
        allowed_urls.push({urlMatches : organizations[organization].url});
    } 
    return allowed_urls;
}

function getOrganizationName(url) {
    let org_name = "";
    for(const organization in organizations) {
        if( url === organizations[organization].url){
            org_name = organization;
            break
        }
    } 
    return org_name;
}

function getName(data){ // call with data[user] or data[deceased_person] to get the correct name
    return `${data['first_name']} ${data['prefixes'] ? data['prefixes']+' ' : ''}${data['last_name']}`;
}

function getAddress(data){ //call with data[user] or data[deceased_person] to get the correct address
    return `${data['address']} ${data['house_number']} ${(data['house_number_extra'] ? data['house_number_extra']+' ' : '')}${data['postal_code']} ${data['city']}`;
}

function getCancelText(data, cancel_type){
    return `Beste, ivm het overlijden van ${getName(data['deceased_person'])} geboren op: ${data['deceased_person']['birth_date']} wonende op: ${getAddress(data['deceased_person'])}. Graag per direct ${cancel_type} stopzetten. met vriendelijke groet, ${getName(data['user'])} ${(data['user']['relatie'] ? `(${data['user']['relatie']})` : '')}`;
}

function getEditText(data, edit_type){
    return `Beste, ivm het overlijden van ${getName(data['deceased_person'])} geboren op: ${data['deceased_person']['birth_date']} wonende op: ${getAddress(data['deceased_person'])}. Graag per direct ${edit_type} OVERZETTEN op naam van:`;
}

function checkFileSize(tab_id, death_cert_base64, max_size) {
    let length = death_cert_base64.length;
    let size = (4 * Math.ceil((length /3)) * 0.5624896334383812 /1000 / 1000).toFixed(2);
    if (size > max_size){
        alertFunction(tab_id, `DeathCertificate probably to big, aprox size = ${size} mb`)       
    }
}

function logFunction(tab_id, message){
    function logFunc(message){
        console.log(message);
    }
    chrome.scripting.executeScript({
        target: { tabId: tab_id },
        function: logFunc,
        args: [message]
    });
}

function alertFunction(tab_id, message){
    function alertFunc(message){
        alert(message);
    }
    chrome.scripting.executeScript({
        target: { tabId: tab_id },
        function: alertFunc,
        args: [message]
    });
}

function todaysDate(){
    var today = new Date();
    var date = String(today.getDate()).padStart(2, '0')+'-'+String(today.getMonth() + 1).padStart(2, '0')+'-'+today.getFullYear();  
    return date;
}

export { getUrlParams, getOrganizationName, getAllowedUrls, getName, getAddress, getCancelText, getEditText, checkFileSize, logFunction, alertFunction, todaysDate }
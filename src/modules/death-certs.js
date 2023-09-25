function attachDeathCertFile(death_cert_base64, mime_type, filename, org) {
    var mime_type = mime_type.slice(0, -1);
    var blob = base64_to_blob(death_cert_base64, mime_type);
    var dT = new DataTransfer();
    var file = new File([blob], filename, {type: mime_type});
    dT.items.add(file);

    if (org === "lottery_organization"){
        var inputFile = document.getElementById('file-upload');
        inputFile.value = ''; // clear current uploaded file
        inputFile.files = dT.files;
        var inputFileLabel = document.querySelectorAll('label.label-for-file-upload')[0];
        inputFileLabel.innerHTML = filename;
    }
    if (org === "dpg_media"){
        
        var inputFile = document.getElementById('edit-submitted-bijlage-upload');
        inputFile.value = ''; // clear current uploaded file
        inputFile.files = dT.files;
    }
    if (org === "dpg_magazines"){
        var inputFile = document.getElementById('klntn_attachments');
        inputFile.value = ''; // clear current uploaded file
        inputFile.files = dT.files;
        setTimeout(function() {
            inputFile.dispatchEvent(new Event('change'));
        }, 1000);
    }
    if (org === "mediahuis"){
        var inputFile = document.getElementsByClassName("file-attachment-iframe")[0].contentWindow.document.getElementById('id_attachment');
        inputFile.value = ''; // clear current uploaded file
        inputFile.files = dT.files;
        setTimeout(function() {
            inputFile.dispatchEvent(new Event('change'));
        }, 1000);
    }
    if (org === "anwb"){             
        var inputFile = document.getElementById('fileSelector');
        inputFile.value = ''; // clear current uploaded file
        inputFile.files = dT.files;
        setTimeout(function() {
            inputFile.dispatchEvent(new Event('change'));
        }, 1000);
    }
    if (org === "linkedin"){             
        var inputFile = document.getElementById('new-attachment');
        inputFile.value = ''; // clear current uploaded file
        inputFile.files = dT.files;
        setTimeout(function() {
            inputFile.dispatchEvent(new Event('change'));
        }, 1000);
    }
}

function base64_to_blob(base64_data, content_type = '', slice_size = 512) {
    var byteCharacters = atob(base64_data);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += slice_size) {
        var slice = byteCharacters.slice(offset, offset + slice_size);
        var byte_numbers = new Array(slice.length);

        for (var i = 0; i < slice.length; i++) {
            byte_numbers[i] = slice.charCodeAt(i);
        }

        var byte_array = new Uint8Array(byte_numbers);
        byteArrays.push(byte_array);
    }

    return new Blob(byteArrays, {type: content_type});
}

export default attachDeathCertFile

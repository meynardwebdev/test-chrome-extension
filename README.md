# Overview

This Chrome extension is for internal use exclusively for Closure employees in auto-filling web forms for processing Cancellations/Take-overs


## Installation
1. Download or clone the repo on your local machine

1. Copy the .env.example file to .env.development or .env.production and change the value of *API_BASE_URL*

    ```
    $ cp .env.example .env.development
    $ cp .env.example .env.production
    ```    

1. Install npm and build project by running the command below under the root directory:

    ```
    $ npm install
    $ npm run build
    ```
 
1. Then load the extension package from the newly created */dist* directory 

1. <p><a href="https://github.com/closurebv/dim-webform-filler-extension/blob/master/install-web-extension.mp4?raw=true" target="_blank">See installation video</a></p>
    <video controls preload="metadata">
    <source type="video/mp4" src="https://github.com/closurebv/dim-webform-filler-extension/blob/master/install-web-extension.mp4" target="_blank"></source>
    If your browser does not support playing HTML5 video. You can
    <a href="https://github.com/closurebv/dim-webform-filler-extension/blob/master/install-web-extension.mp4">download a copy of the video
    file</a> instead.
    </video>

### Supported Organization Web Forms

- Postcodeloterij/Vriendenloterij
- DPG-Media
- DPG-Magazines
- Mediahuis
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

### Supported Organization Web Forms

- Postcodeloterij/Vriendenloterij
- DPG-Media
- DPG-Magazines
- Mediahuis

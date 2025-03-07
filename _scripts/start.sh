#!/bin/bash

_scripts/start-db.sh 

_scripts/build-ui.sh 

npm i 

npm run build 

npm run start:prod

#!/bin/bash

REPO_URL="git@github.com:Abdelnaby-M/sample-auth-ui.git"

echo "Building UI ..."

# Check if sample-auth-ui directory exists
if [ ! -d "../sample-auth-ui" ]; then
    echo "Directory 'sample-auth-ui' does not exist. Cloning the repository..."
    git clone ${REPO_URL} ../sample-auth-ui
fi

cd ../sample-auth-ui
npm i
npm run build
cp -r out ../sample-auth/client
cp -r public ../sample-auth/client
cd ../sample-auth

echo " *** UI build has been done successfully *** "
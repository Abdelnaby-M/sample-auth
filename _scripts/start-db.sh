#!/bin/bash

CONTAINER_NAME="auth-mongo"
VOLUME_NAME="auth_data"
CONFIG_VOLUME_NAME="auth_mongo_config"

# Check if container with the specified name exists
if [ "$(docker ps -aqf name=${CONTAINER_NAME})" ]; then
    if [ "$(docker ps -qf name=${CONTAINER_NAME})" ]; then
        echo "Container '${CONTAINER_NAME}' is already running."
    else
        echo "Container '${CONTAINER_NAME}' already exists but is not running."
        echo "Starting '${CONTAINER_NAME}'"
        # Start the existing container
        docker start ${CONTAINER_NAME}
    fi
else
    # Run the container
    docker run -d --name=${CONTAINER_NAME} \
        -v ${VOLUME_NAME}:/data/db \
        -v ${CONFIG_VOLUME_NAME}:/data/configdb \
        -p 27017:27017 \
        mongodb/mongodb-community-server
fi
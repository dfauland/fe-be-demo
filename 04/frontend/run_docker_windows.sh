#!/bin/bash

# Stop and remove any existing container with the same name
docker stop react-frontend 2>/dev/null || true
docker rm react-frontend 2>/dev/null || true

# Build the Docker image
docker build -t react-frontend .

# Get the absolute path of the current directory
CURRENT_DIR=$(pwd)

# Run the container with local backend
docker run \
    --rm \
    --volume "${CURRENT_DIR}:/app" \
    --publish 3000:80 \
    -e BACKEND_DOMAIN=host.docker.internal:8080 \
    -e BACKEND_PROTOCOL=http \
    -it \
    --name react-frontend \
    react-frontend


# Run the container with Azure backend
# docker run \
#     --rm \
#     --volume "${CURRENT_DIR}:/app" \
#     --publish 3000:80 \
#     -e BACKEND_DOMAIN=dummy-backend-f3eyddc7ehhteway.germanywestcentral-01.azurewebsites.net \
#     -it \
#     --name react-frontend \
#     react-frontend

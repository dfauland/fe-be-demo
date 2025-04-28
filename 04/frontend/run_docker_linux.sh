#!/bin/bash

# Stop and remove any existing container with the same name
docker stop react-frontend 2>/dev/null || true
docker rm react-frontend 2>/dev/null || true

# Build the Docker image
docker build -t react-frontend .

# Get the absolute path of the current directory
CURRENT_DIR=$(pwd)

# Run the container
docker run \
    --rm \
    --volume .:/app \
    --publish 3000:80 \
    -it \
    --name react-frontend \
    react-frontend

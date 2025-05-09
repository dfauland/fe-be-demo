#!/bin/bash

# Initialize default values
version="latest"
respository_name="dummy-frontend"
container_login_server_name="dtcinsights-drhcdfbsfag7bjhu"
container_registry="$container_login_server_name.azurecr.io"


# Parse named arguments
for arg in "$@"; do
    case $arg in
        --version=*)
        version="${arg#*=}"
        ;;
        *)
        echo "Error: Unknown argument $arg"
        echo "Usage: $0 [--version=<version>]"
        echo "  version (optional) must be 'latest', or follow pattern 'x.y.z' (defaults to 'latest')"
        exit 1
        ;;
    esac
done



# Validate version parameter (if not already set to latest)
if [[ "$version" != "latest" ]] && [[ ! "$version" =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
    echo "Error: Version must be 'latest', or follow pattern 'x.y.z'"
    echo "Usage: $0 [--version=<version>]"
    exit 1
fi

echo ""
echo "Attempting to deploy to Azure with the following parameters:"
echo "  Version: $version"
echo "  Repository Name: $respository_name"
echo "  Container Registry Name: $container_login_server_name"
echo ""

echo "Authenticating container registry"
echo ""
az acr login --name $container_login_server_name
if [ $? -ne 0 ]; then
    echo "Failed to authenticate container registry"
    exit $?
fi

echo ""
echo "Tagging and pushing backend"
echo ""
docker build . -t $respository_name
docker tag $respository_name $container_registry/$respository_name:$version
docker push $container_registry/$respository_name:$version
if [ $? -ne 0 ]; then
    echo "Failed to push backend"
    exit $?
fi

echo ""
echo "Deployment completed successfully"

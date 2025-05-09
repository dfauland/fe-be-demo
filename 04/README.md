# v0.4 | Frontend - Backend demo application
A simple web app showing how frontend and backend work together.

**Content overview**:
- [Version history](#version-history)
- [Deployment on Azure](#deployment-on-azure)
- [Using Docker](#using-docker)
- [Installation](#installation)
    - [Backend](#backend)
    - [Frontend](#frontend)


## Version history

| Index | Project dir | Version | FE/BE | Feature Description             |
| ----- | ----------- | ------- | ----- | ------------------------------- |
| 10    | 04          | 0.4    | FE    | Removed the backend domain name from the frontend code since this should not be hardcoded  |
| 11    | 04          | 0.4    | FE    | Updated the `vite.config.js` to add a development proxy to point to `localhost` backend domain when running locally with `npm run dev`  |
| 12    | 04          | 0.4    | FE    | Updated nginx config to point to the real backend domain in prod and to `localhost` when running locally in docker |
| 13    | 04          | 0.4    | FE/BE | Created a deployment script for Azure  |
| 14    | 04          | 0.4    | FE | Fixed an incorrect nginx configuration  |
| 15    | 04          | 0.4    | FE | Updated docker shell script to properly start the container  |



**GitHub changes:**
- 10-13 | [caeacfd](https://github.com/dfauland/fe-be-demo/commit/caeacfdd669a9aa9ac5cb0409ec7221061b673e2)
- 14-15 | tbd

## Deployment on Azure
In order to be able to deploy on Azure you need the following prerequisites: 
- Access to an Azure resource group that has a `Container Registry` and a `Web App` for frontend and backend
- The [Azure CLI](https://azcliprod.blob.core.windows.net/msi/azure-cli-2.55.0.msi) needs to be installed on your machine
- Authenticate with azure on your machine with the following command (make sure to choose the correct tenant): `az login --tenant eviden.onmicrosoft.com` 
- [Docker](https://www.docker.com/) needs to be installed and running on your machine

### Deploy backend
Go to the `backend` folder in a new linux like terminal (For Windows: Use `git bash` for example) and run:
```
./deploy_on_azure.sh --version=1.2.3
```

### Deploy frontend
Go to the `frontend` folder in a new linux like terminal (For Windows: Use `git bash` for example) and run:
```
./deploy_on_azure.sh --version=1.2.3
```


## Using Docker
In order to use this application with docker make sure [docker](https://www.docker.com/) is installed and running.

### Docker backend
Go to the `backend` folder in a new linux like terminal (For Windows: Use `git bash` for example) and run:

**Linux/Mac:**
```
./run_docker_linux.sh
```

**Windows:**
```
./run_docker_windows.sh
```

Backend will run on [http://localhost:8080/](http://localhost:8080/)

### Docker frontend
Go to the `frontend` folder in a new linux like terminal (For Windows: Use `git bash` for example) and run:
**Linux/Mac:**
```
./run_docker_linux.sh
```

**Windows:**
```
./run_docker_windows.sh
```

Frontend will run on [http://localhost:3000/](http://localhost:3000/)

## Installation
### Backend
#### Initial install
The python backend uses [uv](https://github.com/astral-sh/uv) as a package manager instead of pyenv / conda or sth similar.

To install `uv` follow these steps:

- **MacOS / Linux**:
    ```
    curl -LsSf https://astral.sh/uv/install.sh | sh
    ```

- **Windows**:
    ```
    powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
    ```

In order to setup a new python project with `uv` do the following (**only necessary** for **new** uv projects not for existing ones):
- Open a new terminal window and run:
    ```
    uv init backend
    ```

- Specify the python version you want to use in `backend/.python-version` (e.g. *3.12*)
- Specify the allowed python version to run the project with uv in `backend/pyproject.toml` (e.g. *requires-python = ">=3.12"*)
- Specify the required dependencies (python packages) in `backend/pyproject.toml` as well:
```
dependencies = [
    "fastapi>=0.115.12",
    "uvicorn>=0.34.2",
]
```

#### Run backend
In order to run a python project using `uv` simply run the following command in the backend directory:
```
uv run main.py
```

This will start the fastapi backend. It can be accessed in the browser by going to this url: http://localhost:8080/ 



### Frontend
#### Initial install
`npm` is the standard package manager for frontend related applications. In order to get `npm` working on your machine you need to install [node.js](https://nodejs.org/en/download).

You can verify the installation of `node.js` by tpying the following command in the terminal:
```
npm -v
```

In order to create a frontend application with `react` you can use a so called built tool to speed up setup & installation of your code. (**only necessary** for **new** react projects not for existing ones) <br />
In this example we will use [vite](https://vite.dev/).
Create a new `react` project with the following command:
```
npm create vite@latest frontend -- --template react
```

#### Run frontend
In order to run the frontend install all dependencies (this needs to be done only once or when dependencies change):
```
npm install
```

Start the frontend with this command:
```
npm run dev
```
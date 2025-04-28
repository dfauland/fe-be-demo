# v0.2 | Frontend - Backend demo application
A simple web app showing how frontend and backend work together.

**Content overview**:
- [Version history](#version-history)
- [Installation](#installation)
    - [Backend](#backend)
    - [Frontend](#frontend)


## Version history

| Index | Project dir | Version | FE/BE | Feature Description             |
| ----- | ----------- | ------- | ----- | ------------------------------- |
| 8    | 03          | 0.3    | BE    | TBD  |


**GitHub changes:**
- 8 | tbd


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
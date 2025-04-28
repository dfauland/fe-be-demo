# Frontend - Backend demo application
A simple web app showing how frontend and backend work together.

**Content overview**:
- [Repo Structure](#repo-structure)
- [Tech Stack used](#tech-stack-used)
- [Version History](#version-history)

## Repo Structure
The repo is structured as follows:
```
.
└── FE-BE-DEMO
    ├── 00/            --> The first iteration v0 of the webapp
    │   ├── backend/   --> Contains the fastapi backend
    │   ├── frontend/  --> Contains the react frontend 
    │   └── README.md  --> Installation + features
    ├── 01/            --> The second iteration v0.1 of the webapp
    │   ├── backend/   --> Contains the fastapi backend
    │   ├── frontend/  --> Contains the react frontend  
    │   └── README.md  --> Installation + features
    ├── 02/            --> The third iteration v0.2 of the webapp
    │   ├── backend/   --> Contains the fastapi backend
    │   ├── frontend/  --> Contains the react frontend  
    │   └── README.md  --> Installation + features
    └── README.md      --> General information about the repo
```

The initial version (v0) of the webapp is located in the [00/](./00/) directory. <br />
The final version of the webapp will be in the highest numbered directory. <br />
Each intermediate version (01/, 02/, etc.) represents incremental improvements toward the final version, with new features and refinements added at each step.

## Tech Stack used
**Frontend:** JS - React - Vite <br />
**Backend:** Python - FastAPI - uv (package manager)


## Version History

| Index | Project dir | Version | FE/BE | Feature Description             |
| ----- | ----------- | ------- | ----- | ------------------------------- |
| 7    | 02          | 0.2    | FE    | Call Backend to get real birthday results  |
| 6    | 01          | 0.1     | FE    | Added input field with button to enter birthday & show dummy values in a result table |
| 5    | 01          | 0.1     | BE    | Added route `/birthdayDetails` to calculate certain stats for a given date  |
| 4     | 00          | 0.0     | FE    | Setup Hello World Frontend in React  |
| 3     | 00          | 0.0     | BE    | Setup Hello World Backend in FastAPI |
| 2     | 00          | 0.0     | FE    | Installed frontend dependencies  |
| 1     | 00          | 0.0     | BE    | Installed backend dependencies |

**GitHub changes:**
| Index | GitHub Commit |
| ----- | ------------- |
| 7     | tbd    |
| 6     | [7344575](https://github.com/dfauland/fe-be-demo/commit/7344575e89ed720ef9614ccf7812cfb0340f3739) |
| 5     | [89b2107](https://github.com/dfauland/fe-be-demo/commit/89b2107a782318223e5bfe9dfeb7a3e76c8ae1f5) |
| 1 - 4 | [4b3103a](https://github.com/dfauland/fe-be-demo/commit/4b3103a1768134507f33b92e0cfadd1a2dec22a4) |
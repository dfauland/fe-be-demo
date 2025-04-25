import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from router.birthday.router import bday_router

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {
            "Message": "Hello from the fastapi backend! Access the swagger docs at '/docs'."
        }

# include router
app.include_router(bday_router, tags=["Birthday"])

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8080, log_level="info", reload=True)

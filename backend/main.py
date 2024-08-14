from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS設定
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://test3636-b14ba.web.app"],  # デプロイされたフロントエンドのURLを許可
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class FormData(BaseModel):
    email: str
    name: str
    property: str
    move_in_date: str
    details: str

@app.post("/api/form")
async def submit_form(data: FormData):
    return {"message": "Form submitted successfully", "data": data}

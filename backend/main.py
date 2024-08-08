from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS設定
origins = [
    "http://localhost:3000",  # ReactアプリのURL
    "http://localhost:3002",  # ReactアプリのURL（異なるポートを使用している場合）
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
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

@app.post("/form")
async def submit_form(data: FormData):
    return {"message": "送信完了！", "data": data}

from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS設定
origins = [
    "http://localhost:3000",  # フロントエンドのURL
    "http://localhost:3003",  # エラーに記載されたURL
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # ここに許可するオリジンをリストします
    allow_credentials=True,
    allow_methods=["*"],  # 必要に応じて許可するHTTPメソッドを設定
    allow_headers=["*"],  # 必要に応じて許可するHTTPヘッダーを設定
)

class FormData(BaseModel):
    email: str
    name: str
    property: str
    move_in_date: str
    details: str

@app.post("/form")
async def submit_form(data: FormData):
    return {"message": "Form submitted successfully", "data": data}

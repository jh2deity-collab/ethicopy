import json
from openai import OpenAI
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import os
from dotenv import load_dotenv

load_dotenv()

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

app = FastAPI(title="EthiCopy API", description="White Nudge Marketing Copy Transformer API")

# CORS Settings
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class DiagnosisRequest(BaseModel):
    text: str

class NudgeOption(BaseModel):
    id: str
    type: str  # Transparency, Social Proof, Positive Framing
    text: str
    predicted_ctr: float
    ethics_score: int

class DiagnosisResponse(BaseModel):
    detected_patterns: List[str]
    risk_level: str  # Normal, Warning, High Risk
    explanation: str
    legal_provision: Optional[str]
    transformed_options: List[NudgeOption]
    overall_ethics_score: int

@app.get("/")
async def root():
    return {"message": "Welcome to EthiCopy API"}

@app.post("/api/diagnose", response_model=DiagnosisResponse)
async def diagnose_copy(request: DiagnosisRequest):
    if not os.getenv("OPENAI_API_KEY"):
        # Fallback if no API key
        return get_mock_response()

    try:
        system_prompt = """
        당신은 기업의 비윤리적인 '다크패턴'을 탐지하고 이를 윤리적인 '화이트 넛지'로 변환하는 마켓팅 전문가이자 법률 보조 AI 'EthiCopy'입니다.
        사용자가 입력한 문구를 분석하여 다음 JSON 형식으로 응답하세요:
        {
            "detected_patterns": ["패턴명"],
            "risk_level": "Normal/Warning/High Risk",
            "explanation": "패턴에 대한 설명과 왜 비윤리적인지 기술",
            "legal_provision": "관련 법규 (예: 전자상거래법 제21조)",
            "transformed_options": [
                {"id": "1", "type": "Transparency", "text": "투명성 강조 문구", "predicted_ctr": 4.5, "ethics_score": 95},
                {"id": "2", "type": "Social Proof", "text": "사회적 증거 활용 문구", "predicted_ctr": 5.2, "ethics_score": 92},
                {"id": "3", "type": "Positive Framing", "text": "긍정 프레이밍 활용 문구", "predicted_ctr": 4.8, "ethics_score": 88}
            ],
            "overall_ethics_score": 0~100 사이 점수 (현재 문구의 윤리성 점수)
        }
        
        화이트 넛지 생성 원칙:
        1. Transparency: 정보를 숨기지 않고 명학하게 제공하여 소비자 스스로 결정하게 함.
        2. Social Proof: 가짜 희소성 대신 실제 데이터나 다른 사람의 선택을 정직하게 제시.
        3. Positive Framing: 손실 회피(미구매시 손해) 대신 이득 프라이밍(구매시 혜택) 강조.
        """

        response = client.chat.completions.create(
            model="gpt-4o",
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": f"다음 문구를 진단하고 변환해줘: '{request.text}'"}
            ],
            response_format={ "type": "json_object" }
        )

        result = json.loads(response.choices[0].message.content)
        return DiagnosisResponse(**result)

    except Exception as e:
        print(f"Error during AI diagnosis: {e}")
        return get_mock_response()

def get_mock_response():
    return DiagnosisResponse(
        detected_patterns=["Fake Urgency"],
        risk_level="Warning",
        explanation="'마감 임박'과 같은 표현은 소비자에게 부당한 압박을 줄 수 있는 가짜 긴급성 패턴입니다.",
        legal_provision="전자상거래법 제21조 (금지행위)",
        transformed_options=[
            NudgeOption(id="1", type="Transparency", text="할인 기간이 곧 종료됩니다. 신중하게 고려해보세요.", predicted_ctr=4.5, ethics_score=95),
            NudgeOption(id="2", type="Social Proof", text="현재 150명의 고객이 이 상품을 보고 있습니다.", predicted_ctr=5.2, ethics_score=91),
            NudgeOption(id="3", type="Positive Framing", text="지금 구매하시면 할인 혜택을 안전하게 받으실 수 있습니다.", predicted_ctr=4.8, ethics_score=89),
        ],
        overall_ethics_score=35
    )

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

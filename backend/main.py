from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import ollama
from typing import List

from database import Database
from query_processor import QueryProcessor
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Set CORS policy
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize components
db = Database()
collection = db.init_collection()
query_processor = QueryProcessor()
# ollama.pull("mistral")

class Query(BaseModel):
    query: str

class ChatResponse(BaseModel):
    response: str
    sources: List[str] = []

@app.post("/api/chat", response_model=ChatResponse)
async def chat_endpoint(query: Query):
    try:
        # Process the query
        query_results = query_processor.process_query(query.query, collection)
        
        # Prepare prompt for LLM
        prompt = f"""You are a chatbot representing a portfolio website. 
        Based on this information:
        {query_results['response']}
        
        Please provide a natural, conversational response to: {query.query}
        Use the information provided but make it sound more natural.
        If you can't answer based on the given information, be honest about it."""
        
        # Get response from Ollama
        llm_response = ollama.chat(model="mistral", 
                                 messages=[{'role': 'user', 'content': prompt}])
        
        return ChatResponse(
            response=llm_response['message']['content'],
            sources=query_results['sources']
        )
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
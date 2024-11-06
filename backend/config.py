from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    embedding_model: str = "all-MiniLM-L6-v2"
    llm_model: str = "mistral"
    max_context_length: int = 2048
    
    class Config:
        env_file = ".env"

settings = Settings()
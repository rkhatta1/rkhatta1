import chromadb
from typing import List, Dict
from sentence_transformers import SentenceTransformer
from personalInfo import personal_info

class Database:
    def __init__(self):
        self.client = chromadb.PersistentClient(path="./data")
        self.collection = None
        self.embedding_model = SentenceTransformer('all-MiniLM-L6-v2')
        
    def init_collection(self):
        """Initialize or get the collection and populate with data"""
        self.collection = self.client.get_or_create_collection(
            name="portfolio",
            metadata={"description": "Personal portfolio information"}
        )
        
        # Check if collection is empty and populate if needed
        if self.collection.count() == 0:
            self._populate_collection()
            
        return self.collection
    
    def _populate_collection(self):
        """Populate the collection with personal information"""
        documents = []
        metadatas = []
        ids = []
        counter = 0
        
        for category, items in personal_info.items():
            for item in items:
                documents.append(item)
                metadatas.append({"category": category})
                ids.append(f"doc_{counter}")
                counter += 1
                
        # Generate embeddings for all documents
        embeddings = self.embedding_model.encode(documents).tolist()
        
        # Add to collection
        self.collection.add(
            documents=documents,
            embeddings=embeddings,
            metadatas=metadatas,
            ids=ids
        )
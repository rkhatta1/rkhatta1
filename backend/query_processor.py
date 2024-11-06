from sentence_transformers import SentenceTransformer
from typing import Dict, List, Any
import chromadb
from templates import response_templates
import re

class QueryProcessor:
    def __init__(self):
        self.model = SentenceTransformer('all-MiniLM-L6-v2')
        
    def process_query(self, query: str, collection: chromadb.Collection) -> Dict[str, Any]:
        """Process a query and return relevant information"""
        try:
            # Get query embedding
            query_embedding = self.model.encode(query).tolist()
            
            # Search in vector database
            results = collection.query(
                query_embeddings=[query_embedding],
                n_results=3,
            )
            
            return self._format_response(query, results)
            
        except Exception as e:
            print(f"Error processing query: {str(e)}")
            raise

    def _format_response(self, query: str, results: Dict[str, Any]) -> Dict[str, Any]:
        """Format the query results using templates"""
        if not results['documents'][0]:
            return {
                'response': "I don't have enough information to answer that question.",
                'sources': []
            }
            
        # Determine query type
        query_lower = query.lower()
        query_type = None
        for category in ['work', 'skills', 'education']:
            if category in query_lower:
                query_type = category
                break
                
        # Get relevant documents
        documents = results['documents'][0]
        metadatas = results['metadatas'][0]
        
        # Use template if available
        if query_type and query_type in response_templates:
            template = response_templates[query_type]
            try:
                # Extract variables from the documents
                variables = self._extract_variables(documents, query_type)
                response = template['template'].format(**variables)
            except:
                response = template['fallback']
        else:
            # Fallback to direct combination of relevant documents
            response = " ".join(documents)
            
        return {
            'response': response,
            'sources': documents
        }
        
    def _extract_variables(self, documents: List[str], query_type: str) -> Dict[str, str]:
        """Extract variables from documents for template formatting"""
        variables = {
            'context': " ".join(documents),
            'detail': documents[0] if documents else ""
        }
        
        if query_type == 'work':
            # Try to extract company name
            company_match = re.search(r'at \[([^\]]+)\]', " ".join(documents))
            variables['company'] = company_match.group(1) if company_match else "my current company"
            
        elif query_type == 'skills':
            # Extract skills
            skills = re.findall(r'(Python|JavaScript|Go|React|Vue\.js|Next\.js)', " ".join(documents))
            variables['skills'] = ", ".join(skills) if skills else "various technologies"
            
        elif query_type == 'education':
            # Try to extract university and degree
            uni_match = re.search(r'from \[([^\]]+)\]', " ".join(documents))
            variables['university'] = uni_match.group(1) if uni_match else "my university"
            variables['degree'] = "Computer Science"  # Hardcoded based on your data
            
        return variables
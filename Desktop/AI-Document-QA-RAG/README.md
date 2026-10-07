# AI Document Question Answering System

An AI-powered Document Question Answering System built with Python, FastAPI, Sentence Transformers, Chroma Cloud, Groq, and Retrieval-Augmented Generation (RAG).

The system allows users to ask questions about uploaded PDF documents and generates answers based on the relevant information retrieved from those documents.

## Features

- Upload and process PDF documents
- Extract text from PDF files
- Split documents into chunks
- Generate semantic embeddings
- Store embeddings in Chroma Cloud
- Perform semantic similarity search
- Retrieve relevant document context
- Generate AI-powered answers using Groq
- FastAPI backend
- Simple web-based frontend
- Display document sources with answers

## Technologies Used

- Python
- FastAPI
- Uvicorn
- Sentence Transformers
- Chroma Cloud
- Groq API
- PyPDF
- HTML
- CSS
- JavaScript
- Retrieval-Augmented Generation (RAG)

## Project Structure

```text
AI-Document-QA-RAG/
│
├── api.py
├── ingest.py
├── requirements.txt
├── .env
├── .env.example
├── README.md
│
├── static/
│   └── index.html
│
└── uploaded_pdfs/
    ├── artificial_intelligence.pdf
    ├── data_science.pdf
    ├── machine_learning.pdf
    ├── neural_networks.pdf
    └── python_programming.pdf
    How It Works

The system follows these steps:

PDF documents are placed inside the uploaded_pdfs folder.
ingest.py extracts text from the PDFs.
The extracted text is divided into smaller chunks.
Sentence Transformers generates embeddings for the chunks.
The embeddings and document chunks are stored in Chroma Cloud.
The user enters a question through the web interface.
The question is converted into an embedding.
Chroma Cloud performs semantic similarity search.
The most relevant document chunks are retrieved.
The retrieved context is sent to the Groq LLM.
The AI generates an answer based on the retrieved documents.
The answer and document sources are displayed to the user.
Installation

Clone the repository:

git clone https://github.com/Nargis Ikram/AI-Document-QA-RAG.git

Move into the project directory:

cd AI-Document-QA-RAG

Install the required packages:

pip install -r requirements.txt
Environment Variables

Create a .env file in the project root.

Add:

CHROMA_API_KEY=your_chroma_api_key
CHROMA_TENANT=your_chroma_tenant_id
CHROMA_DATABASE=ai-document-qa
GROQ_API_KEY=your_groq_api_key

Never upload the .env file to GitHub.

Document Ingestion

Place your PDF documents inside:

uploaded_pdfs/

Then run:

python ingest.py

Successful ingestion should show a message similar to:

Ingestion completed successfully!
Run the Application

Start the FastAPI server:

uvicorn api:app --reload

Open the application in your browser:

http://127.0.0.1:8000/app
API Documentation

FastAPI automatically provides interactive API documentation.

Open:

http://127.0.0.1:8000/docs
Example Questions

You can ask questions such as:

What is artificial intelligence?
What is machine learning?
What is data science?
What are neural networks?
What is Python programming?
RAG Architecture
PDF Documents
      ↓
Text Extraction
      ↓
Text Chunking
      ↓
Sentence Transformer Embeddings
      ↓
Chroma Cloud
      ↓
User Question
      ↓
Question Embedding
      ↓
Semantic Search
      ↓
Relevant Document Context
      ↓
Groq LLM
      ↓
AI Generated Answer
      ↓
Web Interface
Security

API keys and other sensitive credentials are stored in .env.

The .env file should never be committed to GitHub.

Use .env.example as a template for required environment variables.

Future Improvements
Support TXT and Markdown files
Drag-and-drop document upload
Multiple document collections
Conversation history
Better source citations
Streaming AI responses
Authentication
Cloud deployment
Improved UI/UX
Author

Nargis Ikram

AI & Data Science Student

Project Type

Intermediate Python + LLM + RAG Project

Built for educational and portfolio purposes.
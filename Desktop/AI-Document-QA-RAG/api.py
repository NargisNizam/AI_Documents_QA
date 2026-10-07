import os

import chromadb
from dotenv import load_dotenv
from fastapi import FastAPI
from pydantic import BaseModel
from sentence_transformers import SentenceTransformer
from groq import Groq
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from prompts import build_rag_prompt

load_dotenv(override=True)


# Environment variables

CHROMA_API_KEY = os.getenv("CHROMA_API_KEY")
CHROMA_TENANT = os.getenv("CHROMA_TENANT")
CHROMA_DATABASE = os.getenv("CHROMA_DATABASE")

GROQ_API_KEY = os.getenv("GROQ_API_KEY")


# Chroma Cloud


chroma_client = chromadb.CloudClient(
    api_key=CHROMA_API_KEY,
    tenant=CHROMA_TENANT,
    database=CHROMA_DATABASE
)

collection = chroma_client.get_or_create_collection(
    name="study_documents",
    metadata={"hnsw:space": "cosine"}
)


# Embedding model

embedding_model = SentenceTransformer("all-MiniLM-L6-v2")


# Groq


groq_client = Groq(api_key=GROQ_API_KEY)


# FastAPI


app = FastAPI(
    title="AI Document Question Answering System",
    description="RAG-based Document QA System",
    version="1.0.0"
)
app.mount("/static", StaticFiles(directory="static"), name="static")


@app.get("/app")
def app_page():
    return FileResponse("static/index.html")


class QuestionRequest(BaseModel):
    question: str


@app.get("/")
def home():
    return {
        "message": "AI Document QA RAG API is running!"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy",
        "documents": collection.count()
    }


@app.post("/ask")
def ask_question(request: QuestionRequest):

    question = request.question.strip()

    if not question:
        return {
            "answer": "Please enter a question."
        }

    # Create embedding for question
    question_embedding = embedding_model.encode(
        question
    ).tolist()

    # Search Chroma
    results = collection.query(
        query_embeddings=[question_embedding],
        n_results=3
    )

    documents = results.get("documents", [[]])[0]
    metadatas = results.get("metadatas", [[]])[0]

    if not documents:
        return {
            "answer": "I could not find relevant information in the uploaded documents."
        }

    context_parts = []

    for i, document in enumerate(documents):

        source = "Unknown"

        if i < len(metadatas) and metadatas[i]:
            source = metadatas[i].get("source", "Unknown")

        context_parts.append(
            f"Source: {source}\n"
            f"Content: {document}"
        )

    context = "\n\n".join(context_parts)

    prompt = prompt = build_rag_prompt(context, question)

    response = groq_client.chat.completions.create(
        model="openai/gpt-oss-20b",
        messages=[
            {
                "role": "system",
                "content": "You answer questions using retrieved document context."
            },
            {
                "role": "user",
                "content": prompt
            }
        ],
        temperature=0.2
    )

    answer = response.choices[0].message.content

    sources = []

    for metadata in metadatas:
        if metadata and metadata.get("source"):
            if metadata["source"] not in sources:
                sources.append(metadata["source"])

    return {
        "question": question,
        "answer": answer,
        "sources": sources
    }
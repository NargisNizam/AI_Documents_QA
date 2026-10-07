import os
from pathlib import Path

import chromadb
from dotenv import load_dotenv
from pypdf import PdfReader
from sentence_transformers import SentenceTransformer


# Load environment variables
load_dotenv(override=True)

CHROMA_API_KEY = os.getenv("CHROMA_API_KEY")
CHROMA_TENANT = os.getenv("CHROMA_TENANT")
CHROMA_DATABASE = os.getenv("CHROMA_DATABASE")

# Chroma Cloud client
client = chromadb.CloudClient(
    api_key=CHROMA_API_KEY,
    tenant=CHROMA_TENANT,
    database=CHROMA_DATABASE
)

# Collection
collection = client.get_or_create_collection(
    name="study_documents",
    metadata={"hnsw:space": "cosine"}
)

# Embedding model
model = SentenceTransformer("all-MiniLM-L6-v2")

# PDF folder
PDF_FOLDER = Path("uploaded_pdfs")


def extract_text_from_pdf(pdf_path):
    reader = PdfReader(pdf_path)
    text = ""

    for page in reader.pages:
        page_text = page.extract_text()

        if page_text:
            text += page_text + "\n"

    return text


def create_chunks(text, chunk_size=500, overlap=50):
    words = text.split()
    chunks = []

    start = 0

    while start < len(words):
        end = start + chunk_size
        chunk = " ".join(words[start:end])

        if chunk.strip():
            chunks.append(chunk)

        start += chunk_size - overlap

    return chunks


def main():
    pdf_files = list(PDF_FOLDER.glob("*.pdf"))

    if not pdf_files:
        print("No PDF files found in uploaded_pdfs folder.")
        return

    all_chunks = []
    all_ids = []
    all_metadata = []

    for pdf_path in pdf_files:
        print(f"Reading: {pdf_path.name}")

        text = extract_text_from_pdf(pdf_path)

        if not text.strip():
            print(f"No text found in {pdf_path.name}")
            continue

        chunks = create_chunks(text)

        print(f"Chunks created: {len(chunks)}")

        for i, chunk in enumerate(chunks):
            all_chunks.append(chunk)
            all_ids.append(f"{pdf_path.stem}_{i}")
            all_metadata.append({
                "source": pdf_path.name
            })

    if not all_chunks:
        print("No text chunks available for ingestion.")
        return

    print(f"Total chunks: {len(all_chunks)}")

    print("Creating embeddings...")
    embeddings = model.encode(
        all_chunks,
        show_progress_bar=True
    ).tolist()

    print("Uploading to Chroma Cloud...")

    collection.upsert(
        ids=all_ids,
        documents=all_chunks,
        embeddings=embeddings,
        metadatas=all_metadata
    )

    print("Ingestion completed successfully!")
    print(f"Cloud collection count: {collection.count()}")


if __name__ == "__main__":
    main()
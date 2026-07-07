from fastapi import FastAPI
from pydantic import BaseModel
import pickle

# Load trained model
with open("model.pkl", "rb") as file:
    model = pickle.load(file)

# Load vectorizer
with open("vectorizer.pkl", "rb") as file:
    vectorizer = pickle.load(file)

# Create FastAPI app
app = FastAPI(
    title="Email Spam Classification API",
    description="Predict whether an email is Spam or Ham",
    version="1.0"
)

# Input schema
class Email(BaseModel):
    message: str

# Home endpoint
@app.get("/")
def home():
    return {
        "message": "Welcome to Email Spam Classification API"
    }

# Prediction endpoint
@app.post("/predict")
def predict(email: Email):

    text = vectorizer.transform([email.message])

    prediction = model.predict(text)

    if prediction[0] == 1:
        result = "Spam"
    else:
        result = "Ham"

    return {
        "email": email.message,
        "prediction": result
    }
from fastapi import FastAPI
from pydantic import BaseModel
import pandas as pd
import joblib

# Load Model
model = joblib.load("model.pkl")

# Load Dataset
data = pd.read_csv("dataset/mnist.csv")

app = FastAPI(
    title="MNIST Digit Recognition API",
    description="Predict handwritten digits using Machine Learning",
    version="1.0"
)

# Input Model
class DigitRequest(BaseModel):
    index: int

# Home Endpoint
@app.get("/")
def home():
    return {
        "message": "Welcome to MNIST Digit Recognition API"
    }

# Prediction Endpoint
@app.post("/predict")
def predict(request: DigitRequest):

    if request.index < 0 or request.index >= len(data):
        return {
            "error": f"Please enter an index between 0 and {len(data)-1}"
        }

    sample = data.iloc[request.index]

    actual = int(sample["Label"])

    pixels = sample.drop("Label").to_frame().T

    prediction = int(model.predict(pixels)[0])

    return {
        "Index": request.index,
        "Actual Digit": actual,
        "Predicted Digit": prediction
    }
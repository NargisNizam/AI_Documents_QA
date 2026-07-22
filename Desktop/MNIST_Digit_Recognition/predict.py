import joblib
import pandas as pd

# Load Model
model = joblib.load("model.pkl")

# Load Dataset
data = pd.read_csv("dataset/mnist.csv")

# Select Sample
sample = data.iloc[0]

actual_label = sample["Label"]

image = sample.drop("Label").to_frame().T

prediction = model.predict(image)

print("=" * 50)
print("MNIST DIGIT RECOGNITION")
print("=" * 50)

print("Actual Digit    :", actual_label)
print("Predicted Digit :", prediction[0])
# ==========================================
# Email Spam Classification using ML
# Author: Nargis
# ==========================================

import pandas as pd
import pickle

from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix

# ===========================
# Load Dataset
# ===========================

data = pd.read_csv("spam.csv", encoding="latin-1")

# ===========================
# Remove Empty Columns
# ===========================

data = data.drop(columns=["Unnamed: 2", "Unnamed: 3", "Unnamed: 4"])

# ===========================
# Rename Columns
# ===========================

data.columns = ["label", "message"]

print("\nDataset Preview\n")
print(data.head())

# ===========================
# Check Missing Values
# ===========================

print("\nMissing Values\n")
print(data.isnull().sum())

# ===========================
# Encode Labels
# ham = 0
# spam = 1
# ===========================

data["label"] = data["label"].map({
    "ham": 0,
    "spam": 1
})

# ===========================
# Features & Target
# ===========================

X = data["message"]
y = data["label"]

# ===========================
# Convert Text into Numbers
# ===========================

vectorizer = TfidfVectorizer(stop_words="english")

X = vectorizer.fit_transform(X)

# ===========================
# Train Test Split
# ===========================

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)

# ===========================
# Train Model
# ===========================

model = LogisticRegression()

model.fit(X_train, y_train)

# ===========================
# Prediction
# ===========================

y_pred = model.predict(X_test)

# ===========================
# Accuracy
# ===========================

accuracy = accuracy_score(y_test, y_pred)

print("\nAccuracy:", round(accuracy * 100, 2), "%")

# ===========================
# Classification Report
# ===========================

print("\nClassification Report\n")

print(classification_report(y_test, y_pred))

# ===========================
# Confusion Matrix
# ===========================

print("\nConfusion Matrix\n")

print(confusion_matrix(y_test, y_pred))

# ===========================
# Save Model
# ===========================

pickle.dump(model, open("model.pkl", "wb"))

pickle.dump(vectorizer, open("vectorizer.pkl", "wb"))

print("\nModel Saved Successfully!")
print("Vectorizer Saved Successfully!")
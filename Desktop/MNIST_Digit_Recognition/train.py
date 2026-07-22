import pandas as pd
import joblib

from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix

# ===========================
# Load Dataset
# ===========================

data = pd.read_csv("dataset/mnist.csv")

print("=" * 50)
print("Dataset Loaded Successfully")
print("=" * 50)

# ===========================
# Features and Labels
# ===========================

X = data.drop("Label", axis=1)
y = data["Label"]

# ===========================
# Train Test Split
# ===========================

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)

print("Training Samples :", X_train.shape)
print("Testing Samples  :", X_test.shape)

# ===========================
# Train Model
# ===========================

print("\nTraining Model... Please Wait.\n")

model = RandomForestClassifier(
    n_estimators=100,
    random_state=42
)

model.fit(X_train, y_train)

print("Model Trained Successfully!")

# ===========================
# Prediction
# ===========================

y_pred = model.predict(X_test)

# ===========================
# Evaluation
# ===========================

accuracy = accuracy_score(y_test, y_pred)

print("\nAccuracy:", round(accuracy * 100, 2), "%")

print("\nClassification Report\n")
print(classification_report(y_test, y_pred))

print("\nConfusion Matrix\n")
print(confusion_matrix(y_test, y_pred))

# ===========================
# Save Model
# ===========================

joblib.dump(model, "model.pkl")

print("\nModel Saved Successfully!")
import pickle

# Load trained model
with open("model.pkl", "rb") as file:
    model = pickle.load(file)

# Load TF-IDF vectorizer
with open("vectorizer.pkl", "rb") as file:
    vectorizer = pickle.load(file)

print("=" * 50)
print("      EMAIL SPAM CLASSIFIER")
print("=" * 50)

# User input
email = input("\nEnter your email message:\n\n")

# Convert text into TF-IDF features
email_vector = vectorizer.transform([email])

# Prediction
prediction = model.predict(email_vector)

# Result
print("\nResult:")

if prediction[0] == 1:
    print(" This is a SPAM Email.")
else:
    print(" This is a HAM (Not Spam) Email.")
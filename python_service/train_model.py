import pandas as pd
import joblib
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import make_pipeline
from sklearn.metrics import accuracy_score
import os

# Load dataset
# Assuming the script is run from python_service directory and csv is in backend
csv_path = os.path.join(os.path.dirname(__file__), '../backend/Symptom2Disease.csv')

if not os.path.exists(csv_path):
    print(f"Error: Dataset not found at {csv_path}")
    exit(1)

df = pd.read_csv(csv_path)

# Drop any 'Unnamed' columns if they exist (common in CSVs)
df = df.loc[:, ~df.columns.str.contains('^Unnamed')]

# We expect columns 'label' (Disease) and 'text' (Symptom Description)
# Based on previous file view: 1,Psoriasis,"I have been experiencing a skin rash..."
# The headers were: ,label,text. The first column is likely an index.
# Let's ensure we use 'text' as input and 'label' as target.

X = df['text']
y = df['label']

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Create a pipeline
# CountVectorizer converts text to a matrix of token counts
# MultinomialNB is suitable for classification with discrete features (like word counts)
model = make_pipeline(CountVectorizer(), MultinomialNB())

# Train
print("Training model...")
model.fit(X_train, y_train)

# Evaluate
predictions = model.predict(X_test)
accuracy = accuracy_score(y_test, predictions)
print(f"Model Accuracy: {accuracy:.2f}")

# Save
model_file = os.path.join(os.path.dirname(__file__), 'model.pkl')
joblib.dump(model, model_file)
print(f"Model saved to {model_file}")

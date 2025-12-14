from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import pandas as pd
from sentence_transformers import SentenceTransformer, util
import torch

app = Flask(__name__)
CORS(app)

# Load the Sentence Transformer model
# 'all-MiniLM-L6-v2' is a very fast and accurate model for semantic similarity
print("Loading Sentence Transformer model...")
try:
    model = SentenceTransformer('all-MiniLM-L6-v2')
    print("Model loaded successfully!")
except Exception as e:
    print(f"Error loading model: {e}")
    model = None

# Load the dataset and pre-compute embeddings
csv_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'backend', 'Symptom2Disease.csv')
df = pd.DataFrame()
corpus_embeddings = None

if os.path.exists(csv_path):
    print("Loading dataset and computing embeddings...")
    try:
        df = pd.read_csv(csv_path)
        # Ensure text column exists
        if 'text' in df.columns and 'label' in df.columns:
            # Encode all symptom descriptions
            # convert to list for encoding
            sentences = df['text'].tolist()
            corpus_embeddings = model.encode(sentences, convert_to_tensor=True)
            print(f"Encoded {len(sentences)} symptom descriptions.")
        else:
            print("Error: CSV missing 'text' or 'label' columns.")
    except Exception as e:
        print(f"Error processing CSV: {e}")
else:
    print(f"Error: Dataset not found at {csv_path}")

@app.route('/predict', methods=['POST'])
def predict():
    if model is None or corpus_embeddings is None:
        return jsonify({'error': 'Model or Dataset not ready'}), 503

    data = request.json
    symptoms = data.get('symptoms')

    if not symptoms:
        return jsonify({'error': 'No symptoms provided'}), 400

    # Format input
    if isinstance(symptoms, list):
        query_text = "I have " + ", ".join(symptoms)
    else:
        query_text = symptoms
        
    try:
        # Encode the user query
        query_embedding = model.encode(query_text, convert_to_tensor=True)

        # Semantic Search: Find top 10 most similar rows in the dataset
        # We fetch more than 3 because multiple rows might belong to the same disease
        hits = util.semantic_search(query_embedding, corpus_embeddings, top_k=15)
        
        # hits structure: [[{'corpus_id': 123, 'score': 0.85}, ...]]
        top_hits = hits[0]
        
        # Aggregate scores by disease
        disease_scores = {}
        for hit in top_hits:
            idx = hit['corpus_id']
            score = hit['score']
            disease = df.iloc[idx]['label']
            
            # We take the MAX score for each disease encountered (closest single match)
            if disease not in disease_scores:
                disease_scores[disease] = score
            else:
                disease_scores[disease] = max(disease_scores[disease], score)

        # Sort diseases by score
        sorted_diseases = sorted(disease_scores.items(), key=lambda item: item[1], reverse=True)
        
        # Get Top 3 unique diseases
        top_3 = sorted_diseases[:3]
        
        predictions = []
        for disease, score in top_3:
            predictions.append({
                'disease': disease,
                'confidence': float(score)
            })

        if not predictions:
             return jsonify({'error': 'No matches found', 'predictions': []})

        return jsonify({
            'predicted_disease': predictions[0]['disease'],
            'confidence': predictions[0]['confidence'],
            'predictions': predictions
        })

    except Exception as e:
        print(f"Prediction error: {e}")
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000, debug=True, use_reloader=False)

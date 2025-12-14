
import requests
import json

url = "http://127.0.0.1:5000/predict"

test_cases = [
    {"symptoms": ["Fever", "Cough", "Headache"], "expected": "Common Cold"}, # or Flu
    {"symptoms": ["Itching", "Skin Rash", "Nodal Skin Eruptions"], "expected": "Fungal infection"},
    {"symptoms": ["Stomach Pain", "Acidity", "Vomiting"], "expected": "GERD"}, # or similar
]

print("-" * 30)
print("Testing Model Predictions...")
print("-" * 30)

for case in test_cases:
    print(f"\nSymptoms: {case['symptoms']}")
    try:
        response = requests.post(url, json={"symptoms": case['symptoms']})
        if response.status_code == 200:
            data = response.json()
            print(f"Prediction: {data['predicted_disease']} ({data['confidence']:.2f})")
            print("Top 3:")
            for p in data.get('predictions', []):
                print(f"  - {p['disease']}: {p['confidence']:.2f}")
        else:
            print(f"Error: {response.status_code} - {response.text}")
    except Exception as e:
        print(f"Request Failed: {e}")

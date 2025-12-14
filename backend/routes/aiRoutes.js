import express from 'express';
import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load mappings
const mappingPath = path.join(__dirname, '../disease_mapping.json');
let diseaseMapping = {};

try {
  const data = fs.readFileSync(mappingPath, 'utf8');
  diseaseMapping = JSON.parse(data);
} catch (err) {
  console.error("Error loading disease mapping:", err);
}

// Prediction Route
router.post('/predict', async (req, res) => {
  try {
    const { symptoms } = req.body;

    if (!symptoms || symptoms.length === 0) {
      return res.status(400).json({ error: 'No symptoms provided' });
    }

    // Call Python Service
    // Assuming Python service runs on port 5000
    const pythonServiceUrl = 'http://127.0.0.1:5000/predict';

    const response = await axios.post(pythonServiceUrl, { symptoms });
    const { predicted_disease, confidence, predictions } = response.data;

    // Helper to find case-insensitive match
    const findSpecialist = (diseaseName) => {
      const key = Object.keys(diseaseMapping).find(k => k.toLowerCase() === (diseaseName || "").toLowerCase());
      return key ? diseaseMapping[key] : "General Physician";
    };

    // Surgical specialties list to determine if we should suggest a General Surgeon
    const surgicalSpecialties = [
      'Vascular Surgeon',
      'Orthopedic Surgeon',
      'Proctologist',
      'Urologist',
      'Neurosurgeon',
      'General Surgeon',
      'Gynecologist', // Sometimes surgical
      'ENT Specialist' // Sometimes surgical
    ];

    // Map specialists for all predictions
    const topPredictions = (predictions || []).map(p => ({
      ...p,
      specialist: findSpecialist(p.disease)
    }));

    // Primary Specific Specialist (based on top prediction)
    const specificSpecialist = findSpecialist(predicted_disease);

    // Determine Primary Care Recommendation
    // If specific specialist is surgical, recommend General Surgeon as base, else General Physician
    let baseSpecialist = 'General Physician';
    if (surgicalSpecialties.includes(specificSpecialist)) {
      baseSpecialist = 'General Surgeon';
    }

    // Build unique list of recommended specialists
    // Always [Base, Specific]
    const recommended_specialists = [baseSpecialist];
    if (specificSpecialist !== baseSpecialist) {
      recommended_specialists.push(specificSpecialist);
    }

    res.json({
      predicted_disease,
      confidence,
      specialist: specificSpecialist, // Legacy support
      predictions: topPredictions,
      recommended_specialist: specificSpecialist, // Legacy support (single string)
      recommended_specialists: recommended_specialists // New Array: ["General Physician", "Dermatologist"]
    });

  } catch (error) {
    console.error("Error in AI prediction:", error.message);
    if (error.code === 'ECONNREFUSED') {
      return res.status(503).json({ error: 'AI Service is unavailable. Please make sure the Python server is running.' });
    }
    res.status(500).json({ error: 'Internal Server Error during prediction', details: error.message });
  }
});

export const aiRouter = router;

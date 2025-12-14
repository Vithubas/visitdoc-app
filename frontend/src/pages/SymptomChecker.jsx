import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ai_doctor from '../assets/ai_doctor_illustration.png'; // Make sure to import the image

const SymptomChecker = () => {
    const navigate = useNavigate();
    const [selectedSymptoms, setSelectedSymptoms] = useState([]);
    const [additionalText, setAdditionalText] = useState('');
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const commonSymptoms = [
        "Fever", "Cough", "Headache", "Fatigue", "Skin Rash", "Joint Pain",
        "Vomiting", "Stomach Pain", "Chills", "Restlessness"
    ];

    const handleCheckboxChange = (symptom) => {
        if (selectedSymptoms.includes(symptom)) {
            setSelectedSymptoms(selectedSymptoms.filter(s => s !== symptom));
        } else {
            setSelectedSymptoms([...selectedSymptoms, symptom]);
        }
    };

    const checkSymptoms = async () => {
        setLoading(true);
        setError('');
        setResult(null);

        // Combine checkboxes and text
        const finalSymptoms = [...selectedSymptoms];
        if (additionalText.trim()) {
            finalSymptoms.push(additionalText);
        }

        try {
            const { data } = await axios.post('http://localhost:4000/api/ai/predict', {
                symptoms: finalSymptoms
            });
            setResult(data);
        } catch (err) {
            console.error(err);
            setError('Could not predict disease. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='flex flex-col md:flex-row gap-10 p-8 min-h-[80vh] max-w-7xl mx-auto'>

            {/* Left Side - Hero Image & Intro */}
            <div className='flex-1 flex flex-col justify-center items-center md:items-start space-y-6'>
                <div className='relative'>
                    <div className='absolute inset-0 bg-purple-200 rounded-full blur-3xl opacity-30 animate-pulse'></div>
                    <img
                        src={ai_doctor}
                        alt="AI Doctor"
                        className='relative w-full max-w-sm drop-shadow-2xl animate-float'
                    />
                </div>
                <div className='text-center md:text-left'>
                    <h1 className='text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4'>
                        AI Health Assistant
                    </h1>
                    <p className='text-gray-600 text-lg leading-relaxed'>
                        Describe your symptoms and let our advanced AI predict potential conditions and recommend the right specialist for you.
                    </p>
                </div>
            </div>

            {/* Right Side - Checker Form */}
            <div className='flex-1 bg-white p-8 rounded-2xl shadow-xl border border-purple-100 flex flex-col justify-center'>

                {!result ? (
                    <>
                        <h2 className='text-2xl font-bold text-gray-800 mb-6'>What are your symptoms?</h2>

                        {/* Symptoms Selection */}
                        <div className='grid grid-cols-2 gap-3 mb-6'>
                            {commonSymptoms.map((symptom) => (
                                <label key={symptom} className={`flex items-center space-x-2 cursor-pointer p-3 border rounded-xl transition-all duration-300 ${selectedSymptoms.includes(symptom) ? 'bg-purple-100 border-purple-400 transform scale-105' : 'hover:bg-gray-50 border-gray-200'}`}>
                                    <input
                                        type="checkbox"
                                        className='w-5 h-5 accent-purple-600'
                                        checked={selectedSymptoms.includes(symptom)}
                                        onChange={() => handleCheckboxChange(symptom)}
                                    />
                                    <span className='font-medium text-gray-700'>{symptom}</span>
                                </label>
                            ))}
                        </div>

                        {/* Additional Text */}
                        <div className='mb-6'>
                            <label className='block mb-2 font-semibold text-gray-700'>Other Details</label>
                            <textarea
                                className='w-full border p-4 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent outline-none transition shadow-sm resize-none'
                                rows="3"
                                placeholder="E.g. severe headache particularly in the morning..."
                                value={additionalText}
                                onChange={(e) => setAdditionalText(e.target.value)}
                            />
                        </div>

                        <button
                            onClick={checkSymptoms}
                            disabled={loading || (selectedSymptoms.length === 0 && !additionalText)}
                            className={`w-full py-4 rounded-xl text-white font-bold text-lg shadow-lg transform transition-all duration-300 ${loading ? 'bg-purple-300 cursor-not-allowed' : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-[1.02] hover:shadow-purple-500/30'}`}
                        >
                            {loading ? (
                                <span className='flex items-center justify-center gap-2'>
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Analyzing Symptoms...
                                </span>
                            ) : 'Analyze Symptoms'}
                        </button>

                        {error && <p className='mt-4 text-center text-red-500 font-medium bg-red-50 p-2 rounded'>{error}</p>}
                    </>
                ) : (
                    <div className='animate-fadeIn space-y-6'>
                        <div className='flex items-center gap-2 mb-2'>
                            <button onClick={() => setResult(null)} className='text-sm text-gray-500 hover:text-purple-600 flex items-center gap-1'>
                                ← Back
                            </button>
                        </div>

                        <div className='bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-2xl border border-purple-100 shadow-inner'>
                            <h3 className='text-sm font-semibold text-purple-600 uppercase tracking-wide mb-2'>Most Likely Condition</h3>
                            <p className='text-3xl font-bold text-gray-800'>{result.predicted_disease}</p>
                            <div className='mt-2 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800'>
                                {(result.confidence * 100).toFixed(1)}% Match
                            </div>
                        </div>

                        {/* Top Predictions List */}
                        {result.predictions && result.predictions.length > 1 && (
                            <div className='bg-white p-4 rounded-xl border border-gray-100 shadow-sm'>
                                <h4 className='text-sm font-semibold text-gray-500 mb-3'>Other Possibilities</h4>
                                <div className='space-y-3'>
                                    {result.predictions.slice(1).map((pred, idx) => (
                                        <div key={idx} className='flex justify-between items-center text-sm'>
                                            <span className='font-medium text-gray-700'>{pred.disease}</span>
                                            <div className='flex items-center gap-3'>
                                                <span className='text-xs text-gray-400'>({(pred.confidence * 100).toFixed(0)}%)</span>
                                                <span className='bg-gray-100 px-2 py-1 rounded text-purple-600 text-xs'>{pred.specialist}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className='bg-white p-6 rounded-2xl border border-gray-100 shadow-sm'>
                            <h3 className='text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3'>Recommended Specialists</h3>
                            <div className="space-y-4">
                                {(result.recommended_specialists || [result.recommended_specialist]).map((spec, idx) => (
                                    <div key={idx} className="flex flex-col gap-2">
                                        <div className='flex items-center justify-between'>
                                            <span className='text-xl font-bold text-purple-700'>{spec}</span>
                                            <span className='text-3xl'>{spec.includes('Surgeon') ? '😷' : '🩺'}</span>
                                        </div>
                                        <button
                                            onClick={() => navigate(`/doctors/${spec}`)}
                                            className='w-full py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow-lg hover:shadow-green-500/30 transform transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2'
                                        >
                                            <span>Book {spec}</span>
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <p className='text-xs text-gray-400 mt-4'>We recommend consulting both for a comprehensive assessment.</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SymptomChecker;

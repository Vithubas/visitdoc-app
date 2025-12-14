import doc1 from './d1.png';
import doc2 from './d2.png';
import doc3 from './d3.png';
import doc4 from './d4.png';
import doc5 from './d5.png';
import doc6 from './d6.png';
import doc7 from './d7.png';
import doc8 from './d8.png';
import logo from './logo.jpeg';
import profile from './profile.png';
import profile1 from './profile2.png';
import dropdown from './dropdown.png';
import groupprofiles from './group_profiles.png';
import arrowicon from './arrow_icon.png';
import headers from './headers.jpeg';
import cardiology from './cardiology.png';
import neurologist from './neurologist.png';
import dermatology from './Dermatologist.jpeg';
import pediatrician from './pediatricians.png';
import orthopedic from './orthopedicsurgeon.png';
import gynecology from './gynecologist.png';
import psychiatrist from './psychiatrist.png';
import ophthalmology from './ophthalmologist.png';
import doctor3 from './doctor3.png';

// New Doctor Images
import docGenPhysician from './doc_gen_physician.png';
import docDermatologist from './doc_dermatologist.png';
import docNeurologist from './doc_neurologist.png';
import docPediatrician from './doc_pediatrician.png';
import docOrthopedic from './doc_orthopedic.png';
import docGynecologist from './doc_gynecologist.png';
import docCardiologist from './doc_cardiologist.png';
import docPsychiatrist from './doc_psychiatrist.png';
import docUrologist from './doc_urologist.png';
import docEndocrinologist from './doc_endocrinologist.png';

export const assets = {
    logo,
    profile,
    profile1,
    dropdown,
    groupprofiles,
    arrowicon,
    headers,
    doctor3,
};

export const specialties = [
    {
        specialty: 'Cardiologist',
        image: cardiology

    },
    {
        specialty: 'Dermatologist',
        image: dermatology
    },
    {
        specialty: 'Pediatricians',
        image: pediatrician
    },
    {
        specialty: 'Neurologist',
        image: neurologist
    },
    {
        specialty: 'Orthopedic Surgeon',
        image: orthopedic
    },
    {
        specialty: 'Gynecologist',
        image: gynecology
    },
    {
        specialty: 'Psychiatrist',
        image: psychiatrist
    },
    {
        specialty: 'Ophthalmologist',
        image: ophthalmology
    },
    { specialty: 'General Surgeon', image: docGenPhysician }
];


export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Emily Johnson',
        image: docCardiologist, // Updated
        specialty: 'Cardiologist',
        experience: 15,
        degree: 'MBBS',
        fee: 200,
        about: 'He is a renowned cardiologist with over 15 years of experience in treating heart diseases.',
        address: '123 Heartbeat Lane, Cardio City',

    },
    {
        _id: 'doc2',
        name: 'Dr. Olivia Martinez',
        image: docDermatologist, // Updated
        specialty: 'Dermatologist',
        experience: 10,
        degree: 'MBBS',
        fee: 150,
        about: 'Specializes in skin conditions and cosmetic dermatology with a decade of experience.',
        address: '456 Skin Care Blvd, Dermaville',
    },

    {
        _id: 'doc3',
        name: 'Dr. Sophia Taylor',
        image: docPediatrician, // Updated
        specialty: 'Pediatricians',
        experience: 12,
        degree: 'MBBS',
        fee: 180,
        about: 'Dedicated to providing comprehensive healthcare for children and adolescents.',
        address: '789 Child Health St, Kidstown',
    },

    {
        _id: 'doc4',
        name: 'Dr. Sarah Davis',
        image: docNeurologist, // Updated
        specialty: 'Neurologist',
        experience: 20,
        degree: 'MBBS',
        fee: 250,
        about: 'Expert in diagnosing and treating neurological disorders with over 20 years of experience.',
        address: '321 Brainwave Ave, Neurocity',
    },

    {
        _id: 'doc5',
        name: 'Dr. William Wilson',
        image: docOrthopedic, // Updated
        specialty: 'Orthopedic Surgeon',
        experience: 18,
        degree: 'MBBS',
        fee: 300,
        about: 'Specializes in surgical treatments for musculoskeletal issues with 18 years of expertise.',
        address: '654 Bone Care Rd, Orthotown',
    },

    {
        _id: 'doc6',
        name: 'Dr. Amy Wilson',
        image: docGynecologist, // Updated
        specialty: 'Gynecologist',
        experience: 14,
        degree: 'MBBS',
        fee: 220,
        about: 'Provides comprehensive women\'s health services with a focus on gynecological care.',
        address: '987 Women\'s Health St, Gynecity',
    },

    {
        _id: 'doc7',
        name: 'Dr. Laura Brown',
        image: docPsychiatrist, // Updated
        specialty: 'Psychiatrist',
        experience: 16,
        degree: 'MBBS',
        fee: 210,
        about: 'Experienced in mental health care and psychiatric treatments for various conditions.',
        address: '159 Mind Care Blvd, Psychoville',
    },

    {
        _id: 'doc8',
        name: 'Dr. Sophia Taylor',
        image: doc2, // Kept original or use another? keeping generic for Eye
        specialty: 'Ophthalmologist',
        experience: 11,
        degree: 'MBBS',
        fee: 190,
        about: 'Specializes in eye care and vision correction with over a decade of experience.',
        address: '753 Vision St, Ophthaltown',
    },
    // New Doctors with AI Generated Images
    { _id: 'doc9', name: 'Dr. John Doe', image: docGenPhysician, specialty: 'General Physician', experience: 28, degree: 'MBBS', fee: 100, about: 'Experienced General Physician with a focus on preventive care.', address: '123 Main St' },
    { _id: 'doc10', name: 'Dr. Jane Smith', image: docCardiologist, specialty: 'Vascular Surgeon', experience: 12, degree: 'MBBS, MS', fee: 300, about: 'Expert in vascular surgery and vein treatments.', address: '456 Vein Ln' },
    { _id: 'doc11', name: 'Dr. Mike Ross', image: docGenPhysician, specialty: 'Pulmonologist', experience: 10, degree: 'MBBS, MD', fee: 250, about: 'Specialist in respiratory systems and lung health.', address: '789 Lung Blvd' },
    { _id: 'doc12', name: 'Dr. Rachel Green', image: docUrologist, specialty: 'Proctologist', experience: 15, degree: 'MBBS, MS', fee: 280, about: 'Expert in colorectal health and hygiene.', address: '321 Colon Way' },
    { _id: 'doc13', name: 'Dr. Ross Geller', image: docOrthopedic, specialty: 'Rheumatologist', experience: 14, degree: 'MBBS, MD', fee: 260, about: 'Specializes in arthritis, joint pain, and autoimmune diseases.', address: '654 Joint Rd' },
    { _id: 'doc14', name: 'Dr. Monica Geller', image: docGenPhysician, specialty: 'Gastroenterologist', experience: 11, degree: 'MBBS, MD', fee: 240, about: 'Digestive system specialist focusing on gut health.', address: '987 Stomach St' },
    { _id: 'doc15', name: 'Dr. Chandler Bing', image: docGenPhysician, specialty: 'Hepatologist', experience: 13, degree: 'MBBS, MD', fee: 270, about: 'Liver specialist handling complex hepatic cases.', address: '159 Liver Ln' },
    { _id: 'doc16', name: 'Dr. Joey Tribbiani', image: docEndocrinologist, specialty: 'Endocrinologist', experience: 9, degree: 'MBBS, MD', fee: 230, about: 'Hormone specialist treating diabetes and thyroid issues.', address: '753 Gland Blvd' },
    { _id: 'doc17', name: 'Dr. Phoebe Buffay', image: docPediatrician, specialty: 'ENT Specialist', experience: 10, degree: 'MBBS, MS', fee: 200, about: 'Ear, Nose, and Throat specialist for all ages.', address: '258 ENT Ave' },
    { _id: 'doc18', name: 'Dr. Gunther Central', image: docUrologist, specialty: 'Urologist', experience: 16, degree: 'MBBS, MS', fee: 290, about: 'Urinary tract and male reproductive system specialist.', address: '369 Kidney St' },

    // Additional Dummy Doctors for Better Variety
    { _id: 'doc19', name: 'Dr. Gregory House', image: docGenPhysician, specialty: 'General Physician', experience: 20, degree: 'MBBS, MD', fee: 150, about: 'Specializes in diagnostic medicine and complex cases.', address: '221B Baker St' },
    { _id: 'doc20', name: 'Dr. Lisa Cuddy', image: docEndocrinologist, specialty: 'Endocrinologist', experience: 18, degree: 'MBBS, MD', fee: 260, about: 'Hormonal imbalance expert.', address: '123 Princeton Plainsboro' },
    { _id: 'doc21', name: 'Dr. James Wilson', image: docCardiologist, specialty: 'Cardiologist', experience: 15, degree: 'MBBS, MD', fee: 220, about: 'Heart specialist with a focus on oncology patients.', address: '456 Heart St' },
    { _id: 'doc22', name: 'Dr. Eric Foreman', image: docNeurologist, specialty: 'Neurologist', experience: 12, degree: 'MBBS, MD', fee: 240, about: 'Brain and nervous system specialist.', address: '789 Brain Blvd' },
    { _id: 'doc23', name: 'Dr. Robert Chase', image: docCardiologist, specialty: 'Vascular Surgeon', experience: 10, degree: 'MBBS, MS', fee: 280, about: 'Expert in intensive care and vascular surgery.', address: '321 Vein Ave' },
    { _id: 'doc24', name: 'Dr. Allison Cameron', image: docPediatrician, specialty: 'Immunologist', experience: 10, degree: 'MBBS, MD', fee: 210, about: 'Specialist in immune system disorders.', address: '654 Immune Rd' },
    { _id: 'doc25', name: 'Dr. Remy Hadley', image: docGenPhysician, specialty: 'General Physician', experience: 9, degree: 'MBBS, MD', fee: 180, about: 'Internal medicine specialist.', address: '987 Internal Way' },
    { _id: 'doc26', name: 'Dr. Chris Taub', image: docUrologist, specialty: 'Rheumatologist', experience: 14, degree: 'MBBS, MD', fee: 250, about: 'Joint and autoimmune disease expert.', address: '159 Joint Ln' },
    { _id: 'doc27', name: 'Dr. Lawrence Kutner', image: docGenPhysician, specialty: 'Pulmonologist', experience: 8, degree: 'MBBS, MD', fee: 230, about: 'Sports medicine and respiratory health.', address: '753 Breath St' },
    { _id: 'doc28', name: 'Dr. Amber Volakis', image: docDermatologist, specialty: 'Dermatologist', experience: 11, degree: 'MBBS, MD', fee: 220, about: 'Skin and radiology expert.', address: '258 Skin Ave' }
]
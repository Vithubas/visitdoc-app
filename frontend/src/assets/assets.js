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
        specialty: 'Pediatrician',
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
    }   ,    
    {
        specialty: 'Psychiatrist',
        image: psychiatrist
    },
    {
        specialty: 'Ophthalmologist',
        image: ophthalmology
    },
];
   

export const doctors=[
    {
        _id: 'doc1',
        name: 'Dr. Emily Johnson',
        image: doc1,
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
        image: doc2,
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
        image: doc3,
        specialty: 'Pediatrician',
        experience: 12,
        degree: 'MBBS',
        fee: 180,
        about: 'Dedicated to providing comprehensive healthcare for children and adolescents.',
        address: '789 Child Health St, Kidstown',
    },

    {
        _id: 'doc4',
        name: 'Dr. Sarah Davis',
        image: doc4,
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
        image: doc5,
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
        image: doc6,
        specialty: 'Gynecologist',
        experience: 14,
        degree: 'MBBS',
        fee: 220,
        about: 'Provides comprehensive women\'s health services with a focus on gynecological care.',
        address: '987 Women\'s Health St, Gynecity',
   },

   {
    _id:'doc7',
    name: 'Dr. Laura Brown',
    image: doc1,
    specialty: 'Psychiatrist',
    experience: 16,
    degree: 'MBBS',
    fee: 210,
    about: 'Experienced in mental health care and psychiatric treatments for various conditions.',
    address: '159 Mind Care Blvd, Psychoville',
   },

   {
    _id:'doc8',
    name: 'Dr. Sophia Taylor',
    image: doc2,
    specialty: 'Ophthalmologist',
    experience: 11,
    degree: 'MBBS',
    fee: 190,
    about: 'Specializes in eye care and vision correction with over a decade of experience.',
    address: '753 Vision St, Ophthaltown',
   }
]
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Doctors = () => {

  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  const specialties = [
    { name: 'Psychiatrist', icon: '🧠' },
    { name: 'Pediatricians', icon: '👶' },
    { name: 'Orthopedic Surgeon', icon: '🦴' },
    { name: 'Ophthalmologist', icon: '👁️' },
    { name: 'Neurologist', icon: '🧬' },
    { name: 'Gynecologist', icon: '👩‍⚕️' },
    { name: 'Cardiologist', icon: '❤️' },
    { name: 'Dermatologist', icon: '✨' },
    { name: 'General Physician', icon: '👨‍⚕️' },
    { name: 'Vascular Surgeon', icon: '🩸' },
    { name: 'Pulmonologist', icon: '🫁' },
    { name: 'Proctologist', icon: '⚕️' },
    { name: 'Rheumatologist', icon: '🦵' },
    { name: 'Gastroenterologist', icon: '🍽️' },
    { name: 'Hepatologist', icon: '🏥' },
    { name: 'Endocrinologist', icon: '🍬' },
    { name: 'ENT Specialist', icon: '👂' },
    { name: 'Urologist', icon: '💧' }
  ];

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.specialty === speciality));
    } else {
      setFilterDoc(doctors);
    }
  }

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div className='min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Header Section */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl md:text-5xl font-bold text-purple-900 mb-4'>
            Find Your Specialist
          </h1>
          <p className='text-purple-600 text-lg'>Browse through our expert doctors and book your appointment today</p>
        </div>

        <div className='flex flex-col lg:flex-row gap-8'>
          {/* Sidebar - Specialty Filter */}
          <div className='lg:w-64 flex-shrink-0'>
            <div className='bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl shadow-lg p-6 sticky top-4 border-2 border-purple-200'>
              <h3 className='text-xl font-bold text-purple-900 mb-4 flex items-center gap-2'>
                <span className='text-2xl'>🏥</span>
                Specialties
              </h3>
              <div className='space-y-2'>
                <button
                  onClick={() => navigate('/doctors')}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center gap-3 ${!speciality
                    ? 'bg-purple-700 text-white shadow-lg transform scale-105'
                    : 'bg-white text-purple-700 hover:bg-purple-200 hover:translate-x-2'
                    }`}
                >
                  <span className='text-xl'>🔍</span>
                  <span className='font-medium'>All Doctors</span>
                </button>
                {specialties.map((spec, index) => (
                  <button
                    key={index}
                    onClick={() => navigate(`/doctors/${spec.name}`)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center gap-3 ${speciality === spec.name
                      ? 'bg-purple-700 text-white shadow-lg transform scale-105'
                      : 'bg-white text-purple-700 hover:bg-purple-200 hover:translate-x-2'
                      }`}
                  >
                    <span className='text-xl'>{spec.icon}</span>
                    <span className='font-medium'>{spec.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Doctors Grid */}
          <div className='flex-1'>
            {filterDoc.length > 0 ? (
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {filterDoc.map((item, index) => (
                  <div
                    onClick={() => navigate(`/appointments/${item._id}`)}
                    key={index}
                    className='group bg-white rounded-2xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500 border-2 border-purple-200 hover:border-purple-400 hover:-translate-y-2'
                  >
                    <div className='relative bg-gradient-to-br from-purple-100 to-purple-200 p-6'>
                      <img
                        className='w-32 h-32 object-cover mx-auto rounded-full border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-500'
                        src={item.image}
                        alt={item.name}
                        onError={(e) => {
                          e.target.onerror = null;
                          const initial = item.name?.charAt(0).toUpperCase() || 'D';
                          e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect fill='%236366f1' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='80' fill='white'%3E${initial}%3C/text%3E%3C/svg%3E`;
                        }}
                      />
                      <div className='absolute top-4 right-4 bg-white rounded-full px-3 py-1 shadow-md border border-purple-200'>
                        <div className='flex items-center gap-2 text-sm text-green-600 font-semibold'>
                          <span className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></span>
                          <p>Available</p>
                        </div>
                      </div>
                    </div>

                    <div className='p-6 text-center bg-white'>
                      <h3 className='font-bold text-purple-900 text-xl mb-2 group-hover:text-purple-700 transition-colors'>
                        {item.name}
                      </h3>
                      <p className='text-purple-600 font-medium mb-3 bg-purple-100 inline-block px-4 py-1 rounded-full border border-purple-200'>
                        {item.specialty}
                      </p>

                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className='text-center py-20 bg-gradient-to-br from-purple-50 to-white rounded-2xl border-2 border-purple-200'>
                <div className='text-6xl mb-4'>😔</div>
                <h3 className='text-2xl font-bold text-purple-900 mb-2'>No Doctors Found</h3>
                <p className='text-purple-600'>Try selecting a different specialty</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Doctors
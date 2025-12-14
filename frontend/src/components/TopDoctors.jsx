import React, { use, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext.jsx'

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  return (
    <div className='flex flex-col items-center gap-6 my-16 text-gray-900 px-4 md:px-10'>
      {/* Heading */}
      <h1 className='text-3xl font-medium text-center'>
        Choose a Specialist to Book Your Appointment
      </h1>

      {/* Doctors Grid */}
      <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-6 pt-6'>
        {doctors.slice(0, 8).map((item, index) => (
          <div
            onClick={() => navigate(`/appointments/${item._id}`)}
            key={index}
            className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-transform duration-500 bg-white shadow-sm'
          >
            <img
              className='bg-blue-50 w-20 h-20 object-cover mx-auto mt-4 rounded-full'
              src={item.image}
              alt={item.name}
              onError={(e) => {
                e.target.onerror = null;
                const initial = item.name?.charAt(0).toUpperCase() || 'D';
                e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect fill='%236366f1' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='80' fill='white'%3E${initial}%3C/text%3E%3C/svg%3E`;
              }}
            />
            <div className='p-4 text-center'>
              <div className='flex items-center justify-center gap-2 text-sm text-green-500 mb-2'>
                <span className='w-2 h-2 bg-green-500 rounded-full'></span>
                <p>Available</p>
              </div>
              <p className='font-semibold text-gray-900 text-lg'>{item.name}</p>
              <p className='text-gray-500 text-sm'>{item.specialty}</p>
            </div>
          </div>
        ))}
      </div>

      {/* More Button */}
      <button onClick={() => { navigate('/doctors'); scrollTo(0, 0) }} className='mt-6 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300'>
        More
      </button>
    </div>
  )
}

export default TopDoctors

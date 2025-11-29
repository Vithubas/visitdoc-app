import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Appointment = () => {
  const {docId} = useParams();
  const {doctors, currencySymbol} = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const navigate = useNavigate();
  
  // Generate next 7 days
  const getNext7Days = () => {
    const days = [];
    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      days.push({
        day: daysOfWeek[date.getDay()],
        date: date.getDate(),
        month: months[date.getMonth()],
        fullDate: date
      });
    }
    return days;
  };

  // Time slots
  const timeSlots = [
    '08:00 AM', '08:30 AM', '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM',
    '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
    '05:00 PM', '05:30 PM', '06:00 PM'
  ];

  const days = getNext7Days();
  
  const fetchDocInfo = async() => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
    console.log(docInfo);
  }

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  const handleBooking = () => {
    if (selectedDay && selectedTime) {
      alert(`Appointment booked with Dr. ${docInfo.name} on ${selectedDay.day}, ${selectedDay.month} ${selectedDay.date} at ${selectedTime}`);
      // Add your booking logic here
    } else {
      alert('Please select a day and time slot');
    }
  };

  if (!docInfo) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <div className='text-2xl text-purple-600'>Loading...</div>
      </div>
    );
  }

  // Filter related doctors (same specialty, different doctor)
  const relatedDoctors = doctors.filter(
    (doc) => doc.specialty === docInfo.specialty && doc._id !== docInfo._id
  ).slice(0, 4);

  return (
    <div className='min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Doctor Details Section */}
        <div className='bg-gradient-to-br from-purple-50 to-white rounded-3xl shadow-xl border-2 border-purple-200 overflow-hidden mb-12'>
          <div className='grid md:grid-cols-[1fr_2fr] gap-8 p-8'>
            {/* Left - Doctor Image */}
            <div className='flex justify-center items-start'>
              <div className='relative'>
                <div className='absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 rounded-3xl blur-2xl opacity-30'></div>
                <img 
                  src={docInfo.image} 
                  alt={docInfo.name}
                  className='relative w-full max-w-sm rounded-3xl border-4 border-white shadow-2xl'
                />
                <div className='absolute top-4 right-4 bg-white rounded-full px-4 py-2 shadow-lg border-2 border-purple-200'>
                  <div className='flex items-center gap-2 text-sm text-green-600 font-bold'>
                    <span className='w-3 h-3 bg-green-500 rounded-full animate-pulse'></span>
                    <p>Available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Doctor Info */}
            <div className='flex flex-col justify-center'>
              <div className='flex items-center gap-3 mb-3'>
                <h1 className='text-4xl font-bold text-purple-900'>{docInfo.name}</h1>
                <div className='bg-purple-700 text-white p-2 rounded-full'>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>

              <div className='mb-4'>
                <span className='inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-semibold text-lg border-2 border-purple-200'>
                  {docInfo.specialty}
                </span>
              </div>

              <div className='flex items-center gap-2 mb-4'>
                <span className='text-2xl'>🎓</span>
                <span className='text-purple-900 font-semibold text-lg'>{docInfo.degree || 'MBBS, MD'}</span>
              </div>

              <div className='flex items-center gap-2 mb-4'>
                <span className='text-2xl'>💼</span>
                <span className='text-purple-700 font-medium'>{docInfo.experience || '10+ Years Experience'}</span>
              </div>

              <div className='bg-white rounded-2xl p-6 border-2 border-purple-200 mb-6'>
                <h3 className='text-xl font-bold text-purple-900 mb-3 flex items-center gap-2'>
                  <span className='text-2xl'>👨‍⚕️</span>
                  About
                </h3>
                <p className='text-purple-600 leading-relaxed'>
                  {docInfo.about || `Dr. ${docInfo.name} is a highly experienced ${docInfo.specialty} with a passion for providing exceptional patient care. With years of expertise in the field, they are committed to delivering the best medical services to all patients.`}
                </p>
              </div>

              <div className='flex items-center gap-3'>
                <span className='text-3xl'>💰</span>
                <div>
                  <p className='text-purple-600 text-sm font-medium'>Appointment Fee</p>
                  <p className='text-3xl font-bold text-purple-900'><span>{currencySymbol}{docInfo.fee}</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Section */}
        <div className='bg-gradient-to-br from-white to-purple-50 rounded-3xl shadow-xl border-2 border-purple-200 p-8 mb-12'>
          <h2 className='text-3xl font-bold text-purple-900 mb-8 flex items-center gap-3'>
            <span className='text-4xl'>📅</span>
            Book Your Appointment
          </h2>

          {/* Date Selection */}
          <div className='mb-8'>
            <h3 className='text-xl font-bold text-purple-900 mb-4'>Select Date</h3>
            <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3'>
              {days.map((day, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedDay(day)}
                  className={`p-4 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                    selectedDay?.date === day.date
                      ? 'bg-purple-700 text-white border-purple-700 shadow-lg'
                      : 'bg-white text-purple-900 border-purple-200 hover:border-purple-400'
                  }`}
                >
                  <p className='text-xs font-semibold mb-1'>{day.day}</p>
                  <p className='text-2xl font-bold'>{day.date}</p>
                  <p className='text-xs mt-1'>{day.month}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Time Selection */}
          <div className='mb-8'>
            <h3 className='text-xl font-bold text-purple-900 mb-4'>Select Time Slot</h3>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 max-h-80 overflow-y-auto p-2'>
              {timeSlots.map((time, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedTime(time)}
                  className={`p-3 rounded-xl border-2 transition-all duration-300 hover:scale-105 font-semibold ${
                    selectedTime === time
                      ? 'bg-purple-700 text-white border-purple-700 shadow-lg'
                      : 'bg-white text-purple-900 border-purple-200 hover:border-purple-400'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Book Button */}
          <button
            onClick={handleBooking}
            className='w-full bg-gradient-to-r from-purple-700 to-purple-900 text-white py-4 rounded-2xl font-bold text-xl hover:from-purple-800 hover:to-purple-950 transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-3'
          >
            <span className='text-2xl'>✅</span>
            Book Appointment
          </button>
        </div>

        {/* Related Doctors */}
        {relatedDoctors.length > 0 && (
          <div className='mb-12'>
            <h2 className='text-3xl font-bold text-purple-900 mb-8 flex items-center gap-3'>
              <span className='text-4xl'>👥</span>
              Related Doctors
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
              {relatedDoctors.map((doctor, index) => (
                <div
                  key={index}
                  onClick={() => navigate(`/appointments/${doctor._id}`)}
                  className='group bg-white rounded-2xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500 border-2 border-purple-200 hover:border-purple-400 hover:-translate-y-2'
                >
                  <div className='relative bg-gradient-to-br from-purple-100 to-purple-200 p-6'>
                    <img
                      className='w-32 h-32 object-cover mx-auto rounded-full border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-500'
                      src={doctor.image}
                      alt={doctor.name}
                    />
                    <div className='absolute top-4 right-4 bg-white rounded-full px-3 py-1 shadow-md border border-purple-200'>
                      <div className='flex items-center gap-2 text-xs text-green-600 font-semibold'>
                        <span className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></span>
                        <p>Available</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className='p-6 text-center bg-white'>
                    <h3 className='font-bold text-purple-900 text-lg mb-2 group-hover:text-purple-700 transition-colors'>
                      {doctor.name}
                    </h3>
                    <p className='text-purple-600 font-medium text-sm bg-purple-100 inline-block px-3 py-1 rounded-full border border-purple-200'>
                      {doctor.specialty}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Appointment
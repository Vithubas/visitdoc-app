import React from 'react'
import { assets } from '../assets/assets'

const Contacts = () => {
  return (
    <div className='min-h-screen bg-white'>
      {/* Header Section */}
      <div className='text-center py-12 bg-gradient-to-br from-purple-50 to-white'>
        <h1 className='text-5xl md:text-6xl font-bold text-purple-900'>
          CONTACT <span className='bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>US</span>
        </h1>
        <div className='w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mt-4 rounded-full'></div>
        <p className='text-purple-600 text-lg mt-4 max-w-2xl mx-auto px-4'>
          We'd love to hear from you! Reach out to us for any queries or appointments
        </p>
      </div>

      {/* Main Content Section */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Image Section */}
          <div className='relative group'>
            <div className='absolute -inset-4 bg-gradient-to-br from-purple-400 via-pink-400 to-purple-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-all duration-500'></div>
            <img 
              src={assets.headers} 
              alt="Contact Us" 
              className='relative w-full rounded-3xl shadow-2xl border-4 border-purple-100 group-hover:scale-105 transition-transform duration-500'
            />
          </div>

          {/* Contact Info Section */}
          <div className='space-y-8'>
            {/* Office Info Card */}
            <div className='bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 border-2 border-purple-200 hover:shadow-xl transition-all duration-300'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center'>
                  <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' />
                  </svg>
                </div>
                <h2 className='text-2xl font-bold text-purple-900'>OUR OFFICE</h2>
              </div>
              <div className='space-y-3 ml-15'>
                <div className='flex items-start gap-3'>
                  <svg className='w-5 h-5 text-purple-600 mt-1 flex-shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                  </svg>
                  <p className='text-purple-700 text-lg'>No.45, Galle Road, Colombo 03, Sri Lanka</p>
                </div>
                <div className='flex items-center gap-3'>
                  <svg className='w-5 h-5 text-purple-600 flex-shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
                  </svg>
                  <p className='text-purple-700 text-lg font-semibold'>+94-71-111-1111</p>
                </div>
                <div className='flex items-center gap-3'>
                  <svg className='w-5 h-5 text-purple-600 flex-shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                  </svg>
                  <p className='text-purple-700 text-lg font-semibold'>visitdoc1@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Careers Card */}
            <div className='bg-gradient-to-br from-white to-purple-50 rounded-2xl p-8 border-2 border-purple-200 hover:shadow-xl transition-all duration-300'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center'>
                  <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                  </svg>
                </div>
                <h2 className='text-2xl font-bold text-purple-900'>CAREERS AT VisitDoc</h2>
              </div>
              <p className='text-purple-700 text-lg mb-6 ml-15'>
                Join our team of passionate healthcare professionals. Learn more about our teams and explore exciting career opportunities.
              </p>
              <button className='bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-3 rounded-full font-bold hover:from-purple-700 hover:to-purple-900 transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center gap-2'>
                <span>Explore Jobs</span>
                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M13 7l5 5m0 0l-5 5m5-5H6' />
                </svg>
              </button>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  )
}

export default Contacts
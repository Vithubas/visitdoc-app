import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  return (
    <div className='relative overflow-hidden'>
      {/* Animated Background Gradients */}
      <div className='absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-500 to-indigo-600 opacity-90'></div>
      <div className='absolute top-0 left-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob'></div>
      <div className='absolute top-0 right-0 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000'></div>
      <div className='absolute bottom-0 left-1/2 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000'></div>

      {/* Content */}
      <div className='relative flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-16 md:py-24 max-w-7xl mx-auto'>
        {/* Left Side */}
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-6 z-10'>
          {/* Badge */}
          <div className='inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30'>
            <span className='w-2 h-2 bg-green-400 rounded-full animate-pulse'></span>
            <span className='text-white text-sm font-medium'>Trusted by 10,000+ Patients</span>
          </div>

          {/* Main Heading */}
          <h1 className='text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight'>
            Your Health,
            <br />
            <span className='bg-gradient-to-r from-yellow-200 to-pink-200 bg-clip-text text-transparent'>
              Our Priority
            </span>
          </h1>

          <p className='text-lg md:text-xl text-white/90 leading-relaxed max-w-lg'>
            Connect with trusted healthcare professionals. Book appointments instantly and get expert medical care at your convenience.
          </p>

          {/* Features */}
          <div className='flex flex-wrap gap-4 text-white'>
            <div className='flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20'>
              <span className='text-2xl'>⚡</span>
              <span className='text-sm font-medium'>Instant Booking</span>
            </div>
            <div className='flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20'>
              <span className='text-2xl'>🩺</span>
              <span className='text-sm font-medium'>Expert Doctors</span>
            </div>
            <div className='flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20'>
              <span className='text-2xl'>💯</span>
              <span className='text-sm font-medium'>100% Secure</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className='flex flex-wrap gap-4 mt-4'>
            <button
              onClick={() => navigate('/doctors')}
              className='group flex items-center gap-3 bg-white px-8 py-4 rounded-full text-purple-700 font-bold text-lg shadow-2xl hover:shadow-purple-300/50 hover:scale-105 transition-all duration-300'
            >
              <span>Book Appointment</span>
              <svg className='w-5 h-5 group-hover:translate-x-1 transition-transform' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button
              onClick={() => navigate('/symptom-checker')}
              className='flex items-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 px-8 py-4 rounded-full text-white font-bold text-lg hover:bg-white/20 hover:scale-105 transition-all duration-300'
            >
              <span className='text-2xl'>🤖</span>
              <span>AI Symptom Checker</span>
            </button>
          </div>
        </div>

        {/* Right Side - Doctor Image */}
        <div className='md:w-1/2 flex justify-center md:justify-end mt-12 md:mt-0 z-10'>
          <div className='relative'>
            {/* Decorative circles */}
            <div className='absolute -top-4 -left-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse'></div>
            <div className='absolute -bottom-4 -right-4 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse animation-delay-2000'></div>

            {/* Main Image */}
            <div className='relative bg-white/10 backdrop-blur-sm p-2 rounded-3xl border-4 border-white/30 shadow-2xl'>
              <img
                src={assets.groupprofiles}
                alt="doctors group"
                className='w-full max-w-md rounded-2xl shadow-xl'
              />

              {/* Floating Stats */}
              <div className='absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-2xl animate-float'>
                <div className='flex items-center gap-3'>
                  <div className='w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center'>
                    <span className='text-2xl'>✓</span>
                  </div>
                  <div>
                    <p className='text-2xl font-bold text-gray-800'>500+</p>
                    <p className='text-sm text-gray-600'>Verified Doctors</p>
                  </div>
                </div>
              </div>

              <div className='absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-2xl animate-float animation-delay-2000'>
                <div className='flex items-center gap-3'>
                  <div className='w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center'>
                    <span className='text-2xl'>⭐</span>
                  </div>
                  <div>
                    <p className='text-2xl font-bold text-gray-800'>4.9/5</p>
                    <p className='text-sm text-gray-600'>Patient Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className='relative'>
        <svg className='w-full h-24 fill-white' viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </div>
  )
}

export default Header

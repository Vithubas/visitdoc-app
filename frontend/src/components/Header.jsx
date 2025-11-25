import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row bg-purple-500 rounded-lg px-2 md:px-4 lg:px-6 py-12 md:py-16 max-w-5xl mx-auto'>
      {/* Left Side */}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-3'>
        <p className='text-xl md:text-2xl lg:text-3xl text-white font-semibold leading-snug'>
          Reserve your appointment<br />With trusted healthcare professionals
        </p>

        {/* Header image above the text */}
        <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
          <img className='w-19 h-auto' src={assets.headers} alt="header icon" />
          <p className='text-white text-xs md:text-sm'>
            Browse our trusted doctors and <br /> schedule your appointments for free
          </p>
        </div>

        {/* Purple button */}
        <a 
          href="#speciality " 
          className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'
        >
          Book your appointment <img src={assets.arrowicon} alt="arrow icon" className='w-4 h-4'/>
        </a>
      </div>

      {/* Right Side */}
      <div className='md:w-1/2 flex justify-center md:justify-end mt-4 md:mt-0'>
        <img src={assets.groupprofiles} alt="doctors group" className='w-full max-w-[230px] rounded-lg' />
      </div>
    </div>
  )
}

export default Header

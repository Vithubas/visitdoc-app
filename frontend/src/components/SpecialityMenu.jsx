import React from 'react'
import { specialties } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800'id='speciality'>
      <h1 className='text-3xl font-medium  '>Find a Doctor by Speciality</h1>

      <div className='flex sm:justify-center gap-4 pt-4 w-full overflow-scroll'>
        {specialties.map((item, index) => (
          <Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500'key={index} to={`/doctors/${item.specialty}`}>
            <img className='w-20'src={item.image} alt={item.specialty} />
            <p className='text-sm'>{item.specialty}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SpecialityMenu

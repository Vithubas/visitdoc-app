import React, { use, useState } from 'react'
import {assets} from '../assets/assets'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken]= useState(true);
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
        <div className='flex items-center gap-2'>
      <img className='w-20 h-20 cursor-pointer' src={assets.logo} alt=''  />
      <span className='text-2xl font-poppins font-bold text-purple-800'>VisitDoc</span>
      </div>
      <ul className='hidden md:flex items-start gap-5 font-medium'>
  <NavLink 
    to='/' 
    className={({ isActive }) =>
      isActive ? 'text-purple-600 font-bold py-1' : 'text-gray-700 py-1'
    }
  >
    HOME
  </NavLink>

  <NavLink 
    to='/doctors' 
    className={({ isActive }) =>
      isActive ? 'text-purple-600 font-bold py-1' : 'text-gray-700 py-1'
    }
  >
    DOCTORS
  </NavLink>

  <NavLink 
    to='/contact' 
    className={({ isActive }) =>
      isActive ? 'text-purple-600 font-bold py-1' : 'text-gray-700 py-1'
    }
  >
    CONTACT
  </NavLink>

  <NavLink 
    to='/about' 
    className={({ isActive }) =>
      isActive ? 'text-purple-600 font-bold py-1' : 'text-gray-700 py-1'
    }
  >
    ABOUT
  </NavLink>
</ul>

      <div className='flex items-center gap'>
        {
            token ? <div className='flex items-center gap-1 cursor-pointer group relative'>
           <img className=" w-15 rounded full"src={assets.profile1} alt="" />
           <img className ='w-3 'src={assets.dropdown} alt="" />
           <div className='absolute top-14 right-0 text-base font-medium z-20 hidden group-hover:block'>
  <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-2 p-2 shadow-lg'>
    <p onClick={()=>navigate('my-profile')}className='bg-purple-400 text-white rounded px-4 py-2 cursor-pointer hover:bg-purple-700'>
      My Profile
    </p>
    <p onClick={()=>navigate('my-appointments')}className='bg-purple-400 text-white rounded px-4 py-2 cursor-pointer hover:bg-purple-700'>
      My Appointments
    </p>
    <p onClick={()=>setToken(false)}className='bg-purple-400 text-white rounded px-4 py-2 cursor-pointer hover:bg-purple-700'>
      Logout
    </p>
  </div>
</div>

            </div> :
             <button onClick={()=> navigate('/login')} className='bg-purple-600 text-white  px-8 py-3 rounded-full font-bold hidden md:block'>
            Register
         </button>
        }
         
      </div>
    </div>
  )
}

export default Navbar

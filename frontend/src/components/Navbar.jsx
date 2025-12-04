import React, { useState } from 'react'
import {assets} from '../assets/assets'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true);
    const [showProfileMenu, setShowProfileMenu] = useState(false); // Add this state

  return (
    <nav className='sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-md border-b-2 border-purple-100'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between py-4'>
          {/* Logo Section */}
          <div 
            onClick={() => navigate('/')} 
            className='flex items-center gap-3 cursor-pointer group'
          >
            <div className='relative'>
              <div className='absolute inset-0 bg-purple-400 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity'></div>
              <img 
                className='relative w-16 h-16 rounded-full border-2 border-purple-200 group-hover:border-purple-400 transition-all duration-300 group-hover:scale-110' 
                src={assets.logo} 
                alt='VisitDoc Logo'  
              />
            </div>
            <span className='text-2xl font-bold bg-gradient-to-r from-purple-700 to-purple-900 bg-clip-text text-transparent'>
              VisitDoc
            </span>
          </div>

          {/* Desktop Navigation */}
          <ul className='hidden md:flex items-center gap-8'>
            <NavLink 
              to='/' 
              className={({ isActive }) =>
                `relative py-2 px-1 font-semibold transition-all duration-300 ${
                  isActive 
                    ? 'text-purple-700' 
                    : 'text-gray-600 hover:text-purple-600'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  HOME
                  {isActive && (
                    <span className='absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full'></span>
                  )}
                </>
              )}
            </NavLink>

            <NavLink 
              to='/doctors' 
              className={({ isActive }) =>
                `relative py-2 px-1 font-semibold transition-all duration-300 ${
                  isActive 
                    ? 'text-purple-700' 
                    : 'text-gray-600 hover:text-purple-600'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  DOCTORS
                  {isActive && (
                    <span className='absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full'></span>
                  )}
                </>
              )}
            </NavLink>

            <NavLink 
              to='/about' 
              className={({ isActive }) =>
                `relative py-2 px-1 font-semibold transition-all duration-300 ${
                  isActive 
                    ? 'text-purple-700' 
                    : 'text-gray-600 hover:text-purple-600'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  ABOUT
                  {isActive && (
                    <span className='absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full'></span>
                  )}
                </>
              )}
            </NavLink>

            <NavLink 
              to='/contact' 
              className={({ isActive }) =>
                `relative py-2 px-1 font-semibold transition-all duration-300 ${
                  isActive 
                    ? 'text-purple-700' 
                    : 'text-gray-600 hover:text-purple-600'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  CONTACT
                  {isActive && (
                    <span className='absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full'></span>
                  )}
                </>
              )}
            </NavLink>
          </ul>

          {/* User Profile / Register Button */}
          <div className='flex items-center gap-4'>
            {token ? (
              <div className='relative'>
                <div 
                  onClick={() => setShowProfileMenu(!showProfileMenu)} // Change to onClick
                  className='flex items-center gap-2 cursor-pointer bg-gradient-to-r from-purple-50 to-purple-100 px-4 py-2 rounded-full border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 hover:shadow-lg'
                >
                  <img 
                    className='w-10 h-10 rounded-full border-2 border-white shadow-md object-cover' 
                    src={assets.profile1} 
                    alt="Profile" 
                  />
                  <span className='hidden sm:block text-purple-900 font-semibold'>Account</span>
                  <svg 
                    className={`w-4 h-4 text-purple-700 transition-transform duration-300 ${showProfileMenu ? 'rotate-180' : ''}`}
                    fill='none' 
                    stroke='currentColor' 
                    viewBox='0 0 24 24'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7' />
                  </svg>
                </div>

                {/* Dropdown Menu */}
                {showProfileMenu && ( // Change condition
                  <div className='absolute top-16 right-0 w-56 z-50'>
                    <div className='bg-white rounded-2xl shadow-2xl border-2 border-purple-200 overflow-hidden'>
                      <div className='bg-gradient-to-r from-purple-600 to-purple-800 p-4 text-white'>
                        <p className='font-bold text-lg'>Welcome Back!</p>
                        <p className='text-purple-100 text-sm'>Manage your account</p>
                      </div>
                      
                      <div className='p-2'>
                        <button
                          onClick={() => {
                            navigate('my-profile');
                            setShowProfileMenu(false);
                          }}
                          className='w-full flex items-center gap-3 px-4 py-3 rounded-xl text-purple-900 hover:bg-purple-50 transition-all duration-300 group/item'
                        >
                          <svg className='w-5 h-5 text-purple-600 group-hover/item:scale-110 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' />
                          </svg>
                          <span className='font-medium'>My Profile</span>
                        </button>
                        
                        <button
                          onClick={() => {
                            navigate('my-appointments');
                            setShowProfileMenu(false);
                          }}
                          className='w-full flex items-center gap-3 px-4 py-3 rounded-xl text-purple-900 hover:bg-purple-50 transition-all duration-300 group/item'
                        >
                          <svg className='w-5 h-5 text-purple-600 group-hover/item:scale-110 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' />
                          </svg>
                          <span className='font-medium'>My Appointments</span>
                        </button>
                        
                        <div className='border-t border-purple-100 my-2'></div>
                        
                        <button
                          onClick={() => {
                            setToken(false);
                            setShowProfileMenu(false);
                          }}
                          className='w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-all duration-300 group/item'
                        >
                          <svg className='w-5 h-5 group-hover/item:scale-110 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1' />
                          </svg>
                          <span className='font-medium'>Logout</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button 
                onClick={() => navigate('/login')} 
                className='hidden md:flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-3 rounded-full font-bold hover:from-purple-700 hover:to-purple-900 transition-all duration-300 hover:shadow-lg hover:scale-105'
              >
                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' />
                </svg>
                Register
              </button>
            )}

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setShowMenu(!showMenu)}
              className='md:hidden p-2 rounded-lg hover:bg-purple-50 transition-colors'
            >
              {showMenu ? (
                <svg className='w-6 h-6 text-purple-700' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
                </svg>
              ) : (
                <svg className='w-6 h-6 text-purple-700' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {showMenu && (
          <div className='md:hidden py-4 border-t border-purple-100'>
            <div className='flex flex-col gap-2'>
              <NavLink 
                to='/' 
                onClick={() => setShowMenu(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    isActive 
                      ? 'bg-purple-100 text-purple-700' 
                      : 'text-gray-600 hover:bg-purple-50'
                  }`
                }
              >
                HOME
              </NavLink>

              <NavLink 
                to='/doctors' 
                onClick={() => setShowMenu(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    isActive 
                      ? 'bg-purple-100 text-purple-700' 
                      : 'text-gray-600 hover:bg-purple-50'
                  }`
                }
              >
                DOCTORS
              </NavLink>

              <NavLink 
                to='/about' 
                onClick={() => setShowMenu(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    isActive 
                      ? 'bg-purple-100 text-purple-700' 
                      : 'text-gray-600 hover:bg-purple-50'
                  }`
                }
              >
                ABOUT
              </NavLink>

              <NavLink 
                to='/contact' 
                onClick={() => setShowMenu(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    isActive 
                      ? 'bg-purple-100 text-purple-700' 
                      : 'text-gray-600 hover:bg-purple-50'
                  }`
                }
              >
                CONTACT
              </NavLink>

              {!token && (
                <button 
                  onClick={() => {
                    navigate('/login');
                    setShowMenu(false);
                  }} 
                  className='mt-2 bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-3 rounded-full font-bold hover:from-purple-700 hover:to-purple-900 transition-all duration-300'
                >
                  Register
                </button>
              )}
              
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
import React, { useContext } from 'react'
import { DoctorContext } from '../context/DoctorContext'
import { NavLink, useNavigate } from 'react-router-dom'

const DoctorSidebar = () => {

    const { dToken, setDToken } = useContext(DoctorContext)
    const navigate = useNavigate()

    const logout = () => {
        setDToken('')
        localStorage.removeItem('dToken')
        navigate('/doctor-login')
    }

    return (
        <div className='min-h-screen bg-white border-r'>
            {dToken && (
                <>
                    <ul className='text-[#515151] mt-5'>

                        <NavLink className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`} to={'/doctor-dashboard'}>
                            <span className='text-2xl'>🏠</span>
                            <p className='hidden md:block'>Dashboard</p>
                        </NavLink>

                        <NavLink className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`} to={'/doctor-appointments'}>
                            <span className='text-2xl'>📅</span>
                            <p className='hidden md:block'>Appointments</p>
                        </NavLink>

                        <NavLink className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`} to={'/doctor-profile'}>
                            <span className='text-2xl'>👤</span>
                            <p className='hidden md:block'>Profile</p>
                        </NavLink>

                    </ul>

                    <div className='absolute bottom-0 w-full p-3'>
                        <button onClick={logout} className='flex items-center gap-3 py-3.5 px-3 md:px-9 w-full cursor-pointer hover:bg-red-50 rounded'>
                            <span className='text-2xl'>🚪</span>
                            <p className='hidden md:block text-red-600'>Logout</p>
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}

export default DoctorSidebar

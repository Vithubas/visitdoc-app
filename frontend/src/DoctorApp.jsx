import React, { useContext } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { DoctorContext } from './context/DoctorContext'
import DoctorSidebar from './components/DoctorSidebar'
import DoctorDashboard from './pages/Doctor/DoctorDashboard'
import DoctorAppointments from './pages/Doctor/DoctorAppointments'
import DoctorProfile from './pages/Doctor/DoctorProfile'
import DoctorLogin from './pages/Doctor/DoctorLogin'
import DoctorRegister from './pages/Doctor/DoctorRegister'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const DoctorApp = () => {

    const { dToken } = useContext(DoctorContext)
    const location = useLocation()

    return dToken ? (
        <div className='bg-[#F8F9FD] min-h-screen'>
            <ToastContainer />
            <div className='flex items-start'>
                <DoctorSidebar />
                {location.pathname === '/doctor-dashboard' || location.pathname === '/doctor-dashboard/' ? (
                    <DoctorDashboard />
                ) : location.pathname === '/doctor-appointments' || location.pathname === '/doctor-appointments/' ? (
                    <DoctorAppointments />
                ) : location.pathname === '/doctor-profile' || location.pathname === '/doctor-profile/' ? (
                    <DoctorProfile />
                ) : (
                    <DoctorDashboard />
                )}
            </div>
        </div>
    ) : (
        <div className='min-h-screen'>
            <ToastContainer />
            {location.pathname === '/doctor-register' || location.pathname === '/doctor-register/' ? (
                <DoctorRegister />
            ) : (
                <DoctorLogin />
            )}
        </div>
    )
}

export default DoctorApp

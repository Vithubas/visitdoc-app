import React, { useContext, useEffect, useState } from 'react'
import { DoctorContext } from '../../context/DoctorContext'

const DoctorDashboard = () => {

    const { dashData, getDashData, dToken, cancelAppointment, completeAppointment } = useContext(DoctorContext)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (dToken) {
            const fetchData = async () => {
                setLoading(true)
                await getDashData()
                setLoading(false)
            }
            fetchData()
        }
    }, [dToken])

    if (loading) {
        return (
            <div className='m-5 w-full flex items-center justify-center min-h-[80vh]'>
                <div className='text-center'>
                    <div className='inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary'></div>
                    <p className='mt-4 text-gray-600'>Loading dashboard...</p>
                </div>
            </div>
        )
    }

    return dashData && (
        <div className='m-5 w-full'>

            <div className='mb-6'>
                <h1 className='text-3xl font-bold text-gray-800'>Dashboard</h1>
                <p className='text-gray-600 mt-1'>Welcome back! Here's your overview</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-8'>

                <div className='flex items-center gap-4 bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200 cursor-pointer hover:scale-105 transition-all shadow-md'>
                    <span className='text-6xl'>💰</span>
                    <div>
                        <p className='text-3xl font-bold text-green-700'>₹{dashData.earnings}</p>
                        <p className='text-green-600 font-medium'>Total Earnings</p>
                    </div>
                </div>

                <div className='flex items-center gap-4 bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 cursor-pointer hover:scale-105 transition-all shadow-md'>
                    <span className='text-6xl'>📅</span>
                    <div>
                        <p className='text-3xl font-bold text-blue-700'>{dashData.appointments}</p>
                        <p className='text-blue-600 font-medium'>Appointments</p>
                    </div>
                </div>

                <div className='flex items-center gap-4 bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200 cursor-pointer hover:scale-105 transition-all shadow-md'>
                    <span className='text-6xl'>👥</span>
                    <div>
                        <p className='text-3xl font-bold text-purple-700'>{dashData.patients}</p>
                        <p className='text-purple-600 font-medium'>Patients</p>
                    </div>
                </div>

            </div>

            <div className='bg-white rounded-xl shadow-md overflow-hidden'>

                <div className='flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-primary/10 to-primary/5 border-b'>
                    <span className='text-2xl'>📋</span>
                    <h2 className='text-xl font-bold text-gray-800'>Latest Bookings</h2>
                </div>

                <div className='divide-y'>
                    {dashData.latestAppointments && dashData.latestAppointments.length > 0 ? (
                        dashData.latestAppointments.map((item, index) => (
                            <div className='flex items-center px-6 py-4 gap-4 hover:bg-gray-50 transition-colors' key={index}>
                                <img className='rounded-full w-12 h-12 object-cover border-2 border-gray-200' src={item.userData.image || 'https://via.placeholder.com/40'} alt="" />
                                <div className='flex-1'>
                                    <p className='text-gray-800 font-semibold'>{item.userData.name}</p>
                                    <p className='text-gray-500 text-sm'>{item.slotDate} at {item.slotTime}</p>
                                </div>
                                <div className='text-right'>
                                    <p className='text-gray-700 font-semibold'>₹{item.amount}</p>
                                </div>
                                {item.cancelled
                                    ? <span className='px-3 py-1 bg-red-100 text-red-600 rounded-full text-xs font-semibold'>Cancelled</span>
                                    : item.isCompleted
                                        ? <span className='px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs font-semibold'>Completed</span>
                                        : <div className='flex gap-2'>
                                            <button onClick={() => cancelAppointment(item._id)} className='px-3 py-1.5 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 text-sm font-medium transition-colors'>
                                                Cancel
                                            </button>
                                            <button onClick={() => completeAppointment(item._id)} className='px-3 py-1.5 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 text-sm font-medium transition-colors'>
                                                Complete
                                            </button>
                                        </div>
                                }
                            </div>
                        ))
                    ) : (
                        <div className='px-6 py-12 text-center text-gray-500'>
                            <p className='text-lg'>No appointments yet</p>
                            <p className='text-sm mt-1'>Your latest bookings will appear here</p>
                        </div>
                    )}
                </div>

            </div>

        </div>
    )
}

export default DoctorDashboard

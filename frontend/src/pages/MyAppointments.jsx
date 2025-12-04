import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MyAppointments = () => {
  const {doctors} = useContext(AppContext)
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-2">My Appointments</h1>
          <p className="text-purple-600">Manage your upcoming doctor appointments</p>
        </div>

        {/* Appointments List */}
        <div className="space-y-6">
          {
            doctors.slice(0,2).map((item, index)=>(
              <div key={index} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-purple-100">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Doctor Image */}
                    <div className="flex-shrink-0">
                      <div className="w-32 h-32 rounded-xl overflow-hidden bg-gradient-to-br from-purple-200 to-purple-300 border-4 border-purple-100 shadow-lg">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Doctor Details */}
                    <div className="flex-grow">
                      <div className="mb-4">
                        <h2 className="text-2xl font-bold text-gray-800 mb-1">{item.name}</h2>
                        <p className="text-purple-600 font-semibold text-lg">{item.speciality}</p>
                      </div>

                      <div className="space-y-3">
                        {/* Address */}
                        <div className="flex items-start">
                          <svg className="w-5 h-5 text-purple-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <div>
                            <p className="text-sm font-semibold text-gray-700 mb-1">Address</p>
                            <p className="text-gray-600">{item.address}</p>
                          </div>
                        </div>

                        {/* Date & Time */}
                        <div className="flex items-center bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-3 border border-purple-200">
                          <svg className="w-5 h-5 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <div>
                            <span className="text-sm font-semibold text-gray-700">Date & Time: </span>
                            <span className="text-gray-800 font-medium">25 July, 2024 | 8:30 PM</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex md:flex-col gap-3 md:justify-center">
                      <button className="flex-1 md:flex-none px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg flex items-center justify-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                        Pay Online
                      </button>
                      <button className="flex-1 md:flex-none px-6 py-3 bg-white border-2 border-purple-500 text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg flex items-center justify-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>

                
               
              </div>
            ))
          }
        </div>

        {/* Empty State (if no appointments) */}
        {doctors.length === 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center border-2 border-purple-100">
            <svg className="w-24 h-24 text-purple-200 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h3 className="text-2xl font-bold text-purple-800 mb-2">No Appointments</h3>
            <p className="text-purple-600">You don't have any upcoming appointments.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default MyAppointments
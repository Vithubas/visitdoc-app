import React, { useContext, useEffect, useState } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { toast } from 'react-toastify'
import axios from 'axios'

const DoctorProfile = () => {

    const { dToken, profileData, setProfileData, getProfileData, backendUrl } = useContext(DoctorContext)

    const [isEdit, setIsEdit] = useState(false)
    const [image, setImage] = useState(null)
    const [imagePreview, setImagePreview] = useState(null)

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setImage(file)
            setImagePreview(URL.createObjectURL(file))
        }
    }

    const updateProfile = async () => {
        try {
            const formData = new FormData()
            formData.append('address', JSON.stringify(profileData.address))
            formData.append('fees', profileData.fees)
            formData.append('available', profileData.available)

            if (image) {
                formData.append('image', image)
            }

            const { data } = await axios.post(backendUrl + '/api/doctor/update-profile', formData, {
                headers: { dToken }
            })

            if (data.success) {
                toast.success(data.message)
                setIsEdit(false)
                setImage(null)
                setImagePreview(null)
                // Update profile data with the returned data to show new image immediately
                if (data.profileData) {
                    setProfileData(data.profileData)
                }
                // Force page refresh to show updated data
                setTimeout(() => {
                    window.location.reload()
                }, 1000)
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(() => {
        if (dToken) {
            getProfileData()
        }
    }, [dToken])

    return profileData && (
        <div className='min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4 md:p-8'>
            <div className='max-w-6xl mx-auto'>
                {/* Header */}
                <div className='mb-8'>
                    <h1 className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-2'>
                        👨‍⚕️ Doctor Profile
                    </h1>
                    <p className='text-gray-600'>Manage your professional information and availability</p>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                    {/* Left Column - Profile Picture */}
                    <div className='lg:col-span-1'>
                        <div className='bg-white rounded-3xl shadow-xl border-2 border-purple-200 p-6 sticky top-8'>
                            <div className='relative group'>
                                {/* Profile Image */}
                                <div className='relative'>
                                    <div className='absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity'></div>
                                    <img
                                        className='relative w-full aspect-square object-cover rounded-3xl border-4 border-white shadow-2xl'
                                        src={imagePreview || profileData.image}
                                        alt="Doctor Profile"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            const initial = profileData.name?.charAt(0).toUpperCase() || 'D';
                                            e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect fill='%236366f1' width='400' height='400'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='160' fill='white'%3E${initial}%3C/text%3E%3C/svg%3E`;
                                        }}
                                    />
                                </div>

                                {/* Upload Button Overlay */}
                                {isEdit && (
                                    <label className='absolute inset-0 flex items-center justify-center bg-black/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer'>
                                        <div className='text-center text-white'>
                                            <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            </svg>
                                            <p className='font-semibold'>Upload Photo</p>
                                            <p className='text-xs mt-1'>Click to change</p>
                                        </div>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageChange}
                                            className='hidden'
                                        />
                                    </label>
                                )}

                                {/* Availability Badge */}
                                <div className='absolute top-4 right-4 bg-white rounded-full px-4 py-2 shadow-lg border-2 border-purple-200'>
                                    <div className='flex items-center gap-2'>
                                        <span className={`w-3 h-3 rounded-full ${profileData.available ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></span>
                                        <span className={`text-sm font-bold ${profileData.available ? 'text-green-600' : 'text-gray-600'}`}>
                                            {profileData.available ? 'Available' : 'Unavailable'}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Stats */}
                            <div className='mt-6 space-y-3'>
                                <div className='bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-4 border border-purple-200'>
                                    <div className='flex items-center gap-3'>
                                        <span className='text-3xl'>💰</span>
                                        <div>
                                            <p className='text-xs text-gray-600'>Consultation Fee</p>
                                            <p className='text-2xl font-bold text-purple-700'>₹{profileData.fees}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4 border border-blue-200'>
                                    <div className='flex items-center gap-3'>
                                        <span className='text-3xl'>💼</span>
                                        <div>
                                            <p className='text-xs text-gray-600'>Experience</p>
                                            <p className='text-lg font-bold text-blue-700'>{profileData.experience}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Profile Details */}
                    <div className='lg:col-span-2 space-y-6'>
                        {/* Basic Information Card */}
                        <div className='bg-white rounded-3xl shadow-xl border-2 border-purple-200 p-8'>
                            <div className='flex items-center justify-between mb-6'>
                                <h2 className='text-2xl font-bold text-gray-800 flex items-center gap-2'>
                                    <span className='text-3xl'>📋</span>
                                    Basic Information
                                </h2>
                                {!isEdit && (
                                    <button
                                        onClick={() => setIsEdit(true)}
                                        className='flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl hover:scale-105'
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                                        </svg>
                                        Edit Profile
                                    </button>
                                )}
                            </div>

                            <div className='space-y-6'>
                                {/* Name */}
                                <div>
                                    <label className='flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2'>
                                        <span className='text-xl'>👤</span>
                                        Full Name
                                    </label>
                                    <p className='text-2xl font-bold text-gray-800'>{profileData.name}</p>
                                </div>

                                {/* Degree & Specialty */}
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                    <div>
                                        <label className='flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2'>
                                            <span className='text-xl'>🎓</span>
                                            Degree
                                        </label>
                                        <p className='text-lg font-medium text-gray-800 bg-purple-50 px-4 py-2 rounded-xl border border-purple-200'>
                                            {profileData.degree}
                                        </p>
                                    </div>
                                    <div>
                                        <label className='flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2'>
                                            <span className='text-xl'>🏥</span>
                                            Specialty
                                        </label>
                                        <p className='text-lg font-medium text-gray-800 bg-blue-50 px-4 py-2 rounded-xl border border-blue-200'>
                                            {profileData.speciality}
                                        </p>
                                    </div>
                                </div>

                                {/* About */}
                                <div>
                                    <label className='flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2'>
                                        <span className='text-xl'>📝</span>
                                        About
                                    </label>
                                    <p className='text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-xl border border-gray-200'>
                                        {profileData.about}
                                    </p>
                                </div>

                                {/* Consultation Fee */}
                                <div>
                                    <label className='flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2'>
                                        <span className='text-xl'>💵</span>
                                        Consultation Fee
                                    </label>
                                    {isEdit ? (
                                        <div className='relative'>
                                            <span className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold'>$</span>
                                            <input
                                                type="number"
                                                onChange={(e) => setProfileData(prev => ({ ...prev, fees: e.target.value }))}
                                                value={profileData.fees}
                                                className='w-full pl-8 pr-4 py-3 border-2 border-purple-300 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all text-lg font-semibold'
                                                placeholder='Enter fee'
                                            />
                                        </div>
                                    ) : (
                                        <p className='text-3xl font-bold text-purple-700'>₹{profileData.fees}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Address Card */}
                        <div className='bg-white rounded-3xl shadow-xl border-2 border-purple-200 p-8'>
                            <h2 className='text-2xl font-bold text-gray-800 flex items-center gap-2 mb-6'>
                                <span className='text-3xl'>📍</span>
                                Clinic Address
                            </h2>

                            <div className='space-y-4'>
                                <div>
                                    <label className='text-sm font-semibold text-gray-700 mb-2 block'>Address Line 1</label>
                                    {isEdit ? (
                                        <input
                                            type="text"
                                            onChange={(e) => setProfileData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))}
                                            value={profileData.address.line1}
                                            className='w-full px-4 py-3 border-2 border-purple-300 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all'
                                            placeholder='Street address'
                                        />
                                    ) : (
                                        <p className='text-gray-800 bg-gray-50 px-4 py-3 rounded-xl border border-gray-200'>
                                            {profileData.address.line1}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label className='text-sm font-semibold text-gray-700 mb-2 block'>Address Line 2</label>
                                    {isEdit ? (
                                        <input
                                            type="text"
                                            onChange={(e) => setProfileData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))}
                                            value={profileData.address.line2}
                                            className='w-full px-4 py-3 border-2 border-purple-300 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all'
                                            placeholder='City, State, ZIP'
                                        />
                                    ) : (
                                        <p className='text-gray-800 bg-gray-50 px-4 py-3 rounded-xl border border-gray-200'>
                                            {profileData.address.line2}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Availability Card */}
                        <div className='bg-white rounded-3xl shadow-xl border-2 border-purple-200 p-8'>
                            <h2 className='text-2xl font-bold text-gray-800 flex items-center gap-2 mb-6'>
                                <span className='text-3xl'>⏰</span>
                                Availability Status
                            </h2>

                            <div className='flex items-center justify-between bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-2xl border-2 border-purple-200'>
                                <div className='flex items-center gap-4'>
                                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${profileData.available ? 'bg-green-500' : 'bg-gray-400'} shadow-lg`}>
                                        <span className='text-3xl'>
                                            {profileData.available ? '✅' : '🚫'}
                                        </span>
                                    </div>
                                    <div>
                                        <p className='text-sm text-gray-600 font-medium'>Current Status</p>
                                        <p className={`text-2xl font-bold ${profileData.available ? 'text-green-600' : 'text-gray-600'}`}>
                                            {profileData.available ? 'Available for Appointments' : 'Not Available'}
                                        </p>
                                    </div>
                                </div>
                                {isEdit && (
                                    <label className='relative inline-flex items-center cursor-pointer'>
                                        <input
                                            type="checkbox"
                                            onChange={() => setProfileData(prev => ({ ...prev, available: !prev.available }))}
                                            checked={profileData.available}
                                            className='sr-only peer'
                                        />
                                        <div className="w-14 h-7 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-green-500"></div>
                                    </label>
                                )}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        {isEdit && (
                            <div className='flex gap-4'>
                                <button
                                    onClick={updateProfile}
                                    className='flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-2xl font-bold text-lg hover:from-green-700 hover:to-green-800 transition-all shadow-xl hover:shadow-2xl hover:scale-105'
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Save Changes
                                </button>
                                <button
                                    onClick={() => {
                                        setIsEdit(false)
                                        setImage(null)
                                        setImagePreview(null)
                                        getProfileData()
                                    }}
                                    className='px-8 py-4 bg-gray-200 text-gray-700 rounded-2xl font-bold text-lg hover:bg-gray-300 transition-all shadow-lg hover:shadow-xl'
                                >
                                    Cancel
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DoctorProfile

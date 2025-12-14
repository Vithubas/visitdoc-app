import React, { useContext, useState } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const DoctorRegister = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        speciality: '',
        degree: '',
        experience: '',
        about: '',
        fees: '',
        address: { line1: '', line2: '' },
        workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        timeSlots: { startTime: '09:00', endTime: '17:00', slotDuration: 30 },
        breakTime: { start: '', end: '' }
    })

    const [image, setImage] = useState(null)
    const [imagePreview, setImagePreview] = useState(null)

    const { setDToken, backendUrl } = useContext(DoctorContext)
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        if (name === 'line1' || name === 'line2') {
            setFormData(prev => ({
                ...prev,
                address: { ...prev.address, [name]: value }
            }))
        } else {
            setFormData(prev => ({ ...prev, [name]: value }))
        }
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setImage(file)
            setImagePreview(URL.createObjectURL(file))
        }
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        try {
            const formDataToSend = new FormData()

            // Append all form fields
            Object.keys(formData).forEach(key => {
                if (key === 'address' || key === 'workingDays' || key === 'timeSlots' || key === 'breakTime') {
                    formDataToSend.append(key, JSON.stringify(formData[key]))
                } else {
                    formDataToSend.append(key, formData[key])
                }
            })

            // Append image if selected
            if (image) {
                formDataToSend.append('image', image)
            }

            const { data } = await axios.post(backendUrl + '/api/doctor/register', formDataToSend)
            if (data.success) {
                localStorage.setItem('dToken', data.token)
                setDToken(data.token)
                toast.success(data.message)
                navigate('/doctor-dashboard')
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    return (
        <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4'>
            <form onSubmit={onSubmitHandler} className='bg-white rounded-2xl shadow-2xl p-8 w-full max-w-2xl'>
                <h2 className='text-3xl font-bold text-center mb-6 text-gray-800'>
                    <span className='text-primary'>Doctor</span> Registration
                </h2>

                {/* Profile Image Upload */}
                <div className='mb-6 flex flex-col items-center'>
                    <label className='block text-sm font-medium text-gray-700 mb-3'>Profile Picture</label>
                    <div className='relative group'>
                        <div className='w-32 h-32 rounded-full overflow-hidden border-4 border-primary shadow-lg cursor-pointer'>
                            {imagePreview ? (
                                <img
                                    src={imagePreview}
                                    alt="Preview"
                                    className='w-full h-full object-cover'
                                />
                            ) : (
                                <div className='w-full h-full bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center'>
                                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                    </svg>
                                </div>
                            )}
                        </div>
                        <label className='absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer'>
                            <div className='text-center text-white'>
                                <svg className="w-8 h-8 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                                <p className='text-xs font-semibold'>Upload</p>
                            </div>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className='hidden'
                            />
                        </label>
                    </div>
                    <p className='text-xs text-gray-500 mt-2'>Click to upload your profile picture</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {/* Name */}
                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>Full Name</label>
                        <input
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            className='w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-primary focus:border-transparent'
                            type="text"
                            required
                            placeholder='Dr. John Doe'
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>Email</label>
                        <input
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            className='w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-primary focus:border-transparent'
                            type="email"
                            required
                            placeholder='doctor@example.com'
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>Password</label>
                        <input
                            name='password'
                            value={formData.password}
                            onChange={handleChange}
                            className='w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-primary focus:border-transparent'
                            type="password"
                            required
                            placeholder='Min 8 characters'
                        />
                    </div>

                    {/* Speciality */}
                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>Speciality</label>
                        <select
                            name='speciality'
                            value={formData.speciality}
                            onChange={handleChange}
                            className='w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-primary focus:border-transparent'
                            required
                        >
                            <option value="">Select Speciality</option>
                            <option value="General physician">General Physician</option>
                            <option value="Gynecologist">Gynecologist</option>
                            <option value="Dermatologist">Dermatologist</option>
                            <option value="Pediatricians">Pediatricians</option>
                            <option value="Neurologist">Neurologist</option>
                            <option value="Gastroenterologist">Gastroenterologist</option>
                        </select>
                    </div>

                    {/* Degree */}
                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>Degree</label>
                        <input
                            name='degree'
                            value={formData.degree}
                            onChange={handleChange}
                            className='w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-primary focus:border-transparent'
                            type="text"
                            required
                            placeholder='MBBS, MD'
                        />
                    </div>

                    {/* Experience */}
                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>Experience</label>
                        <input
                            name='experience'
                            value={formData.experience}
                            onChange={handleChange}
                            className='w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-primary focus:border-transparent'
                            type="text"
                            required
                            placeholder='5 Years'
                        />
                    </div>

                    {/* Fees */}
                    <div className='md:col-span-2'>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>Consultation Fees ($)</label>
                        <input
                            name='fees'
                            value={formData.fees}
                            onChange={handleChange}
                            className='w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-primary focus:border-transparent'
                            type="number"
                            required
                            placeholder='50'
                        />
                    </div>

                    {/* About */}
                    <div className='md:col-span-2'>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>About</label>
                        <textarea
                            name='about'
                            value={formData.about}
                            onChange={handleChange}
                            className='w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-primary focus:border-transparent'
                            rows="3"
                            required
                            placeholder='Brief description about yourself and your practice...'
                        />
                    </div>

                    {/* Address Line 1 */}
                    <div className='md:col-span-2'>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>Address Line 1</label>
                        <input
                            name='line1'
                            value={formData.address.line1}
                            onChange={handleChange}
                            className='w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-primary focus:border-transparent'
                            type="text"
                            required
                            placeholder='Street address'
                        />
                    </div>

                    {/* Address Line 2 */}
                    <div className='md:col-span-2'>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>Address Line 2</label>
                        <input
                            name='line2'
                            value={formData.address.line2}
                            onChange={handleChange}
                            className='w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-primary focus:border-transparent'
                            type="text"
                            required
                            placeholder='City, State, ZIP'
                        />
                    </div>

                    {/* Working Schedule Section */}
                    <div className='md:col-span-2 border-t-2 border-gray-200 pt-6 mt-4'>
                        <h3 className='text-xl font-bold text-gray-800 mb-4 flex items-center gap-2'>
                            <span className='text-2xl'>📅</span>
                            Working Schedule
                        </h3>
                    </div>

                    {/* Working Days */}
                    <div className='md:col-span-2'>
                        <label className='block text-sm font-medium text-gray-700 mb-3'>Working Days</label>
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
                            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                                <label key={day} className='flex items-center gap-2 cursor-pointer bg-gray-50 p-3 rounded-lg hover:bg-blue-50 transition-colors border border-gray-200'>
                                    <input
                                        type='checkbox'
                                        checked={formData.workingDays.includes(day)}
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                setFormData(prev => ({
                                                    ...prev,
                                                    workingDays: [...prev.workingDays, day]
                                                }))
                                            } else {
                                                setFormData(prev => ({
                                                    ...prev,
                                                    workingDays: prev.workingDays.filter(d => d !== day)
                                                }))
                                            }
                                        }}
                                        className='w-4 h-4 text-primary rounded focus:ring-2 focus:ring-primary'
                                    />
                                    <span className='text-sm font-medium text-gray-700'>{day}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Working Hours */}
                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>Start Time</label>
                        <input
                            type='time'
                            value={formData.timeSlots.startTime}
                            onChange={(e) => setFormData(prev => ({
                                ...prev,
                                timeSlots: { ...prev.timeSlots, startTime: e.target.value }
                            }))}
                            className='w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-primary focus:border-transparent'
                            required
                        />
                    </div>

                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>End Time</label>
                        <input
                            type='time'
                            value={formData.timeSlots.endTime}
                            onChange={(e) => setFormData(prev => ({
                                ...prev,
                                timeSlots: { ...prev.timeSlots, endTime: e.target.value }
                            }))}
                            className='w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-primary focus:border-transparent'
                            required
                        />
                    </div>

                    {/* Appointment Duration */}
                    <div className='md:col-span-2'>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>Appointment Slot Duration</label>
                        <select
                            value={formData.timeSlots.slotDuration}
                            onChange={(e) => setFormData(prev => ({
                                ...prev,
                                timeSlots: { ...prev.timeSlots, slotDuration: Number(e.target.value) }
                            }))}
                            className='w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-primary focus:border-transparent'
                            required
                        >
                            <option value={15}>15 minutes</option>
                            <option value={30}>30 minutes</option>
                            <option value={45}>45 minutes</option>
                            <option value={60}>1 hour</option>
                        </select>
                    </div>

                    {/* Break Time (Optional) */}
                    <div className='md:col-span-2'>
                        <label className='block text-sm font-medium text-gray-700 mb-3'>
                            Break Time (Optional)
                        </label>
                        <div className='grid grid-cols-2 gap-4'>
                            <div>
                                <label className='block text-xs text-gray-600 mb-1'>Break Start</label>
                                <input
                                    type='time'
                                    value={formData.breakTime.start}
                                    onChange={(e) => setFormData(prev => ({
                                        ...prev,
                                        breakTime: { ...prev.breakTime, start: e.target.value }
                                    }))}
                                    className='w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-primary focus:border-transparent'
                                />
                            </div>
                            <div>
                                <label className='block text-xs text-gray-600 mb-1'>Break End</label>
                                <input
                                    type='time'
                                    value={formData.breakTime.end}
                                    onChange={(e) => setFormData(prev => ({
                                        ...prev,
                                        breakTime: { ...prev.breakTime, end: e.target.value }
                                    }))}
                                    className='w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-primary focus:border-transparent'
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <button className='w-full bg-primary text-white py-3 rounded-lg text-base font-semibold mt-6 hover:bg-primary/90 transition-all shadow-md'>
                    Register
                </button>

                <p className='text-center text-sm text-gray-600 mt-4'>
                    Already have an account?{' '}
                    <button
                        type='button'
                        onClick={() => navigate('/doctor-login')}
                        className='text-primary font-semibold hover:underline'
                    >
                        Login here
                    </button>
                </p>
            </form>
        </div>
    )
}

export default DoctorRegister

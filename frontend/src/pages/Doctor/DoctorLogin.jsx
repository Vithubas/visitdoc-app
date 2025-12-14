import React, { useContext, useState } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const DoctorLogin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { setDToken, backendUrl } = useContext(DoctorContext)
    const navigate = useNavigate()

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        try {
            const { data } = await axios.post(backendUrl + '/api/doctor/login', { email, password })
            if (data.success) {
                localStorage.setItem('dToken', data.token)
                setDToken(data.token)
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
        <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100'>
            <form onSubmit={onSubmitHandler} className='bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md'>
                <h2 className='text-3xl font-bold text-center mb-6 text-gray-800'>
                    <span className='text-primary'>Doctor</span> Login
                </h2>

                <div className='space-y-4'>
                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>Email</label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className='w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-primary focus:border-transparent'
                            type="email"
                            required
                            placeholder='doctor@example.com'
                        />
                    </div>

                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>Password</label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            className='w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-primary focus:border-transparent'
                            type="password"
                            required
                            placeholder='Enter your password'
                        />
                    </div>
                </div>

                <button className='w-full bg-primary text-white py-3 rounded-lg text-base font-semibold mt-6 hover:bg-primary/90 transition-all shadow-md'>
                    Login
                </button>

                <p className='text-center text-sm text-gray-600 mt-4'>
                    Don't have an account?{' '}
                    <button
                        type='button'
                        onClick={() => navigate('/doctor-register')}
                        className='text-primary font-semibold hover:underline'
                    >
                        Register here
                    </button>
                </p>
            </form>
        </div>
    )
}

export default DoctorLogin

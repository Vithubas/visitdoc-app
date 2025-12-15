import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const MyProfile = () => {
  const { userData, setUserData, token, backendUrl } = useContext(AppContext)
  const [isEdit, setIsEdit] = useState(false)
  const [image, setImage] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: { line1: '', line2: '' },
    gender: 'Not Selected',
    dob: 'Not Selected'
  })

  const getUserData = async () => {
    try {
      const { data } = await axios.get(backendUrl + '/api/user/get-profile', { headers: { token } })
      if (data.success) {
        setUserData(data.userData)
        setFormData({
          name: data.userData.name || '',
          phone: data.userData.phone || '',
          address: data.userData.address || { line1: '', line2: '' },
          gender: data.userData.gender || 'Not Selected',
          dob: data.userData.dob || 'Not Selected'
        })
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const updateProfile = async () => {
    try {
      const formDataToSend = new FormData()
      formDataToSend.append('name', formData.name)
      formDataToSend.append('phone', formData.phone)
      formDataToSend.append('address', JSON.stringify(formData.address))
      formDataToSend.append('gender', formData.gender)
      formDataToSend.append('dob', formData.dob)

      if (image) {
        formDataToSend.append('image', image)
      }

      const { data } = await axios.post(backendUrl + '/api/user/update-profile', formDataToSend, { headers: { token } })

      if (data.success) {
        toast.success(data.message)
        setIsEdit(false)
        setImage(null)
        setImagePreview(null)
        getUserData()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setImage(file)
      setImagePreview(URL.createObjectURL(file))
    }
  }

  useEffect(() => {
    if (token) {
      getUserData()
    }
  }, [token])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-t-2xl p-8 text-white">
          <div className="flex items-center space-x-6">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm overflow-hidden border-4 border-white/30">
                {imagePreview ? (
                  <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                ) : userData?.image ? (
                  <img
                    src={userData.image}
                    alt={userData.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      const initial = userData.name?.charAt(0).toUpperCase() || 'U';
                      e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect fill='%236366f1' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='80' fill='white'%3E${initial}%3C/text%3E%3C/svg%3E`;
                    }}
                  />
                ) : (
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                )}
              </div>
              {isEdit && (
                <label className="absolute bottom-0 right-0 bg-white text-purple-600 rounded-full p-2 cursor-pointer hover:bg-purple-50 transition shadow-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                </label>
              )}
            </div>

            <div>
              <h1 className="text-3xl font-bold">{userData?.name || 'User'}</h1>
              <p className="text-purple-100 mt-1">Manage your personal information</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-b-2xl shadow-xl p-8">
          {/* Contact Information */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-purple-800 mb-6 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Information
            </h2>

            <div className="space-y-5">
              {/* Name */}
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                <label className="block text-sm font-semibold text-purple-700 mb-2">Full Name</label>
                {isEdit ? (
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                ) : (
                  <p className="text-gray-800 font-medium">{formData.name || 'Not provided'}</p>
                )}
              </div>

              {/* Phone */}
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                <label className="block text-sm font-semibold text-purple-700 mb-2">Phone Number</label>
                {isEdit ? (
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                ) : (
                  <p className="text-gray-800 font-medium">{formData.phone || 'Not provided'}</p>
                )}
              </div>

              {/* Email (read-only) */}
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address (Cannot be changed)</label>
                <p className="text-gray-800 font-medium">{userData?.email || 'Not provided'}</p>
              </div>

              {/* Address */}
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                <label className="block text-sm font-semibold text-purple-700 mb-2">Address Line 1</label>
                {isEdit ? (
                  <input
                    type="text"
                    value={formData.address.line1}
                    onChange={(e) => setFormData({ ...formData, address: { ...formData.address, line1: e.target.value } })}
                    className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                ) : (
                  <p className="text-gray-800 font-medium">{formData.address.line1 || 'Not provided'}</p>
                )}
              </div>

              <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                <label className="block text-sm font-semibold text-purple-700 mb-2">Address Line 2</label>
                {isEdit ? (
                  <input
                    type="text"
                    value={formData.address.line2}
                    onChange={(e) => setFormData({ ...formData, address: { ...formData.address, line2: e.target.value } })}
                    className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                ) : (
                  <p className="text-gray-800 font-medium">{formData.address.line2 || 'Not provided'}</p>
                )}
              </div>
            </div>
          </div>

          {/* Basic Information */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-purple-800 mb-6 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Basic Information
            </h2>

            <div className="space-y-5">
              {/* Gender */}
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                <label className="block text-sm font-semibold text-purple-700 mb-2">Gender</label>
                {isEdit ? (
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                  >
                    <option value="Not Selected">Not Selected</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                ) : (
                  <p className="text-gray-800 font-medium">{formData.gender}</p>
                )}
              </div>

              {/* Birthday */}
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                <label className="block text-sm font-semibold text-purple-700 mb-2">Date of Birth</label>
                {isEdit ? (
                  <input
                    type="date"
                    value={formData.dob === 'Not Selected' ? '' : formData.dob}
                    onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                    className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                ) : (
                  <p className="text-gray-800 font-medium">{formData.dob}</p>
                )}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4 pt-6 border-t border-purple-200">
            {isEdit ? (
              <>
                <button
                  onClick={() => {
                    setIsEdit(false)
                    setImage(null)
                    setImagePreview(null)
                    getUserData()
                  }}
                  className="px-6 py-3 border border-purple-300 text-purple-700 font-semibold rounded-lg hover:bg-purple-50 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={updateProfile}
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-indigo-700 transition transform hover:scale-105 active:scale-95 shadow-lg"
                >
                  Save Changes
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEdit(true)}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-indigo-700 transition transform hover:scale-105 active:scale-95 shadow-lg flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProfile
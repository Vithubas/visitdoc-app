import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='min-h-screen bg-white'>
      {/* Header Section */}
      <div className='text-center py-12 bg-gradient-to-br from-purple-50 to-white'>
        <h1 className='text-5xl md:text-6xl font-bold text-purple-900'>
          ABOUT <span className='bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>US</span>
        </h1>
        <div className='w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mt-4 rounded-full'></div>
      </div>

      {/* Main Content Section */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        {/* Story Section with Image */}
        <div className='mb-20'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            {/* Image Section */}
            <div className='relative group order-2 lg:order-1'>
              <div className='absolute -inset-4 bg-gradient-to-br from-purple-400 via-pink-400 to-purple-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-all duration-500 animate-pulse'></div>
              <div className='relative'>
                <img 
                  src={assets.groupprofiles} 
                  alt="Medical Team" 
                  className='relative w-full rounded-3xl shadow-2xl border-4 border-white group-hover:scale-[1.02] transition-all duration-500'
                />
                <div className='absolute -bottom-6 -right-6 bg-gradient-to-br from-purple-700 to-purple-900 text-white rounded-2xl p-6 shadow-2xl border-2 border-purple-500'>
                  <p className='text-4xl font-bold'>500+</p>
                  <p className='text-sm text-purple-100'>Happy Patients</p>
                </div>
              </div>
            </div>

            {/* Text Section */}
            <div className='space-y-8 order-1 lg:order-2'>
              <div>
                <div className='inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-semibold text-sm mb-4 border-2 border-purple-200'>
                  Our Story
                </div>
                <h2 className='text-4xl md:text-5xl font-bold text-purple-900 mb-6 leading-tight'>
                  Welcome to <span className='bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>VisitDoc</span>
                </h2>
                <p className='text-purple-700 leading-relaxed text-lg mb-6'>
                  VisitDoc is your trusted healthcare partner, revolutionizing the way you access medical services. We understand that your health is your most valuable asset, and finding the right doctor at the right time shouldn't be complicated.
                </p>
                <p className='text-purple-600 leading-relaxed'>
                  Our platform seamlessly connects patients with qualified healthcare professionals across various specialties, making quality healthcare accessible to everyone. We believe in empowering patients with choice, convenience, and confidence in their healthcare decisions.
                </p>
              </div>

              <div className='grid grid-cols-2 gap-4'>
                <div className='bg-gradient-to-br from-purple-50 to-white p-6 rounded-2xl border-2 border-purple-200 hover:shadow-lg transition-all duration-300'>
                  <div className='text-3xl mb-2'>🏥</div>
                  <p className='text-2xl font-bold text-purple-900'>50+</p>
                  <p className='text-purple-600 text-sm'>Expert Doctors</p>
                </div>
                <div className='bg-gradient-to-br from-purple-50 to-white p-6 rounded-2xl border-2 border-purple-200 hover:shadow-lg transition-all duration-300'>
                  <div className='text-3xl mb-2'>⭐</div>
                  <p className='text-2xl font-bold text-purple-900'>4.9/5</p>
                  <p className='text-purple-600 text-sm'>Patient Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className='grid md:grid-cols-2 gap-8 mb-20'>
          {/* Who We Are Card */}
          <div className='group relative overflow-hidden bg-gradient-to-br from-purple-700 to-purple-900 rounded-3xl p-8 text-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2'>
            <div className='absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20 group-hover:scale-150 transition-transform duration-500'></div>
            <div className='absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16 group-hover:scale-150 transition-transform duration-500'></div>
            
            <div className='relative z-10'>
              <div className='w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/30'>
                <span className='text-4xl'>🏥</span>
              </div>
              <h3 className='text-3xl font-bold mb-4'>Who We Are</h3>
              <p className='text-purple-100 leading-relaxed'>
                VisitDoc is a comprehensive online healthcare platform that bridges the gap between patients and doctors. We provide a user-friendly interface where you can easily browse through verified medical professionals, view their credentials and specialties, check their availability in real-time, and book appointments instantly.
              </p>
            </div>
          </div>

          {/* Our Vision Card */}
          <div className='group relative overflow-hidden bg-gradient-to-br from-pink-600 to-purple-700 rounded-3xl p-8 text-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2'>
            <div className='absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20 group-hover:scale-150 transition-transform duration-500'></div>
            <div className='absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16 group-hover:scale-150 transition-transform duration-500'></div>
            
            <div className='relative z-10'>
              <div className='w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/30'>
                <span className='text-4xl'>🎯</span>
              </div>
              <h3 className='text-3xl font-bold mb-4'>Our Vision</h3>
              <p className='text-purple-100 leading-relaxed'>
                Our vision is to create a future where quality healthcare is just a click away for everyone, regardless of their location or background. We aspire to be the leading healthcare platform in Sri Lanka, continuously innovating to improve patient outcomes and healthcare delivery through technology and compassionate care.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className='py-12'>
          <h2 className='text-4xl md:text-5xl font-bold text-center text-purple-900 mb-4'>
            Why Choose <span className='bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>Us</span>
          </h2>
          <p className='text-center text-purple-600 text-lg mb-12 max-w-3xl mx-auto'>
            We're committed to providing the best healthcare experience through innovation, reliability, and patient-centered care
          </p>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* Efficiency Card */}
            <div className='group bg-gradient-to-br from-white to-purple-50 rounded-2xl p-8 border-2 border-purple-200 hover:border-purple-400 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2'>
              <div className='w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300'>
                <span className='text-4xl'>⚡</span>
              </div>
              <h3 className='text-2xl font-bold text-purple-900 mb-4'>Efficiency</h3>
              <p className='text-purple-700 leading-relaxed'>
                Streamlined appointment scheduling that fits into your busy lifestyle. Book appointments in seconds, receive instant confirmations, and get automated reminders. No more long waiting times on phone calls or waiting rooms.
              </p>
            </div>

            {/* Convenience Card */}
            <div className='group bg-gradient-to-br from-white to-purple-50 rounded-2xl p-8 border-2 border-purple-200 hover:border-purple-400 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2'>
              <div className='w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300'>
                <span className='text-4xl'>🎯</span>
              </div>
              <h3 className='text-2xl font-bold text-purple-900 mb-4'>Convenience</h3>
              <p className='text-purple-700 leading-relaxed'>
                Access healthcare services anytime, anywhere. Browse doctors, compare specialties, read reviews, and book appointments 24/7 from the comfort of your home. Healthcare made simple and accessible at your fingertips.
              </p>
            </div>

            {/* Personalization Card */}
            <div className='group bg-gradient-to-br from-white to-purple-50 rounded-2xl p-8 border-2 border-purple-200 hover:border-purple-400 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2'>
              <div className='w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300'>
                <span className='text-4xl'>💝</span>
              </div>
              <h3 className='text-2xl font-bold text-purple-900 mb-4'>Personalization</h3>
              <p className='text-purple-700 leading-relaxed'>
                Tailored healthcare recommendations based on your medical history and preferences. Get matched with doctors who understand your unique needs. Track your health journey with personalized dashboards and health records.
              </p>
            </div>

            {/* Trust & Reliability Card */}
            <div className='group bg-gradient-to-br from-white to-purple-50 rounded-2xl p-8 border-2 border-purple-200 hover:border-purple-400 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2'>
              <div className='w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300'>
                <span className='text-4xl'>🛡️</span>
              </div>
              <h3 className='text-2xl font-bold text-purple-900 mb-4'>Trust & Reliability</h3>
              <p className='text-purple-700 leading-relaxed'>
                All our doctors are thoroughly verified and certified professionals. We maintain strict quality standards and patient privacy protocols. Your data is secure with industry-standard encryption and HIPAA-compliant practices.
              </p>
            </div>

            {/* Comprehensive Care Card */}
            <div className='group bg-gradient-to-br from-white to-purple-50 rounded-2xl p-8 border-2 border-purple-200 hover:border-purple-400 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2'>
              <div className='w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300'>
                <span className='text-4xl'>🏥</span>
              </div>
              <h3 className='text-2xl font-bold text-purple-900 mb-4'>Comprehensive Care</h3>
              <p className='text-purple-700 leading-relaxed'>
                Wide range of medical specialties all in one platform. From general physicians to specialized consultants, we've got you covered. Access to top healthcare professionals across multiple disciplines.
              </p>
            </div>

            {/* Affordable Pricing Card */}
            <div className='group bg-gradient-to-br from-white to-purple-50 rounded-2xl p-8 border-2 border-purple-200 hover:border-purple-400 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2'>
              <div className='w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300'>
                <span className='text-4xl'>💰</span>
              </div>
              <h3 className='text-2xl font-bold text-purple-900 mb-4'>Transparent Pricing</h3>
              <p className='text-purple-700 leading-relaxed'>
                Know consultation fees upfront with no hidden charges. Compare prices across different doctors and make informed decisions. We believe in transparent, honest pricing that respects your budget.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className='mt-16 bg-gradient-to-br from-purple-700 to-purple-900 rounded-3xl p-12 text-center border-2 border-purple-600 shadow-2xl'>
          <h2 className='text-4xl font-bold text-white mb-4'>Ready to Experience Better Healthcare?</h2>
          <p className='text-purple-100 text-lg mb-8 max-w-2xl mx-auto'>
            Join thousands of satisfied patients who trust VisitDoc for their healthcare needs. Book your appointment today!
          </p>
          <button className='bg-white text-purple-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-50 transition-all duration-300 hover:scale-110 shadow-lg'>
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default About
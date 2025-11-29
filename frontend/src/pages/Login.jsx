import React, { useState } from 'react'

const Login = () => {
  const [state, setState] = useState('Register')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  
  const onSubmitHandler = async(event) => {
    event.preventDefault()
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-block p-3 bg-white/20 rounded-full mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">
              {state === 'Register' ? 'Create Account' : 'Welcome Back'}
            </h2>
            <p className="text-white/80 text-sm">
              {state === 'Register' ? 'Sign up to get started' : 'Sign in to continue'}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={onSubmitHandler} className="space-y-5">
            {state === 'Register' && (
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  required
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition"
                />
              </div>
            )}
            
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition"
              />
            </div>
            
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                placeholder="Enter your password"
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-white/90 transition transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
            >
              {state === 'Register' ? 'Create Account' : 'Login'}
            </button>
          </form>

          {/* Toggle */}
          <div className="mt-6 text-center">
            <p className="text-white/80 text-sm">
              {state === 'Register' ? 'Already have an account?' : "Don't have an account?"}
              <button
                onClick={() => setState(state === 'Register' ? 'Login' : 'Register')}
                className="ml-2 text-white font-semibold hover:underline focus:outline-none"
              >
                {state === 'Register' ? 'Login' : 'Register'}
              </button>
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-white/60 text-xs mt-6">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  )
}

export default Login
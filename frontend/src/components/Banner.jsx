import React, { use } from 'react';
import { assets } from '../assets/assets';

const Banner = () => {
    const navigate = useNavigate();
  return (
    <div className="flex flex-col md:flex-row bg-purple-500 rounded-xl px-6 sm:px-10 md:px-14 py-6 my-16 shadow-lg overflow-hidden max-w-4xl mx-auto">
      {/*-----------Left Side------------*/}
      <div className="flex-1 flex flex-col justify-center gap-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Book Appointments <br /> with 100+ Trusted Doctors
        </h1>
        <p className="text-white text-lg sm:text-xl">
          Connect with experienced healthcare professionals and manage your appointments easily.
        </p>
        <button onClick={()=>{navigate('/login')}} className="bg-white text-purple-600 font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-full hover:bg-gray-100 transition-all duration-300 w-max">
          Register Now
        </button>
      </div>

      {/*-----------Right Side------------*/}
      <div className="hidden md:flex md:w-1/2 justify-center items-center">
        <img
          className="w-full max-w-[250px] object-contain animate-bounce"
          src={assets.doctor3}
          alt="Doctor Illustration"
        />
      </div>
    </div>
  );
};

export default Banner;

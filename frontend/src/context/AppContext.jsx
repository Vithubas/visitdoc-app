import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { doctors as staticDoctors } from "../assets/assets";

export const AppContext = createContext()

const AppContextProvider = (props) => {
   const currencySymbol = '₹';
   const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000';
   const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : false);
   const [userData, setUserData] = useState(false);
   const [doctors, setDoctors] = useState(staticDoctors); // Start with static doctors

   // Fetch doctors from backend and merge with static
   const getDoctors = async () => {
      try {
         const { data } = await axios.post(backendUrl + '/api/doctor/list');
         if (data.success) {
            // Merge database doctors with static doctors
            const dbDoctors = data.doctors || [];
            const mergedDoctors = [...staticDoctors, ...dbDoctors];
            setDoctors(mergedDoctors);
         }
      } catch (error) {
         console.error('Error fetching doctors:', error);
         // Keep static doctors if API fails
      }
   };

   const value = {
      doctors,
      currencySymbol,
      token,
      setToken,
      backendUrl,
      userData,
      setUserData,
      getDoctors
   }

   useEffect(() => {
      if (token) {
         localStorage.setItem('token', token);
      } else {
         localStorage.removeItem('token');
      }
   }, [token]);

   // Fetch doctors on mount
   useEffect(() => {
      getDoctors();
   }, []);

   return (
      <AppContext.Provider value={value}>
         {props.children}
      </AppContext.Provider>
   )
}

export default AppContextProvider
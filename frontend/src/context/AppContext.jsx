import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AppContext = createContext()

const AppContextProvider = (props) => {
   const currencySymbol = '₹';
   const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000';
   const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : false);
   const [userData, setUserData] = useState(false);
   const [doctors, setDoctors] = useState([]);

   // Fetch doctors from backend
   const getDoctors = async () => {
      try {
         const { data } = await axios.post(backendUrl + '/api/doctor/list');
         if (data.success) {
            setDoctors(data.doctors);
         } else {
            console.error('Failed to fetch doctors:', data.message);
         }
      } catch (error) {
         console.error('Error fetching doctors:', error);
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
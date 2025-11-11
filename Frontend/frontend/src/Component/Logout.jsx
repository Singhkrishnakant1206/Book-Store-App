import React from 'react';
import { useAuth } from "../Context/AuthProvider";

import toast from 'react-hot-toast';

function Logout() {
  const [authUser,setAuthUser] =useAuth();
  const handleLogout=()=>{
    try {
      setAuthUser({
        ...authUser,
        user:null,
      });
      localStorage.removeItem('Users')
      toast.success('Logout Successful')
    } catch (error) {
      toast.error('Error :'+ error.message)
      
    }
  };
  return (
    <div>
      <button className='px-3 py-2 bg-red-500 rounded-md cursor-pointer ' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout

import React, { createContext, useState, useEffect, useContext } from "react";

// 🔹 Context create karo
export const AuthContext = createContext();

// 🔹 Provider component
export default function AuthProvider({ children }) {
    const initialAuthUser=localStorage.getItem("Users");
    const [authUser,setAuthUser]=useState(
        initialAuthUser?JSON.parse(initialAuthUser):undefined
    );
    return(
        <AuthContext.Provider value={[authUser,setAuthUser]}>{children}
        </AuthContext.Provider>
    );
}
export const useAuth = () => useContext(AuthContext);
 
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function Login({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:4001/user/login", formData);

      // ✅ अगर login सफल हुआ तो
      if (res.data && res.data.user) {
        // user data को localStorage में save करो
        localStorage.setItem("user", JSON.stringify(res.data.user));

        // success toast
        toast.success("Login Successful 🎉");

        console.log("Logged in User:", res.data.user);

        // modal बंद करो
        if (onClose) onClose();
      } else {
        toast.error(res.data.message || "Invalid Credentials");
      }
    } catch (error) {
      console.error("Login Error:", error);
      toast.error(error.response?.data?.message || "Login Failed ❌");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 dark:text-white rounded-2xl p-6 w-96 relative shadow-2xl transform transition-all duration-300 scale-100 hover:scale-[1.02]">
        {/* Close button */}
        <button
          className="absolute top-2 right-3 text-2xl font-bold hover:text-red-500"
          onClick={() => onClose && onClose()}
        >
          ✕
        </button>

        {/* Heading */}
        <h3 className="font-bold text-2xl mb-4 text-center text-pink-500">
          Welcome Back 
        </h3>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Email */}
          <div className="flex flex-col gap-1">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input input-bordered w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 dark:bg-gray-700 dark:text-white"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="input input-bordered w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 dark:bg-gray-700 dark:text-white"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center mt-4">
            <button
              type="submit"
              className="bg-pink-500 text-white rounded-lg px-5 py-2 hover:bg-pink-600 transition-all font-semibold"
            >
              Login
            </button>

           <p className="text-sm mt-3">
  Don't have an account?{" "}
  <button 
    type="button" 
    className="text-pink-600 underline"
    onClick={() => {
      onClose();
      openSignup();
    }}
  >
    Sign Up
  </button>
</p>

          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

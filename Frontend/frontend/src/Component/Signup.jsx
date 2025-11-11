import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Signup({ onClose }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match ❌");
      return;
    }

    try {
      const res = await axios.post("http://localhost:4001/user/signup", {
        fullname: formData.fullname,
        email: formData.email,
        password: formData.password,
      });

      if (res.data.user) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        toast.success("Signup Successful 🎉");
      } else {
        toast.success(res.data.message || "Signup Successful 🎉");
      }

      // ✅ Close modal if function exists
      if (onClose) onClose();

      // ✅ Redirect to home page after short delay
      setTimeout(() => {
        navigate("/");
      }, 500);

    } catch (err) {
      console.error("Signup Error:", err);
      toast.error(err.response?.data?.message || "Signup failed ❌");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white rounded-2xl shadow-2xl p-8 w-96 relative transform transition-all duration-300 scale-100 hover:scale-[1.03]">
        <button
          onClick={() => onClose && onClose()}
          className="absolute top-3 right-4 text-2xl font-bold hover:text-red-500 transition-all"
        >
          ✕
        </button>

        <h2 className="text-3xl font-semibold text-center mb-6 text-pink-500">
          Create Account 
        </h2>

        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-pink-400 outline-none dark:bg-gray-800 transition-all"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-pink-400 outline-none dark:bg-gray-800 transition-all"
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-pink-400 outline-none dark:bg-gray-800 transition-all"
          />

          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            required
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-pink-400 outline-none dark:bg-gray-800 transition-all"
          />

          <button
            type="submit"
            className="bg-pink-500 text-white rounded-lg py-2 mt-3 hover:bg-pink-600 transition-all font-semibold shadow-md"
          >
            Sign Up
          </button>
        </form>

       <p className="text-center text-sm mt-4">
  Already have an account?{" "}
  <button
    type="button"
    className="text-pink-500 hover:underline font-medium"
    onClick={() => {
      onClose();  // Close signup modal
      openLogin(); // Open login modal
    }}
  >
    Login
  </button>
</p>

      </div>
    </div>
  );
}

export default Signup;

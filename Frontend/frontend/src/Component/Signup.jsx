import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

function Signup({ onClose }) {
  return (
    <>
      {/* Background overlay */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        {/* Modal box */}
        <div className="bg-white dark:bg-gray-800 dark:text-white rounded-lg p-6 w-96 relative shadow-lg">
          
          {/* Close button */}
          <Link to='/'
            className="absolute top-2 right-2 text-xl font-bold hover:text-red-500"
            onClick={onClose}
          >
            ✕
          </Link>

          {/* Heading */}
          <h3 className="font-bold text-lg mb-4 text-center">Sign Up</h3>

          {/* Form fields */}
          <div className="flex flex-col gap-3">
            {/* Name */}
            <div className="flex flex-col gap-1">
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter your Name"
                className="input input-bordered w-full px-2 py-1 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your Email"
                className="input input-bordered w-full px-2 py-1 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your Password"
                className="input input-bordered w-full px-2 py-1 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white"
              />
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col gap-1">
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Re-enter your Password"
                className="input input-bordered w-full px-2 py-1 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white"
              />
            </div>

            {/* Button */}
            <button className="bg-pink-500 text-white rounded-md py-2 mt-3 hover:bg-pink-600 duration-200 font-semibold">
              Sign Up
            </button>

            {/* Already have an account */}
            <p className="text-center mt-3 text-sm">
              Already have an account?{" "}
              <Link
                to="/"
                className="text-pink-500 underline hover:text-pink-600 cursor-pointer"
              >
                Login
              </Link>
              <Login/>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;

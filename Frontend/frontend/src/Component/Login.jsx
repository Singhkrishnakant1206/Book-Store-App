import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login({ isOpen, onClose }) {
  if (!isOpen) return null;

  // 📦 Form state
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // 🧠 Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 📨 Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // abhi ke liye console me dikhate hain
    console.log('Login Form Data:', formData);

    // yaha baad me API call kar sakte ho
    // example: axios.post('/api/login', formData)

    // optional: modal close kar do
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 dark:text-white rounded-lg p-6 w-96 relative">
        {/* Close button */}
        <button
          className="absolute top-2 right-2 text-xl font-bold"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Heading */}
        <h3 className="font-bold text-lg mb-4 text-center">Login</h3>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
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
              className="input input-bordered w-full px-2 py-1 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white"
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
              className="input input-bordered w-full px-2 py-1 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center mt-4">
            <button
              type="submit"
              className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-200"
            >
              Login
            </button>

            <p className="text-sm">
              Not Registered?{' '}
              <Link
                to="/Signup"
                className="underline text-blue-500 cursor-pointer"
              >
                Signup
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

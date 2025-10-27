import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4">
      <div className="relative bg-white dark:bg-gray-800 dark:text-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        
        {/* ✕ Close Button */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl font-bold"
        >
          ✕
        </button>

        {/* 🧠 Title */}
        <h2 className="text-3xl font-semibold text-center mb-6">About Our Book Store</h2>

        {/* 📝 Content */}
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Welcome to our <strong>Online Book Store</strong>! 📚  
          We aim to bring knowledge, stories, and imagination to every reader through a curated collection of books from around the world.  
        </p>

        <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          Our mission is to make reading more accessible by offering a wide range of genres — from 
          educational textbooks to thrilling novels. Whether you're a student, professional, or book lover, 
          you'll find something just for you.
        </p>

        <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          Thank you for being part of our journey. Together, let's make the world a more thoughtful and imaginative place. 🌍
        </p>
      </div>
    </div>
  );
}

export default About;

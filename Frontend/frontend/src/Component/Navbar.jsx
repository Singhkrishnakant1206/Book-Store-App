// Navbar.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";  // ✅ Added
import Login from "./Login";

function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [sticky, setSticky] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  // 🌙 Theme handling
  useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  // 🧭 Sticky navbar
  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 📌 Navigation Links (using Link)
  const navItems = (
    <>
      <li><Link to="/" className="dark:text-white">Home</Link></li>
      <li><Link to="/Course" className="dark:text-white">Course</Link></li>
      <li><Link to="/Contact" className="dark:text-white">Contact</Link></li> {/* ✅ Updated */}
      <li><Link to="/About" className="dark:text-white">About</Link></li>
    </>
  );

  return (
    <>
      <div
        className={`max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          sticky ? "bg-white dark:bg-gray-900 shadow-md" : "bg-white dark:bg-gray-900"
        }`}
      >
        <div className="navbar flex justify-between items-center flex-nowrap py-3">
          {/* Logo */}
          <div className="navbar-start">
            <Link to="/" className="text-2xl font-bold cursor-pointer dark:text-white">
              Book Store
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="navbar-end hidden lg:flex items-center gap-x-3 flex-nowrap">
            <ul className="menu menu-horizontal px-1 items-center gap-x-2 flex-nowrap">
              {navItems}
            </ul>

            {/* Search box */}
            <div className="w-60 relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-2 py-2 border border-gray-300 rounded-md outline-none transition duration-300 
                           hover:ring-2 hover:ring-black hover:shadow-md dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              />
            </div>

            {/* Theme Toggle */}
            <input
              type="checkbox"
              className="toggle theme-controller transition transform duration-300 hover:scale-110 hover:shadow-lg hover:ring-2 hover:ring-black cursor-pointer"
              onChange={() => setTheme(theme === "light" ? "dark" : "light")}
              checked={theme === "dark"}
            />

            {/* Login Button */}
            <button
              className="px-2 py-1 border border-black text-black rounded-md cursor-pointer font-semibold
                         transition duration-300 hover:bg-black hover:text-white hover:scale-105 hover:shadow-lg
                         dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
              onClick={() => setIsLoginOpen(true)}
            >
              Login
            </button>
          </div>

          {/* Mobile menu */}
          <div className="navbar-end flex items-center gap-3 lg:hidden">
            <button
              className="px-3 py-1.5 border border-black text-black rounded-md cursor-pointer font-semibold
                         transition duration-300 hover:bg-black hover:text-white hover:scale-105 hover:shadow-lg
                         dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
              onClick={() => setIsLoginOpen(true)}
            >
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
}

export default Navbar;

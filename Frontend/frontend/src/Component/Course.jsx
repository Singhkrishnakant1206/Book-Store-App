import React, { useState, useEffect } from 'react'
import Cards from './Cards'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useAuth } from '../Context/AuthProvider'

function Course() {

  const [authUser] = useAuth();  // ✅ get logged user
  const [book, setBook] = useState([]);

  useEffect(() => {
    if(!authUser) return; // ✅ Stop API call if not logged in

    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, [authUser]);

  // ✅ If not logged in show message
  if (!authUser) {
    return (
      <div className="flex justify-center items-center h-screen flex-col">
        <h2 className="text-2xl font-bold text-red-500">Please Login to View Courses</h2>
        <p className="mt-4 text-gray-600">You must be logged in to access this page.</p>
        <Link to="/">
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">
            Go to Home
          </button>
        </Link>
      </div>
    )
  }

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 pt-32 md:pt-36'>

        <h1 className='text-2xl font-semibold md:text-4xl dark:text-white text-center'>
          We're Delighted to Have You <span className='text-pink-500'> Here ! :) </span>
        </h1>
        <p className='mt-6 md:mt-12 dark:text-gray-300 text-center'>
          Explore our premium courses & start learning today!
        </p>

        <div className='mt-12 grid grid-cols-1 md:grid-cols-4 gap-6'>
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;

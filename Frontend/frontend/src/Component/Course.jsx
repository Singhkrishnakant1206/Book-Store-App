import React from 'react';
import Cards from './Cards';
import list from '../../public/list.json';
import { Link } from 'react-router-dom';

function Course() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        
        {/* Dynamic top padding to account for sticky navbar */}
        <div className='pt-32 md:pt-36 text-center'>
          <h1 className='text-2xl font-semibold md:text-4xl dark:text-white'>
            We're Delighted to Have You <span className='text-pink-500'> Here ! :) </span>
          </h1>
          <p className='mt-6 md:mt-12 dark:text-gray-300'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi nobis enim libero sint blanditiis, numquam deserunt magnam? Cumque eius hic maxime obcaecati quam impedit officia est quibusdam aliquam. Quibusdam error facilis assumenda quas? Facilis, quas!
          </p>
          <Link to='/'>
            <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>
              Back
            </button>
          </Link>
        </div>

        {/* Cards Section */}
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4 gap-6'>
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;

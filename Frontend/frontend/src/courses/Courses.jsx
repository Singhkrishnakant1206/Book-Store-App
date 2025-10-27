import React from 'react'
import Navbar from '../Component/Navbar'
import Course from '../Component/Course'
import Footer from '../Component/Footer'
import list from '../../public/list.json'

function Courses() {
  console.log(list)
  return (
   <>
   <div>
    <Navbar/>
    <div className='min-h-screen'>

    <Course/>
    </div>
    <Footer/>
   </div>
   </>
  )
}

export default Courses

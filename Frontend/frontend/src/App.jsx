import React from 'react'
import Home from './Home/Home'
import Courses from './courses/Courses'
import Signup from './Component/Signup'
import Contact from './Component/Contact'
import About from './Component/About'   // ✅ About import kiya
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white min-h-screen'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Course' element={<Courses />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/About' element={<About />} /> {/* ✅ New Route added */}
        </Routes>
      </div>
    </>
  )
}

export default App

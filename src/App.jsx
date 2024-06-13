import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'


import Navbar from './components/Navbar'



// Pages

import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'


function App() {


  return (
    <>
      <Navbar />
     

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu />} />
        <Route path='/about' element={<About />} />
      </Routes>

    </>
  )
}

export default App

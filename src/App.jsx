import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'


import Navbar from './components/Navbar'



// Pages

import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import ProductDetail from './pages/ProductDetail'


function App() {


  return (
    <>
      <Navbar />
     

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<ProductDetail />} />
      </Routes>

    </>
  )
}

export default App

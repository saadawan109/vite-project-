import { useState } from 'react'
import { Routes, Route, Router } from "react-router-dom";
import './App.css'

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


import Navbar from './components/Navbar'



// Pages

import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import ProductDetail from './pages/ProductDetail'
import ProductAdd from './pages/ProductAdd';
import Dashboard from './pages/Dashboard';
import Edit from './pages/Edit';


function App() {


  return (
    <>
      <Navbar />


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<ProductDetail />} />
        <Route path='/productadd' element={<ProductAdd />} />
        <Route path='/dashboard' element={ <Dashboard/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
      </Routes>


      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />

    </>
  )
}

export default App

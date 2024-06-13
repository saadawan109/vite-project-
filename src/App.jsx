import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Head from './components/Head'
import Icons from './components/Icons'
import Categories from './components/Categories'
import Features from './components/Features'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Head />
      <Icons />
      <Categories />
      <Features />
    </>
  )
}

export default App

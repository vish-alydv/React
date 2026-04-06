import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cars from './components/Cars'
import Footer from './components/Footer'
import './App.css'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Cars />
      <Footer />
    </>
  )
}

export default App
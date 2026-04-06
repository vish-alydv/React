import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Drive Your <span>Dream</span></h1>
        <p>Premium cars at unbeatable prices. Explore our latest collection.</p>
        <button className="hero-btn">Explore Cars</button>
      </div>
    </section>
  )
}

export default Hero
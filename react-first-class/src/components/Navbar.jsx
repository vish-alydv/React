import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="logo">🚗 AutoElite</div>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#cars">Cars</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
    </nav>
  )
}

export default Navbar
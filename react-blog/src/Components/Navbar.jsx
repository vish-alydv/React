import React from 'react'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/bollywood">Bollywood</Link>
        <Link to="/hollywood">Hollywood</Link>
        <Link to="/tech">Technology</Link>
        <Link to="/fitness">Fitness</Link>
        <Link to="/food">Food</Link>
    </div>
  )
}

export default Navbar
import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import icon from '/ReactJs/Login-form/src/assets/nav-icon.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='icon' src={icon} alt="" />
        <div className="nav">
          <a to='./' >HOME</a>
          <a to='./' >ABOUT US</a>
          <a to='./' >SERVICES</a>
          <a to='./' >FAQ</a>
        </div>
      
    </div>
  )
}

export default Navbar

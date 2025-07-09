import React from 'react'
import './Header.css'
import Navbar from '../Navbar/Navbar'
import Button from '../Button/Button'

const Header = () => {
  return (
    <div className='header'>
      <Navbar/> 
      <Button/>
    </div>
  )
}

export default Header

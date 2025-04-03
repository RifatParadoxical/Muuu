import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  return (
    <div className='navbar'>
        <NavLink to={'/Home'}>Home</NavLink>
        <NavLink to={'/Gallery'}>Gallery</NavLink>
        <NavLink to={'/Letter'}>Letter</NavLink>
        <NavLink to={'/Surprise'}>Surprise</NavLink>
    </div>
  )
}

export default Navbar
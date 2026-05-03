import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
      <div className='header-div'>
        <h1>My Store</h1>

        <nav>
          <ul className='nav-links'>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/register">Register</NavLink></li>
            <li><NavLink to="/cart">Cart</NavLink></li>
          </ul>
        </nav>

      </div>
    </header>
  )
}

export default Header
import React from 'react'
import {NavLink} from 'react-router-dom'
const NavigationMenu = () => {
  return (
    <header>
        <h1>Kenny's kitchen</h1>
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/dashboard'>Dashboard</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to='/login'>Login</NavLink>
        </nav>
    </header>
  )
}
export default NavigationMenu
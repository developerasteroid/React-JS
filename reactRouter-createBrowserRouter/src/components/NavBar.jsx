import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
        <nav>
            <NavLink className={(e) => {return e.isActive? "active" : ""}} to="/"><li>Home</li></NavLink>
            <NavLink className={(e) => {return e.isActive? "active" : ""}} to="/about"><li>About</li></NavLink>
            <NavLink className={(e) => {return e.isActive? "active" : ""}} to="/login"><li>Login</li></NavLink>
        </nav>
    </div>
  )
}

export default NavBar
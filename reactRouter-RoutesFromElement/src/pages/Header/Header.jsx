import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
        <h1>Title</h1>
        {/* <nav>
            <li><Link className='link' to={""}>Home</Link></li>
            <li><Link className='link' to={"about"}>About</Link></li>
            <li><Link className='link' to={"blog"}>Blog</Link></li>
            <li><Link className='link' to={"contact"}>Contact</Link></li>
        </nav> */}
        <nav>
            <li><NavLink to={"/"} className={({isActive}) => isActive? "link highlight":"link"}>Home</NavLink></li>
            <li><NavLink to={"about"} className={({isActive}) => isActive? "link highlight":"link"}>About</NavLink></li>
            <li><NavLink to={"blog"} className={({isActive}) => isActive? "link highlight":"link"}>Blog</NavLink></li>
            <li><NavLink to={"contact"} className={({isActive}) => isActive? "link highlight":"link"}>Contact</NavLink></li>
        </nav>
    </div>
  )
}

export default Header
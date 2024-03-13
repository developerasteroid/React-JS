import React from 'react'
import { NavLink } from 'react-router-dom'

function DashNav() {
  return (
    <div>
        <nav>
            <NavLink to='/' className={(e)=>{return e.isActive? "active" : ""}} ><li>Dashboard</li></NavLink>
            <NavLink to='/products' className={(e)=>{return e.isActive? "active" : ""}} ><li>Products</li></NavLink>
            <NavLink to='/orders' className={(e)=>{return e.isActive? "active" : ""}} ><li>Orders</li></NavLink>
            <NavLink to='/analysis' className={(e)=>{return e.isActive? "active" : ""}} ><li>Analysis</li></NavLink>
            <NavLink to='/reviews' className={(e)=>{return e.isActive? "active" : ""}} ><li>Reviews</li></NavLink>
        </nav>
    </div>
  )
}

export default DashNav
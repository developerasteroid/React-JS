import React from 'react'
import DashNav from './DashNav'
import { Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <div className='mainContainer'>
        <div className='navContainer'>
            <div className="heading"><h1>ShopZone</h1></div>
            <DashNav/>
        </div>
        <div className='subContainer'>
            <Outlet/>
        </div>
    </div>
  )
}

export default Dashboard
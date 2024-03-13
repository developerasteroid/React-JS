import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Orders() {
  return (
    <div>
        <h1>Orders</h1>
        <div><Link to="/orders/pending">Pending</Link></div>
        <Outlet/>
    </div>
  )
}

export default Orders
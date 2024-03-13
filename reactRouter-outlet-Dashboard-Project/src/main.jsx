import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Dashboard from './component/Dashboard.jsx'
import Home from './component/Home.jsx'
import Products from './component/Products.jsx'
import Orders from './component/Orders.jsx'
import Analysis from './component/Analysis.jsx'
import Review from './component/Review.jsx'
import PendingOrder from './component/PendingOrder.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Dashboard/>}>
      <Route path='' element={<Home/>}/>
      <Route path='products' element={<Products/>}/>
      <Route path='orders' element={<Orders/>}>
        <Route path='pending' element={<PendingOrder/>}/>
      </Route>
      <Route path='analysis' element={<Analysis/>}/>
      <Route path='reviews' element={<Review/>}/>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

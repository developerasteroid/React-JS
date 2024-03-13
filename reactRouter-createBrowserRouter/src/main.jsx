import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Login from './components/Login.jsx'
import Error from './components/Error.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
    errorElement:<Error/>
  },
  {
    path:'/about',
    element:<About/>
  },
  {
    path:'/login',
    element:<Login/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

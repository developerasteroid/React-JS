import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './pages/Layout'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import Blog from './pages/Blog/Blog'
import Contact from './pages/Contact/Contact'

function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>} >
        <Route path='' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='blog' element={<Blog/>} />
        <Route path='contact' element={<Contact/>} />
      </Route>
    )
  )

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App

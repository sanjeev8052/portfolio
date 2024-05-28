import React, { useState } from 'react'
import "./App.css"
import Header from './components/Header'
import Home from './components/Home'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'

function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [{
        index: true,
        element: <Home />
      }]

    }
  ])
  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  )
}

export default App

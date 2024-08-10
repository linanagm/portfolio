import { useState } from 'react'
import './App.css'
import Home from './components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import About from './components/About/About'

function App() {

  const routes = createBrowserRouter([
    {path:"" , element:<Layout /> , children:[
      {index:true , element:<Home />},
      {path:"about" , element:<About />},
      {path:"portfolio" , element:<Portfolio />},
      {path:"contact" , element:<Contact />},
    ]}
  ])

  
  
  
  return (

    <RouterProvider router={routes}>
    App
      
        
    </RouterProvider>
  )
}

export default App

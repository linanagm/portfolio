import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'
import FooterComp from '../footer/Footer'

export default function Layout() {
  return (
    <>
        <Navbar />

         <Outlet></Outlet>
        
        <FooterComp />
    </>
  )
}

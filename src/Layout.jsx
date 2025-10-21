import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import FloatingCTA from "./components/FloatingCTA/FloatingCTA";
import './App.css'

function Layout() {

  
  return (
    <div>
    <Header/>
    <Outlet />
    <FloatingCTA />
    <Footer />
    </div>
  )
}

export default Layout
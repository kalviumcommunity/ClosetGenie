import React from 'react'
import Navbar from "./navbar"
import { Outlet } from 'react-router-dom'

const TopBar = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
    </>
  )
}

export default TopBar
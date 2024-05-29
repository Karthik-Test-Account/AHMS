import React from 'react'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

function StudentLayout() {
  return (
    <>
        <Header/>
        <Outlet/>
        <Sidebar/>
    </>
  )
}

export default StudentLayout
import React from 'react'
import {CssBaseline} from '@mui/material'
import LandingPageHeader from './components/Landing Page/LandingPageHeader'
import LandingPageBody from './components/Landing Page/LandingPageBody'
import {Outlet} from 'react-router-dom'
function LandingPageLayout() {
  return (
    <div style={{ backgroundColor: "#0C1B2A", minHeight: "100vh",height:"auto" }}>
        <CssBaseline></CssBaseline>
        <LandingPageHeader/>
        <main>
          <Outlet/>
        </main>
      </div>
  )
}

export default LandingPageLayout
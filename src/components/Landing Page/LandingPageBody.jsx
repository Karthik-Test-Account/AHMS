import React from 'react'
import {Container,Button,Typography} from '@mui/material'
function LandingPageBody(props) {
 
  return (
    <Container
            maxWidth="lg"
            sx={{
              height: "50vh",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "grid",
                placeItems: "center",
                gap: "10px",
                width: "100%",
                
                marginTop: "300px",
              }}
            >
              <Typography
                // variant="h2"
                sx={{ fontWeight: "bold" ,fontSize:{xs:"2.5rem",md:"3.5rem"}}}
                color="primary"
                align="center"
                
              >
                Illuminati Hostel Management System
              </Typography>
              <Typography variant="h5" color="white" align="center">
                One Solution for all hostel needs
              </Typography>

              {/* <div style={{border:"2px solid black",width:"100%",display:"flex",justifyContent:"center",flexDirection:"column"}}> */}
              <Button
                variant="contained"
                sx={{ width: "25%", marginTop: "40px" }}
                onClick={props.toggleClick}
              >
                Login
              </Button>
              <Typography variant="body1" color="white">
                OR
              </Typography>
              <Button variant="text" sx={{ color: "white", width: "25%", }}>
                Register
              </Button>
              {/* </div> */}
            </div>
          </Container>
  )
}

export default LandingPageBody
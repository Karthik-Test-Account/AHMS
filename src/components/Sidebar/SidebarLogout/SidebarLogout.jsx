import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import { Box, Button, Typography } from '@mui/material';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";


// const auth = getAuth();
function SidebarLogout() {
  const navigate= useNavigate();
  const handleLogout=()=>{
    const auth = getAuth();
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      alert("inappropriate logout")
    });
  
  }
  return (
    <Box
      sx={{
        color: 'white',position: 'fixed',left:0,bottom:0,width: '240px',
        display: 'flex',alignItems: 'center',justifyContent:'center',
        padding:'0 10px',zIndex: 1300,
        '@media (max-width:600px)':{display:'none'}
      }}
    >
        <Button variant="contained" href="#" fullWidth sx={{textTransform:'none',marginBottom:'40px',display:'flex',justifyContent:'center',gap:'10px'}}
        onClick={handleLogout}>
            <LogoutIcon />
            <Typography variant="h6">
                Log Out
            </Typography>
        </Button>
    </Box>
  )
}

export default SidebarLogout
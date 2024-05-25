import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import SchoolIcon from '@mui/icons-material/School';

function SideBarText() {
  return (
    <Box 
      sx={{
        color: 'white',
        backgroundColor:'#1976D2',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '239px',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '16px',
        zIndex: 1300, // Ensure it is above other elements
        '@media (max-width:600px)':{display:'none'}
      }}
    >
      <SchoolIcon sx={{ marginRight: '8px' }} />
      <Typography variant="h6" noWrap>
        Dashboard
      </Typography>
    </Box>
  );
}

export default SideBarText;

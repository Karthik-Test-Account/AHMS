import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import SchoolIcon from '@mui/icons-material/School';

function SideBarText() {
  return (
    <Box 
      sx={{
        color: 'white',
        backgroundColor:'#1976D2',
        
        width: '239px',
        height: '64px',
       
        display: {xs:"flex",md:"flex"},
        alignItems: 'center',
        paddingLeft: '16px',
        
        
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

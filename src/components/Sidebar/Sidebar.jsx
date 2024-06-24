import React from 'react';
import { Box, Drawer, Toolbar,Typography } from '@mui/material';
import SideBarText from '../Sidebar/SidebarHeading/SidebarText';
import SidebarLogout from '../Sidebar/SidebarLogout/SidebarLogout';
import SidebarItems from '../Sidebar/SidebarItems/SidebarItems';
import SchoolIcon from '@mui/icons-material/School';

const drawerWidth = 240;

function Sidebar(props) {
  console.log("Sidebar props.userMenu:", props.userMenu);

  return (
    <Box sx={{ display: 'flex' }}>
   
      {/* <SidebarLogout /> */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: 'black',
            color: 'white',
          },
          '@media (max-width:600px)': { display: 'none' },
        }}
        variant="permanent"
        anchor="left"
      >
      <Box >

        <Box >
        <SideBarText></SideBarText>
        <SidebarItems userMenu={props.userMenu}/>
        </Box>
        <Box>
        <SidebarLogout></SidebarLogout>
        </Box>
      </Box>
      </Drawer>
    </Box>
  );
}

export default Sidebar;
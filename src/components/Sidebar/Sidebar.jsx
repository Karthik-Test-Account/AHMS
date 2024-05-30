import React from 'react';
import { Box, Drawer, Toolbar } from '@mui/material';
import SideBarText from '../Sidebar/SidebarHeading/SidebarText';
import SidebarLogout from '../Sidebar/SidebarLogout/SidebarLogout';
import SidebarItems from '../Sidebar/SidebarItems/SidebarItems';

const drawerWidth = 240;

function Sidebar(props) {
  console.log("Sidebar props.userMenu:", props.userMenu);

  return (
    <Box sx={{ display: 'flex' }}>
      <SideBarText />
      <SidebarLogout />
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
        <Toolbar />
        <SidebarItems userMenu={props.userMenu}/>
      </Drawer>
    </Box>
  );
}

export default Sidebar;
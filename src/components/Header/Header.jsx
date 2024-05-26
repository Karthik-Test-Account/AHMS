import React, { useState } from 'react';
import { AppBar, CssBaseline, Grid, Toolbar, Drawer, IconButton } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import SidebarItems from '../Sidebar/SidebarItems/SidebarItems';

const drawerWidth = 240;

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          '@media (max-width:600px)': { width: '100%' },
          backgroundColor: '#0C0A08',
          color: 'white',
        }}
      >
        <Toolbar>
          <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Grid item className='icon' sx={{ '@media (min-width:600px)': { visibility: 'hidden' } }}>
              <IconButton color="inherit" edge="start" onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <Grid container sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Grid item className='icon'>
                  <SettingsIcon />
                </Grid>
                <Grid item className='icon'>
                  <NotificationsIcon />
                </Grid>
                <Grid item className='icon'>
                  <AccountCircleIcon />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: 'black', color: 'white' },
        }}
      >
        <Toolbar />
        <SidebarItems onClick={handleDrawerToggle} />
      </Drawer>
    </>
  );
}

export default Header;

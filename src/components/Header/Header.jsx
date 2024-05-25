import { AppBar, CssBaseline, Grid, Toolbar,Badge,IconButton } from '@mui/material'
import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';


const drawerWidth=240;

function Header() {
  return (
    <>
        <CssBaseline/>
        <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, '@media (max-width:600px)': { width:'100%'},backgroundColor:'#0C0A08',color:'white'}} >
            <Toolbar>
                <Grid container sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    <Grid item className='icon' sx={{'@media (min-width:600px)': { visibility:'hidden'}}}>
                        <MenuIcon/>
                    </Grid>
                    <Grid item>
                        <Grid container sx={{display:'flex',alignItems:'center'}}>
                            <Grid item className='icon'>
                                <IconButton size='large' color='inherit'>
                                    <SettingsIcon/>
                                </IconButton>
                            </Grid>
                            <Grid item className='icon'>
                            <IconButton
                                size="large"
                                color="inherit"
                                >
                                <Badge badgeContent={17} color="error">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                            </Grid>
                            <Grid item className='icon'>
                                <IconButton size='large' color='inherit'>
                                    <AccountCircleIcon/>
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    </>
  )
}

export default Header
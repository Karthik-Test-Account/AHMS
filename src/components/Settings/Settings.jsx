import { Typography,Box,Toolbar, Grid, Button, TextField } from '@mui/material'
import React from 'react'

const headerHeight = 50;
const drawerWidth = 240;

function Settings() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Box component="main" sx={{
                minHeight: '100vh', height: 'auto', backgroundColor: '#1B1918', display: 'flex', justifyContent: 'center', alignItems: 'start',
                padding: '0', marginTop: `${headerHeight}px`, '@media (min-width:600px)': { marginLeft: `${drawerWidth}px` }
            }}>
                <Toolbar />
                <Grid container gap={2} sx={{ margin: '90px 0 20px 0', width: '80%', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'start', padding: '10px' }}>
                    <Grid item>
                      <Typography variant='h3' sx={{ fontWeight: 'bold' }}>Settings</Typography>
                    </Grid>
                    <Grid item sx={{width:'54%',backgroundColor:'#090909',borderRadius:'8px',"@media (max-width:900px)": { width: "80%" },"@media (max-width:700px)": { width: "100%" }}}>
                        <Grid container gap={3} sx={{padding:'15px',width:'100%',display:'flex',flexDirection:'column',justifyContent:'start'}}>
                          <Grid item>
                            <Typography variant='h5' sx={{fontWeight:'bold'}}>Change Password</Typography>
                          </Grid>
                          <Grid item sx={{width:'100%'}}>
                            <Grid container gap={1} sx={{width:'100%'}}>
                                <Grid item>
                                  <Typography sx={{fontSize:'0.9rem'}}>Your Old Password</Typography>
                                </Grid>
                                <Grid item sx={{width:'100%'}}>
                                  <TextField
                                    fullWidth
                                    label="Old Password"
                                    sx={{backgroundColor:'#394051',color:'white'}}
                                  />
                                </Grid>
                                <Grid item>
                                  <Typography sx={{fontSize:'0.9rem'}}>Your New Password</Typography>
                                </Grid>
                                <Grid item sx={{width:'100%'}}>
                                  <TextField
                                    fullWidth
                                    label="New Password"
                                    sx={{backgroundColor:'#394051',color:'white'}}
                                  />
                                </Grid>
                            </Grid>
                          </Grid>
                          <Grid item sx={{ width: '100%' }}>
                                <Button variant="contained" sx={{ width: '100%' }}>Change Password</Button>
                          </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
    </div>
  )
}

export default Settings
import { Typography, Box, Grid, Toolbar, Button } from '@mui/material'
import React from 'react'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
const headerHeight = 50;
const drawerWidth = 240;

function AdminAllStudents() {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Box component="main" sx={{
                minHeight: '100vh', height: 'auto', backgroundColor: '#1B1918', display: 'flex', justifyContent: 'center', alignItems: 'start',
                padding: '0', marginTop: `${headerHeight}px`, '@media (min-width:600px)': { marginLeft: `${drawerWidth}px` }
            }}>
                <Toolbar />
                <Grid container sx={{ display: 'flex', margin: '60px 0 20px 0', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '30px' }}>
                    <Grid item>
                        <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'white', '@media (max-width:1136px)': { fontSize: '20px' } }}>All Students</Typography>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" sx={{ height: '50px', width: '240px', borderRadius: '7.5px' }}>Download List</Button>
                    </Grid>
                    <Grid container sx={{ height: '100%', width: '55%', padding: '20px', borderRadius: '10px', background: 'black', display: 'flex', flexDirection: 'row', '@media (max-width:660px)': { width: 'auto' } }}>
                        <Grid item>
                            <Typography variant='h5' sx={{ color: 'white', '@media (max-width:1136px)': { fontSize: '1rem' } }}>All Students</Typography>
                        </Grid>
                        <Grid container sx={{ display: 'flex', flexDirection: 'column', padding: '30px', gap: '20px' }}>
                            <Grid container sx={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                                <Grid conatiner sx={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
                                    <Grid item >
                                        <PersonOutlineOutlinedIcon sx={{ color: 'white', fontSize: '30px', '@media (max-width:1136px)': { fontSize: '20px' } }} />
                                    </Grid>
                                    <Grid item>
                                        <Typography variant='body1' sx={{ color: 'white', '@media (max-width:1136px)': { fontSize: '15px' } }}>Saiteja</Typography>
                                    </Grid>
                                    <Grid container sx={{ display: 'flex', justifyContent: 'end', gap: '10px' }}>

                                        <Grid item>
                                            <BorderColorOutlinedIcon sx={{ color: 'white', fontSize: '30px', '@media (max-width:1136px)': { fontSize: '20px' } }} />
                                        </Grid>
                                        <Grid item>
                                            <DeleteOutlinedIcon sx={{ color: 'white', fontSize: '30px', '@media (max-width:1136px)': { fontSize: '20px' } }} />
                                        </Grid>

                                    </Grid>
                                </Grid>
                                <Grid container sx={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>
                                    <Grid item sx={{ marginLeft: '50px', marginTop: '-20px', '@media (max-width:1136px)': { marginLeft: '40px', marginTop: '-10px' } }}>
                                        <Typography variant='caption' sx={{ color: 'gray', '@media (max-width:1136px)': { fontSize: '10px' } }}>23015A0513 | Room:241</Typography>
                                    </Grid>

                                </Grid>
                            </Grid>
                            <Grid container sx={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                                <Grid conatiner sx={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
                                    <Grid item >
                                        <PersonOutlineOutlinedIcon sx={{ color: 'white', fontSize: '30px', '@media (max-width:1136px)': { fontSize: '20px' } }} />
                                    </Grid>
                                    <Grid item>
                                        <Typography variant='body1' sx={{ color: 'white', '@media (max-width:1136px)': { fontSize: '15px' } }}>karthikram</Typography>
                                    </Grid>
                                    <Grid container sx={{ display: 'flex', justifyContent: 'end', gap: '10px' }}>

                                        <Grid item>
                                            <BorderColorOutlinedIcon sx={{ color: 'white', fontSize: '30px', '@media (max-width:1136px)': { fontSize: '20px' } }} />
                                        </Grid>
                                        <Grid item>
                                            <DeleteOutlinedIcon sx={{ color: 'white', fontSize: '30px', '@media (max-width:1136px)': { fontSize: '20px' } }} />
                                        </Grid>

                                    </Grid>
                                </Grid>
                                <Grid container sx={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>
                                    <Grid item sx={{ marginLeft: '50px', marginTop: '-20px', '@media (max-width:1136px)': { marginLeft: '40px', marginTop: '-10px' } }}>
                                        <Typography variant='caption' sx={{ color: 'gray', '@media (max-width:1136px)': { fontSize: '10px' } }}>23015A0504 | Room:241</Typography>
                                    </Grid>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default AdminAllStudents
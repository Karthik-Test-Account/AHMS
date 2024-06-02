import React from 'react';
import { Box, Grid, Toolbar, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PieChartComponent from '../../PieChart/PieChart';
import CloseIcon from '@mui/icons-material/Close';

const drawerWidth = 240;
const headerHeight = 50;

const data = [
    { category: 'Days off', value: 3 },
    { category: 'Days present', value: 5 },
];

function Attendance() {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Box component="main" sx={{
                backgroundColor: '#1B1918', height: `calc(100vh - ${headerHeight}px)`, overflow: 'auto',
                padding: '15px', marginTop: `${headerHeight}px`, '@media (min-width:600px)': { marginLeft: `${drawerWidth}px ` }
            }}>
                <Toolbar />
                <Box sx={{ width: '100%', height: '100%', backgroundColor: '1B1918' }}>
                    <Grid container sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '10px' }}>
                        <Grid item sx={{ marginTop: '40px' }}>
                            <Typography variant='h3' sx={{ color: 'white' }}>Attendance</Typography>
                        </Grid>
                        <Grid container sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '30px' }}>
                            <Grid item >
                                <Typography variant='h6' sx={{ color: 'white' }}>Total days:8</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant='h6' sx={{ color: 'white' }}>Present Days:5</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant='h6' sx={{ color: 'white' }}>Absent days:3</Typography>
                            </Grid>
                        </Grid>
                        <Grid container sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '30px' }}>
                            <Grid item>
                                <PieChartComponent data={data} argumentField="category" valueField="value" height='400' width='400' labelVisible={false} paperColor='#1B1918' />
                            </Grid>
                            <Grid item sx={{ width: '30%', height: 'auto', backgroundColor: '#090909', padding: '10px', '@media (max-width:980px)': { width: '100%' } }}>
                                <Grid container sx={{ width: '100%', height: '100%', backgroundColor: '#090909', padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'start', gap: '10px', overflowY: 'auto' }}>
                                    <Grid item>
                                        <Typography variant='h6' sx={{ color: 'white' }}>This week</Typography>
                                    </Grid>
                                    <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Grid item sx={{ color: 'white' }}>
                                            Thursday --June 8,2023
                                        </Grid>
                                        <Grid item sx={{ color: 'white', cursor: 'pointer' }}>
                                            <CloseIcon />
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography sx={{ color: 'gray' }}>Absent</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </div >
    )
}

export default Attendance;
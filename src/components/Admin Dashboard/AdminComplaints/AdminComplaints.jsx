import { Typography, Box, Toolbar, Grid } from '@mui/material';
import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';

const uData = [0, 0, 0, 0, 0, 0, 1];

const xLabels = [
    'june 2,2023',
    'june 3,2023',
    'june 4,2023',
    'june 5,2023',
    'june 6,2023',
    'june 7,2023',
    'june 8,2023',
];

const headerHeight = 50;
const drawerWidth = 240;

function Admincomplaints() {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Box component="main" sx={{
                minHeight: '100vh', height: 'auto', backgroundColor: '#1B1918', display: 'flex', justifyContent: 'center', alignItems: 'start',
                padding: '0', marginTop: `${headerHeight}px`, '@media (min-width:600px)': { marginLeft: `${drawerWidth}px` }
            }}>
                <Toolbar />
                <Grid container sx={{ display: 'flex', margin: '60px 0 20px 0', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: '50px' }}>
                    <Grid item>
                        <Typography variant='h3' sx={{ color: 'white', '@media (max-width:1136px)': { fontSize: '2rem' } }}>Complaints</Typography>
                    </Grid>
                    <Grid container sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '50px', '@media (max-width:1136px)': {} }}>
                        <Grid item sx={{ height: '300px', width: '450px', '@media (max-width:1136px)': { width: '300px', height: '200px' } }}>
                            <LineChart

                                series={[
                                    { data: uData },
                                ]}

                                xAxis={[{ scaleType: 'point', data: xLabels }]}
                                sx={{ backgroundColor: '#bdbdbd', borderRadius: '20px' }}
                            />
                        </Grid>
                        <Grid item sx={{ width: '30%', height: '40%' }} >
                            <Grid container sx={{ width: '100%', height: '100%', backgroundColor: '#090909', padding: '20px', display: 'flex', borderRadius: '10px', flexDirection: 'column', justifyContent: 'start', gap: '10px', overflowY: 'auto' }}>
                                <Grid item>
                                    <Typography variant='h6' sx={{ color: 'white' }}>New Complaints</Typography>
                                </Grid>
                                <Grid item sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px' }}>
                                    <Grid container sx={{ width: '50%', display: 'flex', justifyContent: 'start', alignItems: 'center', gap: '10px' }}>
                                        <Grid item>
                                            <ErrorOutlineRoundedIcon sx={{ color: 'white' }} />
                                        </Grid>
                                        <Grid item>
                                            <Grid container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                                                <Grid item><Typography sx={{ fontSize: '13px', color: 'white' }}>hello world</Typography></Grid>
                                                <Grid item><Typography sx={{ fontSize: '13px', color: 'white' }}>lorem epsum</Typography></Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid container sx={{ width: 'calc(50% - 10px)', display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
                                        <Grid item>
                                            <Typography sx={{ fontSize: '14px', color: 'white' }}>solved</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </div >
    )
}

export default Admincomplaints
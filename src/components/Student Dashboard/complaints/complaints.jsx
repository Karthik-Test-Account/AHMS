import React from 'react';
import { Box, Grid, Toolbar, Typography, FormControl, MenuItem, Select, TextField, Button } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DoneIcon from '@mui/icons-material/Done';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

const drawerWidth = 240;
const headerHeight = 50;

function Complaints() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Box component="main" sx={{
                backgroundColor: '#1B1918', height: `calc(100vh - ${headerHeight}px)`,
                padding: '15px', marginTop: `${headerHeight}px`, '@media (min-width:600px)': { marginLeft: `${drawerWidth}px ` }
            }}>
                <Toolbar />
                <Grid container sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: '10px' }}>
                    <Grid item>
                        <Typography variant='h4' sx={{ fontWeight: 'bold', color: 'white' }}>
                            Complaints
                        </Typography>
                    </Grid>
                    <Grid item sx={{ width: '100%', height: '100%' }}>
                        <Grid container sx={{ width: '70%', height: '50%', display: 'flex', justifyContent: 'column', color: 'white', gap: '5%', marginLeft: '17%' }}>
                            <Grid item sx={{ height: { lg: 'auto', md: 'auto', sm: 'auto', xs: 'auto' }, width: { lg: '45%', md: '100%', sm: '100%', xs: '100%' }, padding: '30px', backgroundColor: 'black', overflow: 'auto', borderRadius: '7px', '@media (max-width:1136px)': { width: '100%', height: 'auto' } }}>
                                <Grid container gap={2} p={2} sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Grid item>
                                        <Typography variant='h6' sx={{ fontWeight: 'bold', }}>
                                            Your complaint type
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <FormControl sx={{ backgroundColor: 'white', width: '100%' }}>
                                            <Select
                                                value={age}
                                                onChange={handleChange}
                                                displayEmpty
                                                size="small"
                                                inputProps={{ 'aria-label': 'Without label' }}
                                                sx={{}}
                                            >
                                                <MenuItem value="">
                                                    <em>Electric</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Wash Rooms</MenuItem>
                                                <MenuItem value={20}>Cleaning</MenuItem>
                                                <MenuItem value={30}>Mess</MenuItem>
                                                <MenuItem value={30}>Others</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item >
                                        <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Your Complaint Title</Typography>
                                    </Grid>
                                    <Grid item sx={{}}>
                                        <TextField
                                            id="filled-basic"
                                            label="Title"
                                            variant="filled"
                                            size="small"
                                            fullWidth
                                            sx={{ backgroundColor: 'white', borderRadius: '4px' }}
                                        />
                                    </Grid>
                                    <Grid item >
                                        <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Your Complaint description</Typography>
                                    </Grid>
                                    <Grid item >
                                        <TextField
                                            id="filled-basic"
                                            label="Details of complaint..."
                                            variant="filled"
                                            fullWidth
                                            size="small"
                                            multiline
                                            sx={{ backgroundColor: 'white', borderRadius: '4px' }}
                                        />
                                    </Grid>
                                    <Grid item sx={{}}>
                                        <Button variant="contained" fullWidth sx={{ height: '50px', marginTop: '10px' }}>Make complaint</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item sx={{ height: { lg: 'auto', md: 'auto', sm: 'auto', xs: 'auto' }, width: { lg: '45%', md: '100%', sm: '100%', xs: '100%' }, padding: '30px', backgroundColor: 'black', borderRadius: '7px' }}>
                                <Grid container gap={2} p={2} sx={{ display: 'flex', flexDirection: 'column', gap: '30px', '@media (max-width:1136px)': { height: '100%', gap: '1.5px' } }}>
                                    <Grid item>
                                        <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
                                            Registered Complaints
                                        </Typography>
                                    </Grid>
                                    <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <Grid container sx={{ display: 'flex', flexDirection: 'column', }}>
                                            <Grid conatiner sx={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
                                                <Grid item >
                                                    <DoneIcon sx={{ fontSize: '30px' }} />
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant='body1' sx={{}}>AC</Typography>
                                                </Grid>
                                                <Grid container sx={{ display: 'flex', justifyContent: 'end' }}>
                                                    <Typography variant='body1' sx={{}}>Electric</Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid item sx={{ marginLeft: '50px', marginTop: '-20px', '@media (max-width:1136px)': { marginLeft: '40px', marginTop: '-10px' } }}>
                                                <Typography variant='caption' sx={{ color: 'gray', '@media (max-width:1136px)': { fontSize: '10px' } }}>May 20,2023</Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid item sx={{ margin: '30px', '@media (max-width:1136px)': { margin: '10px' } }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <Box sx={{ borderBottom: '1px solid', width: '100%', color: 'gray' }} />
                                            </Box>
                                        </Grid>
                                        <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
                                            <Grid conatiner sx={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
                                                <Grid item >
                                                    <DoneIcon sx={{ fontSize: '30px' }} />
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant='body1' sx={{}}>AC</Typography>
                                                </Grid>
                                                <Grid container sx={{ display: 'flex', justifyContent: 'end' }}>
                                                    <Typography variant='body1' sx={{}}>Electric</Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid item sx={{ marginLeft: '50px', marginTop: '-20px', '@media (max-width:1136px)': { marginLeft: '40px', marginTop: '-10px' } }}>
                                                <Typography variant='caption' sx={{ color: 'gray' }}>May 20,2023</Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid item sx={{ margin: '30px' }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <Box sx={{ borderBottom: '1px solid', width: '100%', color: 'gray' }} />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </div >
    );
}

export default Complaints;
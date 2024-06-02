import React from 'react';
import { Box, Grid, Toolbar, Typography, FormControl, MenuItem, Select, TextField, Button } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

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

                <Grid container sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '10px' }}>
                    <Grid item>
                        <Typography variant='h4' sx={{ fontWeight: 'bold', color: 'white' }}>
                            Complaints
                        </Typography>
                    </Grid>
                    <Grid item sx={{ width: '70%', height: '70%', '@media (max-width:1085px)': { height: '60%', width: '90%' } }}>
                        <Grid container sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'column', color: 'white', gap: '5%' }}>
                            <Grid item sx={{ height: { lg: '100%', md: 'auto', sm: 'auto', xs: 'auto' }, width: { lg: '45%', md: '100%', sm: '100%', xs: '100%' }, backgroundColor: 'black', borderRadius: '7px' }}>
                                <Grid container gap={2} p={2} sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Grid item>
                                        <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                                            Your complaint type
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <FormControl sx={{ backgroundColor: 'white', width: '100%' }}>
                                            <Select
                                                value={age}
                                                onChange={handleChange}
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
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
                                    <Grid item>
                                        <TextField
                                            id="filled-basic"
                                            label="Title"
                                            variant="filled"
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
                                            multiline
                                            sx={{ backgroundColor: 'white', borderRadius: '4px' }}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Button variant="contained" fullWidth sx={{ height: '50px', marginTop: '10px' }}>Make Suggestion</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item sx={{ height: { lg: '100%', md: 'auto', sm: 'auto', xs: 'auto' }, width: { lg: '45%', md: '100%', sm: '100%', xs: '100%' }, backgroundColor: 'black', borderRadius: '7px' }}>
                                <Grid container gap={2} p={2} sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Grid item>
                                        <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
                                            Registered Complaints
                                        </Typography>
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
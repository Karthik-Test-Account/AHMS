import React from 'react';
import { Box, Grid, Toolbar, Typography, TextField, Button } from '@mui/material';

const drawerWidth = 240;
const headerHeight = 50;

function Suggestions() {
    return (
        <Box component="main" sx={{
            backgroundColor: '#1B1918', height: `calc(100vh - ${headerHeight}px)`,
            padding: '0', marginTop: `${headerHeight}px`, '@media (min-width:600px)': { marginLeft: `${drawerWidth}px ` }
        }}>
            <Toolbar />
            <Box sx={{ width: '100%',height:'100%', backgroundColor: '#1B1918' }}>
                <Grid container gap={2} sx={{ width: '100%',height:'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '10px' }}>
                    <Grid item>
                        <Typography variant='h4' sx={{ fontWeight: 'bold', color: 'white' }}>
                            Suggestions
                        </Typography>
                    </Grid>
                    <Grid item sx={{ width: '40%', height: '60%', '@media (max-width:1085px)': { height: '60%', width: '90%' } }}>
                        <Grid container sx={{ width: '100%', height: '100%', backgroundColor: 'black', display: 'flex', flexDirection: 'column', color: 'white', padding: '20px', gap: '20px' }}>
                            <Grid item >
                                <Typography>Your Suggestion Title</Typography>
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="filled-basic"
                                    placeholder="Title"
                                    variant="outlined"
                                    fullWidth
                                    sx={{ backgroundColor: 'white', borderRadius: '4px' }}
                                />
                            </Grid>
                            <Grid item >
                                <Typography>Your Suggestion description</Typography>
                            </Grid>
                            <Grid item >
                                <TextField
                                    id="filled-basic"
                                    placeholder='Suggestions..'
                                    variant='outlined'
                                    fullWidth
                                    multiline
                                    sx={{ backgroundColor: 'white', borderRadius: '4px' }}
                                />
                            </Grid>
                            <Grid item>
                                <Button variant="contained" fullWidth sx={{p:'15px'}}>Make Suggestion</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box >
    );
}

export default Suggestions;
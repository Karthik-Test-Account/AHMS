import React from 'react';
import { Box, Grid, Toolbar, Typography, FormControl, MenuItem, Select, TextField, Button } from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DoneIcon from '@mui/icons-material/Done';
const drawerWidth = 240;
const headerHeight = 50;
function complaints() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (

        <div
            style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
        >
            <Box
                component="main"
                sx={{
                    minHeight: "100vh",
                    height: "auto",
                    backgroundColor: "#1B1918",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "20px 0",
                    marginTop: `${headerHeight}px`,
                    "@media (min-width:600px)": { marginLeft: `${drawerWidth}px` },
                }}
            >
                <Toolbar />
                <Grid
                    container
                    gap={2}
                    sx={{
                        width: "70%",
                        color: "white",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "start",
                    }}
                >
                    <Grid item>
                        <Typography variant="h3" fontWeight={600} align="center">
                            Complaints
                        </Typography>
                    </Grid>
                    <Grid item sx={{ width: "100%" }}>
                        <Grid
                            container
                            gap={1}
                            sx={{
                                width: "100%",
                                padding: "5px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-evenly",
                                flexDirection: 'row',

                                "@media (max-width:1100px)": { flexDirection: "column" },
                            }}
                        >
                            <Grid
                                item
                                sx={{
                                    backgroundColor: "#080808",
                                    width: "53%",
                                    minHeight: "50vh",
                                    padding: '10px',
                                    height: "auto",
                                    "@media (max-width:1100px)": { width: "100%" },
                                    borderRadius: "8px",
                                }}
                            >
                                <Grid
                                    container
                                    sx={{
                                        width: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "start",
                                        padding: "15px",
                                        height: "45vh",
                                        overflowY: "auto",
                                        flexWrap: "revert",
                                        "&::-webkit-scrollbar": { display: "none" },
                                    }}
                                >
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


                            <Grid
                                item
                                sx={{
                                    backgroundColor: "#080808",
                                    width: "45%",
                                    minHeight: "50vh",
                                    padding: '10px',
                                    height: "auto",
                                    "@media (max-width:1100px)": { width: "100%" },
                                    borderRadius: "8px",
                                }}
                            >
                                <Grid
                                    container
                                    sx={{
                                        width: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "start",
                                        padding: "15px",
                                        height: "45vh",
                                        overflowY: "auto",
                                        flexWrap: "revert",
                                        gap: '10px',
                                        "&::-webkit-scrollbar": { display: "none" },
                                    }}
                                >
                                    <Grid item>
                                        <Typography variant='h6' sx={{ fontWeight: 'bold', }}>
                                            Registered complaints
                                        </Typography>
                                    </Grid>
                                    <Grid container sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                        <Grid
                                            item
                                            sx={{
                                                width: "100%",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                                padding: "5px",
                                            }}
                                        >
                                            {/* start of box */}
                                            <Grid
                                                container
                                                sx={{
                                                    width: "60%",
                                                    display: "flex",
                                                    justifyContent: "start",
                                                    alignItems: "center",
                                                    gap: "10px",
                                                }}
                                            >
                                                <Grid item>
                                                    <DoneIcon />
                                                </Grid>
                                                <Grid item>
                                                    <Grid
                                                        container
                                                        sx={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            alignItems: "start",
                                                        }}
                                                    >
                                                        <Grid item>
                                                            <Typography sx={{ fontSize: "13px" }}>
                                                                AC
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item>
                                                            <Typography sx={{ fontSize: "13px" }}>
                                                                May 21, 2023
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid
                                                container
                                                sx={{
                                                    width: "calc(40% - 10px)",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "end",
                                                }}
                                            >
                                                <Grid item>
                                                    <Typography sx={{ fontSize: "14px" }}>
                                                        Rs. 9000
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            {/* end of box */}
                                        </Grid>
                                        <Grid
                                            item
                                            sx={{
                                                width: "100%",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                                padding: "5px",
                                            }}
                                        >
                                            {/* start of box */}
                                            <Grid
                                                container
                                                sx={{
                                                    width: "60%",
                                                    display: "flex",
                                                    justifyContent: "start",
                                                    alignItems: "center",
                                                    gap: "10px",
                                                }}
                                            >
                                                <Grid item>
                                                    <DoneIcon />
                                                </Grid>
                                                <Grid item>
                                                    <Grid
                                                        container
                                                        sx={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            alignItems: "start",
                                                        }}
                                                    >
                                                        <Grid item>
                                                            <Typography sx={{ fontSize: "13px" }}>
                                                                Water
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item>
                                                            <Typography sx={{ fontSize: "13px" }}>
                                                                May 21, 2023
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid
                                                container
                                                sx={{
                                                    width: "calc(40% - 10px)",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "end",
                                                }}
                                            >
                                                <Grid item>
                                                    <Typography sx={{ fontSize: "14px" }}>
                                                        Rs. 9000
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            {/* end of box */}
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

export default complaints
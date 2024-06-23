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
                <Grid container sx={{ display: 'flex', margin: '60px 20px 20px 10px', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '30px' }}>
                    <Grid item>
                        <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'white', '@media (max-width:1136px)': { fontSize: '20px' } }}>All Students</Typography>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" sx={{ height: '50px', width: '240px', borderRadius: '7.5px', '@media (max-width:400px)': { width: 'auto' } }}>Download List</Button>
                    </Grid>
                    <Grid
                        item
                        sx={{
                            backgroundColor: "#080808",
                            width: "53%",
                            minHeight: "40vh",
                            height: "auto",
                            padding: '10px',
                            "@media (max-width:1100px)": { width: "100%" },
                            borderRadius: "8px",
                        }}
                    >

                        <Grid item>
                            <Typography variant="h6" fontWeight={700} sx={{ color: 'white' }}>
                                All students
                            </Typography>
                        </Grid>
                        <Grid
                            container
                            sx={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "start",
                                padding: "15px",
                                height: "40vh",
                                overflowY: "auto",
                                flexWrap: "revert",
                                "&::-webkit-scrollbar": { display: "none" },
                            }}
                        >
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
                                        <PersonOutlineOutlinedIcon sx={{ color: 'white' }} />
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
                                                <Typography sx={{ fontSize: "13px", color: 'white' }}>
                                                    Sai teja
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography sx={{ fontSize: "13px", color: 'white' }}>
                                                    23015A0504| Room no:241
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
                                        gap: '10px'
                                    }}
                                >
                                    <Grid item sx={{ color: 'white' }} >

                                        <BorderColorOutlinedIcon />


                                    </Grid>
                                    <Grid item sx={{ color: 'white' }} >
                                        <DeleteOutlinedIcon />
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
                                        <PersonOutlineOutlinedIcon sx={{ color: 'white' }} />
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
                                                <Typography sx={{ fontSize: "13px", color: 'white' }}>
                                                    Sai teja
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography sx={{ fontSize: "13px", color: 'white' }}>
                                                    23015A0504| Room no:241
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
                                        gap: '10px'
                                    }}
                                >
                                    <Grid item sx={{ color: 'white' }} >

                                        <BorderColorOutlinedIcon />


                                    </Grid>
                                    <Grid item sx={{ color: 'white' }} >
                                        <DeleteOutlinedIcon />
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
                                        <PersonOutlineOutlinedIcon sx={{ color: 'white' }} />
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
                                                <Typography sx={{ fontSize: "13px", color: 'white' }}>
                                                    Sai teja
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography sx={{ fontSize: "13px", color: 'white' }}>
                                                    23015A0504| Room no:241
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
                                        gap: '10px'
                                    }}
                                >
                                    <Grid item sx={{ color: 'white' }} >

                                        <BorderColorOutlinedIcon />


                                    </Grid>
                                    <Grid item sx={{ color: 'white' }} >
                                        <DeleteOutlinedIcon />
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
                                        <PersonOutlineOutlinedIcon sx={{ color: 'white' }} />
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
                                                <Typography sx={{ fontSize: "13px", color: 'white' }}>
                                                    Sai teja
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography sx={{ fontSize: "13px", color: 'white' }}>
                                                    23015A0504| Room no:241
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
                                        gap: '10px'
                                    }}
                                >
                                    <Grid item sx={{ color: 'white' }} >

                                        <BorderColorOutlinedIcon />


                                    </Grid>
                                    <Grid item sx={{ color: 'white' }} >
                                        <DeleteOutlinedIcon />
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
                                        <PersonOutlineOutlinedIcon sx={{ color: 'white' }} />
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
                                                <Typography sx={{ fontSize: "13px", color: 'white' }}>
                                                    Sai teja
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography sx={{ fontSize: "13px", color: 'white' }}>
                                                    23015A0504| Room no:241
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
                                        gap: '10px'
                                    }}
                                >
                                    <Grid item sx={{ color: 'white' }} >

                                        <BorderColorOutlinedIcon />


                                    </Grid>
                                    <Grid item sx={{ color: 'white' }} >
                                        <DeleteOutlinedIcon />
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
                                        <PersonOutlineOutlinedIcon sx={{ color: 'white' }} />
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
                                                <Typography sx={{ fontSize: "13px", color: 'white' }}>
                                                    Sai teja
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography sx={{ fontSize: "13px", color: 'white' }}>
                                                    23015A0504| Room no:241
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
                                        gap: '10px'
                                    }}
                                >
                                    <Grid item sx={{ color: 'white' }} >

                                        <BorderColorOutlinedIcon />


                                    </Grid>
                                    <Grid item sx={{ color: 'white' }} >
                                        <DeleteOutlinedIcon />
                                    </Grid>
                                </Grid>
                                {/* end of box */}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default AdminAllStudents
import { Typography,Box,Toolbar, Grid,Button } from '@mui/material'
import React from 'react'
import PieChartComponent from '../PieChart/PieChart';

const headerHeight=50;
const drawerWidth=240;

const data = [
    { category: 'Mess off', value: 0},
    { category: 'Requested Mess', value: 2 },
    {category:'Mess Attended',value:8}
  ];

function MessOff() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Box component="main" sx={{
        minHeight: '100vh', height: 'auto', backgroundColor: '#1B1918', display: 'flex', justifyContent: 'center', alignItems:'start',
        padding: '0', marginTop: `${headerHeight}px`, '@media (min-width:600px)': { marginLeft: `${drawerWidth}px` }
      }}>
        <Toolbar />
        <Grid container gap={2} sx={{ margin:'60px 0 20px 0',width: '80%', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'start', padding: '10px' }}>
            <Grid item>
                <Typography variant='h3' sx={{fontWeight:'bold'}}>Mess Off</Typography>
            </Grid>
            <Grid item sx={{width:'100%'}}>
                <Grid container gap={1} sx={{width:'100%',display:'flex',justifyContent:'space-evenly',flexWrap:'wrap'}}>
                    <Grid item>
                        <Typography>Total Mess: 8</Typography>
                    </Grid>
                    <Grid item>
                        <Typography>Mess Off: 0</Typography>
                    </Grid>
                    <Grid item>
                        <Typography>Requests Sent: 2</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item sx={{width:'100%',marginTop:'15px'}}>
                <Grid container gap={2} sx={{width:'100%',display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
                    <Grid item sx={{borderRadius:'8px', width: '42%', minHeight: '40vh', height: 'auto','@media (max-width:1100px)': { width: '100%' }}}>
                    <Grid container gap={1} sx={{ width: '100%', height: '40vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Grid item sx={{ width: '100%', height: '100%' }}>
                            <PieChartComponent data={data} argumentField="category" valueField="value" height='300' width='300' labelVisible={false} paperColor='#1B1918'/>
                        </Grid>
                    </Grid>
                    </Grid>
                    <Grid item sx={{ backgroundColor: '#080808',borderRadius:'8px', width: '35%', minHeight: '40vh', height: 'auto','@media (max-width:1100px)': { width: '100%' }}}>
                        <Grid container sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'start', padding: '15px', height: '40vh', overflowY: 'auto', flexWrap: 'revert', '&::-webkit-scrollbar': { display: 'none' }}}>
                            <Grid item><Typography variant='h6' fontWeight={700}>All Requests</Typography></Grid>
                            <Grid item sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px' }}>
                                {/* start of box */}
                                <Grid container sx={{ width: '60%', display: 'flex', justifyContent: 'start', alignItems: 'center', gap: '10px' }}>
                                <Grid item>
                                    <Grid container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                                    <Grid item><Typography sx={{ fontSize: '13px' }}>APPROVED</Typography></Grid>
                                    <Grid item><Typography sx={{ fontSize: '13px',color:'#838383' }}>Jun 21 to Jun 24</Typography></Grid>
                                    </Grid>
                                </Grid>
                                </Grid>
                                <Grid container sx={{ width: 'calc(40% - 10px)', display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
                                <Grid item>
                                    <Typography sx={{ fontSize: '14px' }}>Jun 08</Typography>
                                </Grid>
                                </Grid>
                                {/* end of box */}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
    
            <Grid item sx={{width:'40%',backgroundColor:'#080808',height:'auto',padding:'15px',borderRadius:'7px','@media (max-width:600px)':{width:'100%'},'@media (max-width:1085px)':{width:'70%'},'@media (max-width:870px)':{width:'90%'}}}>
                <Grid container gap={1} sx={{width:"100%",height:'100%',display:'flex',flexDirection:'column',justifyContent:'start'}}>
                    <Grid item sx={{width:"100%",display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                        <Grid container gap={1} sx={{width:'40%',display:'flex',flexDirection:'column',alignItems:'start'}}>
                            <Grid item>
                                <Typography sx={{fontSize:'13px'}}>Your leaving date</Typography>
                            </Grid>
                            <Grid item sx={{width:'100%'}}>
                                <input type="date" style={{width:'100%',backgroundColor:'gray',padding:'5px 10px',borderRadius:'7px',color:'white',fontSize:'15px'}}/>
                            </Grid>
                        </Grid>
                        <Grid container gap={1} sx={{width:'40%',display:'flex',flexDirection:'column',alignItems:'start'}}>
                            <Grid item>
                                    <Typography sx={{fontSize:'13px'}}>Your return date</Typography>
                                </Grid>
                                <Grid item sx={{width:'100%'}}>
                                    <input type="date" style={{width:'100%',backgroundColor:'gray',padding:'5px 10px',borderRadius:'7px',color:'white',fontSize:'14px'}}/>
                                </Grid>
                            </Grid>
                    </Grid>
                    <Grid item sx={{width:'100%'}}>
                        <Button variant="contained" sx={{width:'100%'}}>Request Mess off</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default MessOff
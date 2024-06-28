import {  Typography ,Box, Grid} from '@mui/material'
import React from 'react'
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const headerHeight=50,drawerWidth=220;

import { axisClasses } from '@mui/x-charts/ChartsAxis';

import { BarChart } from '@mui/x-charts/BarChart';




function AdminMess() {
  
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Box component="main" sx={{
        minHeight: '100vh', height: 'auto', backgroundColor: '#1B1918', display: 'flex', justifyContent: 'center', alignItems:'start',
        padding: '0', marginTop: `${headerHeight}px`, '@media (min-width:600px)': { marginLeft: `${drawerWidth}px` }
      }}>
        
        

        
        <Grid item alignItems='center'sx={{width:'100%',display:'flex',flexDirection:'column'}}>


          
              <Grid item sx={{marginTop:'50px',marginRight:'30px'}}>
                <Typography variant='h4' align='center'color='whitesmoke' fontWeight='bold'fontSize='2.5rem' fontFamily='"Gill Sans", sans-serif'>Manage Mess</Typography>
              </Grid>
            
             <Grid item sx={{marginTop:'40px','@media (max-width:980px)': { width: '85%' }}}>
                <Grid container sx={{backgroundColor:"#bdbdbd",borderRadius:"10px"}}>
                


                               <BarChart
                                   xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'],backgroundColor:'white' }]}
                                 series={[{ data: [4, 3, 5] },]}
                                          width={500}
                                     height={300}
                                     backgroundColor="white"
                                     />
  



                </Grid>
             </Grid>
             <Grid item sx={{ width: '40%', height: 'auto',borderRadius:'7px', backgroundColor: 'black',marginTop:"30px","&::-webkit-scrollbar": { display: "none" }, '@media (max-width:980px)': { width: '85%' } }}>
            <Grid container sx={{ width: '100%',borderRadius:'7px', height: '100%', backgroundColor: '#090909', padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'start', gap: '10px',overflowY:'auto' }}>
              <Grid item>
                <Typography variant='h6' color='whitesmoke'>All Invoices</Typography>
              </Grid>
              <Grid item sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px' }}>
                <Grid container sx={{ width: '50%', display: 'flex', justifyContent: 'start', alignItems: 'center', gap: '10px' }}>
                  <Grid item>
                  <ConfirmationNumberOutlinedIcon fontSize='small' sx={{color:'whitesmoke'}}/>
                  </Grid>
                  <Grid item>
                    <Grid container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                      <Grid item><Typography sx={{ fontSize: '13px' ,color:'whitesmoke'}}>Abdul Ahad [Room:212]</Typography></Grid>
                      <Grid item><Typography sx={{ fontSize: '10px' ,color:'rgb(120,120,120)'}}>from:Jun 20 to:Jun 26</Typography></Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container gap={1} sx={{ width: 'calc(50% - 10px)', display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
                  <Grid item>
                    <CheckCircleOutlineIcon fontSize='small' sx={{color:'whitesmoke'}}/>
                  </Grid>
                  <Grid item>
                    <CancelOutlinedIcon fontSize='small' sx={{color:'whitesmoke'}}/>
                  </Grid>
                </Grid>
              </Grid>
                 <hr></hr>
              <Grid item sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px' }}>
                <Grid container sx={{ width: '50%', display: 'flex', justifyContent: 'start', alignItems: 'center', gap: '10px' }}>
                  <Grid item>
                    <ConfirmationNumberOutlinedIcon fontSize='small' sx={{color:'whitesmoke'}}/>
                  </Grid>
                  <Grid item>
                    <Grid container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                      <Grid item><Typography sx={{ fontSize: '13px' ,color:'whitesmoke'}}>Abdul Ahad [Room:212]</Typography></Grid>
                      <Grid item><Typography sx={{ fontSize: '10px' ,color:'rgb(120,120,120)'}}>from:Jun 20 to:Jun 26</Typography></Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container gap={1} sx={{ width: 'calc(50% - 10px)', display: 'flex', alignItems: 'center', justifyContent: 'end'}}>
                  <Grid item>
                    <CheckCircleOutlineIcon fontSize='small' sx={{color:'whitesmoke'}}/>
                  </Grid>
                  <Grid item>
                    <CancelOutlinedIcon fontSize='small' sx={{color:'whitesmoke'}}/>
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

export default AdminMess
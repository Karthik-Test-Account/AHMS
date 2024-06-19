import { height, width } from '@fortawesome/free-regular-svg-icons/faAddressBook';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';



import {  Typography ,Box, Grid,Button} from '@mui/material'
import React from 'react'
const headerHeight=50,drawerWidth=240;

function Adminvoice() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Box component="main" sx={{
        minHeight: '100vh', height: 'auto', backgroundColor: '#1B1918', display: 'flex', justifyContent: 'center', alignItems:'start',
        padding: '0', marginTop: `${headerHeight}px`, '@media (min-width:700px)': { marginLeft: `${drawerWidth}px` }
      }}>
            
                  <Grid container direction="column" alignItems="center"gap={1.5}sx={{display:"flex",flexDirection:"column",marginTop:"5rem",width:"80%"}}> 
                      <Grid item > I


                        <Typography variant='h4' align='center'color='whitesmoke' fontWeight='bold'fontSize='2.5rem' fontFamily='"Gill Sans", sans-serif'sx={{'@media (max-width:518px)': {fontSize:"1.5rem"}}}>Invoices</Typography>

                      </Grid>
                      <Grid item >
                              <Button variant="contained" size='medium'sx={{'@media (max-width:518px)': {size:"small"}}}>Generate Invoices</Button>
                      </Grid>
                      <Grid item sx={{ width: '60%', height: 'auto',borderRadius:'10px', backgroundColor: 'black', '@media (max-width:980px)': { width: '100%' } }}>
            <Grid container sx={{ width: '100%',borderRadius:'10px', height: '100%', backgroundColor: '#090909', padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'start', gap: '10px',overflowY:'auto' }}>
              <Grid item>
                <Typography variant='h6' color='whitesmoke'>All Invoices</Typography>
              </Grid>
              <Grid item sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px' }}>
                <Grid container sx={{ width: '55%', display: 'flex', justifyContent: 'start', alignItems: 'center', gap: '10px' }}>
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
                  
                </Grid>
              </Grid>
            </Grid>
          </Grid>
                    </Grid>
                      
         

                      
                












            
         

         
  
    
        
         


      </Box>
    </div>
    
  )
}

export default Adminvoice

import React from 'react';
import { Box, Grid, Toolbar, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ImageUpload from './ImageUpload';

const headerHeight = 50;
const drawerWidth = 240;

function Invoices() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Box component="main" sx={{
        minHeight: '100vh', height: 'auto', backgroundColor: '#1B1918', display: 'flex', justifyContent: 'center', alignItems: 'center',
        padding: '0', marginTop: `${headerHeight}px`, '@media (min-width:600px)': { marginLeft: `${drawerWidth}px` }
      }}>
        <Toolbar />
        <Grid container gap={2} sx={{ width: '80%', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'start', padding: '10px' }}>
          <Grid item>
            <Typography variant='h3' fontWeight={600} align='center'>Invoices</Typography>
          </Grid>
          <Grid item>
            <Typography sx={{ fontSize: '1.1rem' }}>All the invoices like Mess bills, Hostel fee will be shown here</Typography>
          </Grid>
          <Grid item sx={{ margin: '7px 0', '@media (max-width:900px)': { width: '100%' } }}>
            <Grid container sx={{ display: 'flex', alignItems: 'center', gap: '30px', flexWrap: 'wrap', '@media (max-width:900px)': { width: '100%', flexDirection: 'column', gap: '10px' } }}>
              <Grid item>
                <Grid container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Grid item>
                    <Typography sx={{ color: '#1976D2', fontWeight: 'bold', fontSize: '2rem' }}>1</Typography>
                  </Grid>
                  <Grid item>
                    <Typography paragraph sx={{ color: '#595755' }}>Total Invoices</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Grid item>
                    <Typography sx={{ color: '#1976D2', fontWeight: 'bold', fontSize: '2rem' }}>0</Typography>
                  </Grid>
                  <Grid item>
                    <Typography paragraph sx={{ color: '#595755' }}>Paid Invoices</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Grid item>
                    <Typography sx={{ color: '#1976D2', fontWeight: 'bold', fontSize: '2rem' }}>1</Typography>
                  </Grid>
                  <Grid item>
                    <Typography paragraph sx={{ color: '#595755' }}>Pending Invoices</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* START OF BOX */}
          <Grid item sx={{ width: '70%', height: 'auto', backgroundColor: 'black', '@media (max-width:980px)': { width: '100%' } }}>
            <Grid container sx={{ width: '100%', height: '100%', backgroundColor: '#090909', padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'start', gap: '10px',overflowY:'auto' }}>
              <Grid item>
                <Typography variant='h6'>Latest Invoices</Typography>
              </Grid>
              <Grid item sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px' }}>
                <Grid container sx={{ width: '50%', display: 'flex', justifyContent: 'start', alignItems: 'center', gap: '10px' }}>
                  <Grid item>
                    <AccessTimeIcon />
                  </Grid>
                  <Grid item>
                    <Grid container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                      <Grid item><Typography sx={{ fontSize: '13px' }}>Mess Fee</Typography></Grid>
                      <Grid item><Typography sx={{ fontSize: '13px' }}>May 21, 2023</Typography></Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container sx={{ width: 'calc(50% - 10px)', display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
                  <Grid item>
                    <Typography sx={{fontSize:'14px'}}>Rs. 9000</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* END OF BOX */}
          <Grid item>
            <ImageUpload/>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default Invoices;

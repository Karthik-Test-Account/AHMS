import { height } from '@fortawesome/free-regular-svg-icons/faAddressBook';
import { Typography,Box ,Toolbar,Grid} from '@mui/material'
import React from 'react'

const headerHeight=50,drawerWidth=240;
function AdminHome() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Box component="main" sx={{
        minHeight: '100vh', height: 'auto', backgroundColor: '#1B1918', display: 'flex', justifyContent: 'center', alignItems:'start',
        padding: '0', marginTop: `${headerHeight}px`, '@media (min-width:600px)': { marginLeft: `${drawerWidth}px` }
      }}>
        <Toolbar />
        <Grid container gap={2} sx={{ margin:'60px 0 20px 0',width: '80%', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'start', padding: '10px' ,backgroundColor:'purple'}}>
            <Grid item>
                <Typography variant='h3' sx={{fontWeight:'bold',textAlign:'center'}}>Welcome <span style={{color:'#1976D2'}}>Person</span></Typography>
            </Grid>
            <Grid item gap={1} sx={{width:'100%',display:'flex',justifyContent:'space-around',alignItems:'center','@media (max-width:900px)':{flexDirection:'column'}}}>
              <Grid container gap={1} sx={{width:'25%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:'#080808',padding:'10px',borderRadius:'8px','@media (max-width:900px)':{width:'100%'}}}>
                <Grid item><Typography variant='h4' sx={{color:'#1976D2',fontWeight:'bold'}}>200</Typography></Grid>
                <Grid item><Typography sx={{textAlign:'center'}}>Total Suggestions</Typography></Grid>
              </Grid>
              <Grid container gap={1} sx={{width:'25%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:'#080808',padding:'10px',borderRadius:'8px','@media (max-width:900px)':{width:'100%'}}}>
                <Grid item><Typography variant='h4' sx={{color:'#1976D2',fontWeight:'bold'}}>200</Typography></Grid>
                <Grid item><Typography sx={{textAlign:'center'}}>Total Suggestions</Typography></Grid>
              </Grid>
              <Grid container gap={1} sx={{width:'25%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:'#080808',padding:'10px',borderRadius:'8px','@media (max-width:900px)':{width:'100%'}}}>
                <Grid item><Typography variant='h4' sx={{color:'#1976D2',fontWeight:'bold'}}>200</Typography></Grid>
                <Grid item><Typography sx={{textAlign:'center'}}>Total Suggestions</Typography></Grid>
              </Grid>
            </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default AdminHome
import React from "react"
import {Card, CardContent, Container, FormControlLabel, Grid, TextField, Typography,Checkbox, Button} from '@mui/material'
function App() {

  return (
    <>
      <div style={{display:'flex',alignItems:'center',height:'100vh',backgroundColor:'#101826'}}>
        <Container maxWidth='sm' style={{padding:'10px'}}>
          <Card sx={{backgroundColor:'#1D2936',color:'white'}}>
            <CardContent>
              <Grid container spacing={2} style={{display:'flex',flexDirection:'column'}}>
                <Grid item>
                  <Typography variant="h4" style={{fontWeight:'bold'}}>
                    Sign Up
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1" style={{fontWeight:'bolder',color:'slategray',fontSize:'14px'}}>
                    Please fill in this form to create an account!
                  </Typography>
                </Grid>
                <Grid item>
                  <Grid container style={{display:'flex',justifyContent:'space-between',alignItems:'center'}} spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField 
                      variant="outlined"
                      placeholder="First Name"
                      fullWidth
                      sx={{backgroundColor: '#374151',input:{color:'white'}}}
                      InputLabelProps={{style: { color: 'white' }}}
                      >
                      </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField 
                      variant="outlined"
                      placeholder="Last Name"
                      fullWidth
                      sx={{backgroundColor: '#374151',input:{color:'white'}}}
                      InputLabelProps={{style: { color: 'white' }}}
                      >
                      </TextField>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <TextField
                    placeholder="Email"
                    fullWidth
                    variant="outlined"
                    sx={{backgroundColor: '#374151',input:{color:'white'}}}
                    InputLabelProps={{style: { color: 'white' }}}
                  >
                  </TextField>
                </Grid>
                <Grid item>
                  <TextField
                    placeholder="Password"
                    fullWidth
                    variant="outlined"
                    sx={{backgroundColor: '#374151',input:{color:'white'}}}
                    InputLabelProps={{style: { color: 'white' }}}
                  >
                  </TextField>
                </Grid>
                <Grid item>
                  <TextField
                    placeholder="Confirm Password"
                    fullWidth
                    variant="outlined"
                    sx={{backgroundColor: '#374151',input:{color:'white'}}}
                    InputLabelProps={{style: { color: 'white' }}}
                  >
                  </TextField>
                </Grid>
                <Grid item>
                  <FormControlLabel 
                    control={<Checkbox  color="primary"/>}  
                    label="Remember me" 
                  />
                </Grid>
                <Grid item>
                  <Grid container style={{display:'flex',justifyContent:'space-between',alignItems:'center'}} spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Button variant="contained" fullWidth color="primary">
                      Sign Up
                      </Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Button variant="contained" fullWidth color="primary">
                        Sign in with Google
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Container>
      </div>
    </>
  )
}

export default App;
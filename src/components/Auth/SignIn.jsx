
import {
    TextField,
    Button,
    Grid,
    Typography,
    Container,
    Checkbox,
    FormControlLabel,
    Link,
    Card,
    CardContent,
  } from "@mui/material";
  import { useState } from "react";
  import { NavLink } from "react-router-dom";
  
  const SignIn = (props) => {
    const [inputs, setInput] = useState({
      email: "",
      password: "",
    });
    const handleChange = (e) => {
      setInput((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }))
    };
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(inputs)
  }
    return (
      <>
        <div
          style={{
            display: "flex",
            height: "100vh",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor:'#101826'
          }}
        >
          <Container maxWidth="xs" sx={{}}>
         
              <Card sx={{backgroundColor:'#1D2936',color:'white'}}>
                <CardContent>
                  <Grid
                    container
                    spacing={2}
                    sx={{ display: "flex", flexDirection: "column"}}
                  >
                    <Grid item>
                      <Typography variant="h5" align="center">
                        Sign in to your account {props.title}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="Enter Email Address"
                        type="email"
                        value={inputs.email}
                        name="email"
                        onChange={handleChange}
                        sx={{
                          backgroundColor: '#374151',
                          input:{color:'white'},
                        }}
                        InputLabelProps={{
                          style: { color: 'white' },
                        }}
                      ></TextField>
                    </Grid>
                    <Grid item>
                      <TextField
                        variant="outlined"
                        placeholder="Enter Password"
                        type="password"
                        name="password"
                        value={inputs.password}
                        fullWidth
                        onChange={handleChange}
                        sx={{
                          backgroundColor: '#374151',
                          input:{color:'white'},
                        }}
                        InputLabelProps={{
                          style: { color: 'white' },
                        }}
                      ></TextField>
                    </Grid>
                    <Grid item>
                      <FormControlLabel
                        label="Remember me"
                        control={<Checkbox value="" color="primary" />}
                      />
                    </Grid>
                    <Grid item>
                      <Button variant="contained" fullWidth onClick={handleSubmit} >
                        Sign in
                      </Button>
                    </Grid>
                    <Grid item>
                      <Grid
                        container
                        sx={{ display: "flex", justifyContent: "space-between" }}
                        spacing={2}
                      >
                        <Grid item>
                          <Link href="#" variant="body2">
                            Forgot Password?
                          </Link>
                        </Grid>
                        <Grid item>
                          <NavLink to="/signup" variant="body2" style={{color:'#1976D2'}}>
                            Don`t have an account? Sign up
                          </NavLink>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
   
                </CardContent>
              </Card>
          </Container>
        </div>
      </>
    );
  };
  export default SignIn;
  
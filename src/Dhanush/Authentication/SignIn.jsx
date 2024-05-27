
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
  
  const SignIn = () => {
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
            height: "100%",
            // alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Container maxWidth="xs" sx={{ }}>
         
              <Card>
                <CardContent>
     
                  <Grid
                    container
                    spacing={2}
                    sx={{ display: "flex", flexDirection: "column" }}
                  >
                    <Grid item>
                      <Typography variant="h4" align="center">
                        Sign in
                      </Typography>
                    </Grid>
                    <Grid item>
                      <TextField
                        fullWidth
                        variant="outlined"
                        label="Enter Email Address"
                        type="email"
                        value={inputs.email}
                        name="email"
                        // handle the form event
                        onChange={handleChange}
                      ></TextField>
                    </Grid>
                    <Grid item>
                      <TextField
                        variant="outlined"
                        label="Enter Password"
                        type="password"
                        name="password"
                        value={inputs.password}
                        fullWidth
                        onChange={handleChange}
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
                          <Link href="#" variant="body2">
                            Don`t have an account? Sign up
                          </Link>
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
  
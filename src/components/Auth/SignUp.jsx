import React,{useState} from "react";
import {Card,CardContent,Container,FormControlLabel,Grid,TextField,Typography,Checkbox,Button} from "@mui/material";
import { NavLink } from "react-router-dom";
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";
import {db} from '../../firebaseConfig'
import {doc,setDoc} from 'firebase/firestore'
function SignUp() {
  const [inputs, setInput] = useState({
    firstName:"",
    lastName:"",
    email: "",
    password: "",
    confirmPassword:"",
  });

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  };
  const handleSignUp= async (e)=>{
    e.preventDefault();
    if(inputs.firstName==='' || inputs.lastName==='' || inputs.password==="" || inputs.confirmPassword==="" || inputs.email===""){
      alert("fill all the details");
      return;
    }
    if(inputs.password!==inputs.confirmPassword){
      alert("Password not matching");return;
    }
    const auth = getAuth();
    try {
      const userCredential=await createUserWithEmailAndPassword(auth,inputs.email,inputs.password);
      const user= userCredential.user;
      //adding user to database
      await setDoc(doc(db,"students",user.uid),{
        firstName:inputs.firstName,
        lastName:inputs.lastName,
        email:inputs.email,
        password:inputs.password
        })
      alert("user created and stored in firestore");
      console.log(user);

    } catch (error) {
      alert(error.message);
    }
    setInput({firstName:'',lastName:'',email:'',password:'',confirmPassword:''})
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: "#101826",

        }}
      >
        <Container maxWidth="sm" sx={{ overflowY:"hidden",marginTop:"100px"}}>
          <Card
            sx={{
              backgroundColor: "#1D2936",
              color: "white",
              
            }}
          >
            <CardContent>
              <Grid
                container
                spacing={2}
                style={{ display: "flex", flexDirection: "column" ,}}
              >
                <Grid item>
                  <Typography variant="h4" style={{ fontWeight: "bold" }}>
                    Sign Up
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="body1"
                    style={{
                      fontWeight: "bolder",
                      color: "slategray",
                      fontSize: "14px",
                    }}
                  >
                    Please fill in this form to create an account!
                  </Typography>
                </Grid>
                <Grid item>
                  <Grid
                    container
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                    spacing={2}
                  >
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        placeholder="First Name"
                        name="firstName"
                        required
                        value={inputs.firstName}
                        onChange={handleChange}
                        fullWidth
                        sx={{
                          backgroundColor: "#374151",
                          input: { color: "white" },
                        }}
                        InputLabelProps={{ style: { color: "white" } }}
                      ></TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        placeholder="Last Name"
                        name="lastName"
                        required
                        onChange={handleChange}
                        value={inputs.lastName}
                        fullWidth
                        sx={{
                          backgroundColor: "#374151",
                          input: { color: "white" },
                        }}
                        InputLabelProps={{ style: { color: "white" } }}
                      ></TextField>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <TextField
                    placeholder="Email"
                    name="email"
                        onChange={handleChange}
                        value={inputs.email}
                    type="email"
                    required
                    fullWidth
                    variant="outlined"
                    sx={{
                      backgroundColor: "#374151",
                      input: { color: "white" },
                    }}
                    InputLabelProps={{ style: { color: "white" } }}
                  ></TextField>
                </Grid>
                <Grid item>
                  <TextField
                    placeholder="Password"
                    name="password"
                        onChange={handleChange}
                        value={inputs.password}
                    type="password"
                    fullWidth
                    required
                    variant="outlined"
                    sx={{
                        backgroundColor: "#374151",
                      input: { color: "white" },
                    }}
                    InputLabelProps={{ style: { color: "white" } }}
                  ></TextField>
                </Grid>
                <Grid item>
                  <TextField
                    placeholder="Confirm Password"
                    fullWidth
                    name="confirmPassword"
                    required
                    type="password"
                        onChange={handleChange}
                        value={inputs.confirmPassword}
                    variant="outlined"
                    sx={{
                      backgroundColor: "#374151",
                      input: { color: "white" },
                    }}
                    InputLabelProps={{ style: { color: "white" } }}
                  ></TextField>
                </Grid>
                <Grid item>
                  <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="Remember me"
                  />
                </Grid>
                <Grid item>
                  <Grid
                    container
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                    spacing={2}
                  >
                    <Grid item xs={12} sm={12}>
                      <Button variant="contained" fullWidth color="primary" onClick={handleSignUp}>
                        Sign Up
                      </Button>
                    </Grid>
                  </Grid>
                  <Grid item sx={{ marginTop: "10px" }}>
                    <NavLink
                      to="/login"
                      variant="body2"
                      style={{ color: "#1976D2" }}
                    >
                      Already have an account? Sign In
                    </NavLink>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Container>
      </div>
    </>
  );
}

export default SignUp;


import {TextField,Button,Grid,Typography,Container,Checkbox,FormControlLabel,Link,Card,CardContent} from "@mui/material";
import { useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";
import {getAuth,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup} from 'firebase/auth'
import {db} from '../../firebaseConfig'
import { collection, getDocs, query, where } from "firebase/firestore";

const SignIn = (props) => {
    const navigate=useNavigate();
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

    const handleSubmit= async (e)=>{
      e.preventDefault()
      if(inputs.email==='' || inputs.password===''){
        alert("fill all the details");
        return;
      }
      const auth=getAuth();
      try {
        const userCredential= await signInWithEmailAndPassword(auth,inputs.email,inputs.password);
        const user=userCredential.user;
        console.log("User UID:", user.uid);
        console.log("User mail:",user.email);
        const collectionName=props.title==="Manager"?"admins":"students";
        console.log(collectionName);
        const q=query(collection(db,collectionName),where("email","==",user.email));
        const querySnapShot=await getDocs(q);
        console.log(querySnapShot.size);
        if(!querySnapShot.empty){
          props.title==="Manager"?navigate("/admin"):navigate("/student");
        }else{
          alert("user not found");
        }
      } catch (err) {
        alert(err.message);
      }
      setInput({email:'',password:''})
  }
  const handleSingInWithGoogle=async ()=>{
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User UID:", user.uid);
      console.log("User email:", user.email);
      const collectionName = props.title === "Manager" ? "admins" : "students";
      const q = query(collection(db, collectionName), where("email", "==", user.email));
      const querySnapShot = await getDocs(q);
      console.log(querySnapShot.size);
      if (!querySnapShot.empty) {
        props.title === "Manager" ? navigate("/admin") : navigate("/student");
      } else {
        alert("User not found");
      }
    } catch (err) {
      alert(err.message);
    }
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
                      <Button variant="contained" fullWidth color="primary" onClick={handleSingInWithGoogle}>
                        Sign in with Google
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
  
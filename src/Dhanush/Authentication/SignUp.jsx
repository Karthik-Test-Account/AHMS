import {
  TextField,
  Button,
  Grid,
  Typography,
  Container,Box,
  Checkbox,
  FormControlLabel,
  Link,
  Card,
  CardContent,
} from "@mui/material";
import { Google } from "@mui/icons-material";
// import { maxHeight, minHeight } from "@mui/system";
const SignUp = () => {
  return (
    <>
      <Box

        sx={{
          display: "flex",
          position:"relative",
          justifyContent: "center",
          // marginTop:{lg:"100px",md:"50px",sm:"30px"},
          height:"100%"
        }}

      >
       
          <Card sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <CardContent>
              <Grid container spacing={2} >
                <Grid item  sm={12} xs={12}>
                  <Typography variant="h4" align="center">
                    Sign Up
                  </Typography>
                </Grid>
                <Grid item  sm={6} xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="Enter Full Name"
                  ></TextField>
                </Grid>
                <Grid item  sm={6} xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="Enter Email Address"
                  ></TextField>
                </Grid>
                <Grid item  sm={6} xs={12}>
                  <TextField
                    variant="outlined"
                    label="Enter Password"
                    fullWidth
                  ></TextField>
                </Grid>
                <Grid item  sm={6} xs={12}>
                  <TextField
                    variant="outlined"
                    label="Enter Password"
                    fullWidth
                  ></TextField>
                </Grid>
                <Grid item  sm={6} xs={12}>
                  <TextField
                    variant="outlined"
                    label="Enter Password"
                    fullWidth
                  ></TextField>
                </Grid>
                <Grid item  sm={6} xs={12}>
                  <TextField
                    variant="outlined"
                    label="Enter Password"
                    fullWidth
                  ></TextField>
                </Grid>

                <Grid item  sm={12} xs={12}>
                  <Grid
                    container
                    sx={{ display: "flex",alignItems:"center",justifyContent:"space-between" }}
                    spacing={2}
                  >
                    <Grid item>
                      <FormControlLabel
                        label="Remember me"
                        control={<Checkbox value="" color="primary" />}
                      />
                    </Grid>
                    <Grid item>
                      <Link href="#" variant="body2">
                        Forgot Password?
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
               
                <Grid item  sm={6} xs={12}>
                  <Button variant="contained" fullWidth>
                    Sign in
                  </Button>
                </Grid>
                <Grid item  sm={6} xs={12}>
                  <Button variant="contained" fullWidth>
                    <Google sx={{ paddingRight: "10px" }}></Google>
                    Sign in with Google
                  </Button>
                </Grid>
                <Grid item sx={{display:"flex",justifyContent:"center"}} md={12} sm={12} xs={12}>
                  <Link href="#" variant="body2">
                    Don`t have an account? Sign up
                  </Link>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        {/* </Container> */}
      </Box>
    </>
  );
};
export default SignUp;

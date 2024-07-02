import { Typography, Box, Toolbar, Grid, Button, TextField } from '@mui/material';
import { useState, useEffect } from 'react';
import { db } from "../../firebaseConfig";
import { collection, getDoc, doc, setDoc } from 'firebase/firestore';
import { getAuth, setPersistence, browserLocalPersistence, onAuthStateChanged } from 'firebase/auth';

const headerHeight = 50;
const drawerWidth = 240;

function Settings() {
  const [inputs, setInputs] = useState({
    oldPassword: "",
    newPassword: "",
  });

  const [userMail, setUserMail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  useEffect(() => {
    const auth = getAuth();

    // Set persistence
    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            const fetchUserData = async () => {
              const userDocRef = doc(db, 'students', user.uid);
              const userDoc = await getDoc(userDocRef);

              if (userDoc.exists()) {
                const userData = userDoc.data();
                setUserMail(user.email);
                setUserPassword(userData.password); // Assuming 'password' field exists in user document
              } else {
                console.log("No such document!");
              }
            };

            fetchUserData();
          } else {
            console.log("No user is signed in.");
          }
        });
      })
      .catch((error) => {
        console.error("Error setting persistence:", error);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputs.newPassword === "" || inputs.oldPassword === "") {
      alert("Fill all the details");
    } else if (userPassword === inputs.oldPassword) {
      try {
        const auth = getAuth();
        const user = auth.currentUser;
        if (user) {
          const userDocRef = doc(db, 'students', user.uid);
          await setDoc(userDocRef, { password: inputs.newPassword }, { merge: true });
          alert("Password updated successfully");
          setInputs({
            oldPassword: "",
            newPassword: "",
          });
        }
      } catch (error) {
        console.error("Error updating password:", error);
        alert("Failed to update password");
      }
    } else {
      alert("Old password is incorrect");
    }
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Box component="main" sx={{
        minHeight: '100vh', height: 'auto', backgroundColor: '#1B1918', display: 'flex', justifyContent: 'center', alignItems: 'start',
        padding: '0', marginTop: `${headerHeight}px`, '@media (min-width:600px)': { marginLeft: `${drawerWidth}px` }
      }}>
        <Toolbar />
        <Grid container gap={2} sx={{ margin: '90px 0 20px 0', width: '80%', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'start', padding: '10px' }}>
          <Grid item>
            <Typography variant='h3' sx={{ fontWeight: 'bold' }}>Settings</Typography>
          </Grid>
          <Grid item sx={{ width: '54%', backgroundColor: '#090909', borderRadius: '8px', "@media (max-width:900px)": { width: "80%" }, "@media (max-width:700px)": { width: "100%" } }}>
            <Grid container gap={3} sx={{ padding: '15px', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'start' }}>
              <Grid item>
                <Typography variant='h5' sx={{ fontWeight: 'bold' }}>Change Password</Typography>
              </Grid>
              <Grid item sx={{ width: '100%' }}>
                <Grid container gap={1} sx={{ width: '100%' }}>
                  <Grid item>
                    <Typography sx={{ fontSize: '0.9rem' }}>Your Old Password</Typography>
                  </Grid>
                  <Grid item sx={{ width: '100%' }}>
                    <TextField
                      fullWidth
                      label="Old Password"
                      name="oldPassword"
                      type="password"
                      value={inputs.oldPassword}
                      onChange={handleChange}
                      sx={{ backgroundColor: '#394051', color: 'white' }}
                    />
                  </Grid>
                  <Grid item>
                    <Typography sx={{ fontSize: '0.9rem' }}>Your New Password</Typography>
                  </Grid>
                  <Grid item sx={{ width: '100%' }}>
                    <TextField
                      fullWidth
                      label="New Password"
                      name="newPassword"
                      type="password"
                      value={inputs.newPassword}
                      onChange={handleChange}
                      sx={{ backgroundColor: '#394051', color: 'white' }}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ width: '100%' }}>
                <Button variant="contained" sx={{ width: '100%' }} onClick={handleSubmit}>Change Password</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Settings;

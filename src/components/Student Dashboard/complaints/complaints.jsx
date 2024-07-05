import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Toolbar,
  Typography,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Button,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import { getAuth } from "firebase/auth";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { v4 as uuidv4 } from "uuid";
import Complaintstext from "../../Admin Dashboard/AdminComplaints/Complaintstext";
import Admincomplaints from "../../Admin Dashboard/AdminComplaints/AdminComplaints";
import NotificationSnackbar from "../../NotificationSnackbar/NotificationSnackbar";

const drawerWidth = 240;
const headerHeight = 50;

function Complaints() {
  const [userMail, setUserMail] = useState("");
  const [name, setName] = useState([]);
  const [lastName, setlastName] = useState("");
  const [firstName, setfirstName] = useState("");
  const [userComplaint, setUserComplaint] = useState([]);
  const [data, setData] = useState({ ctitle: "", cdescription: "" });
  const [check, setCheck] = useState("Electric"); // Default value for complaint type
  const [currentDateTime, setCurrentDateTime] = useState("");
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserMail(user.email);
      } else {
        alert("No user is signed in.");
        setUserMail("");
      }
    });

    return () => unsubscribe(); // Clean up the listener
  }, []);

  useEffect(() => {
    if (userMail) {
      fetchUserComplaints();
    }
  }, [userMail]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentDateTime(now.toLocaleString()); // Update current date/time every second
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const fetchUserComplaints = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "complaints"));
      const documents = [];
      querySnapshot.forEach((doc) => {
        if (doc.data().userEmail === userMail) {
          documents.push({
            id: doc.id,
            ...doc.data(),
          });
        }
      });
      setUserComplaint(documents);
    } catch (error) {
      console.error("Error fetching documents: ", error);
    }
  };
  useEffect(() => {
    const fetchUsernames = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "students"));
        const documents = [];
        querySnapshot.forEach((doc) => {
          if (doc.data().email === userMail) {
            documents.push({
              id: doc.id,
              ...doc.data(),
            });
          }
        });
        setName(documents);
        console.log(documents);
        documents.map((cur) => {
          setfirstName(cur.firstName);
          setlastName(cur.lastName);
          console.log(firstName);
        }); // Update state with fetched documents
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };

    if (userMail) {
      fetchUsernames();
    }
  }, [userMail]);
  //console.log(name)
  const handleChange = (event) => {
    setCheck(event.target.value); // Update complaint type (check state)
  };

  const handlerChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();

    if (data.ctitle.trim() === "" || data.cdescription.trim() === "") {
      setSnackbar({
        open: true,
        message: "Fill in the details first",
        severity: "warning",
      });
    } else {
      try {
        await setDoc(doc(db, "notifications", uuidv4()), {
          message: data.ctitle,
          notidifieddatetime: new Date().toLocaleString(),
          type: "complaints",
        });
        await setDoc(doc(db, "complaints", uuidv4()), {
          complaintdescription: data.cdescription,
          complainttitle: data.ctitle,
          complainttype: check, // Store selected complaint type
          userEmail: userMail,
          datetime: currentDateTime,
          fname: firstName,
          lname: lastName, // Include current date/time in document
        });
        setSnackbar({
          open: true,
          message: "Successfully submitted",
          severity: "success",
        });
        setData({ ctitle: "", cdescription: "" }); // Clear input fields
        fetchUserComplaints(); // Fetch updated complaints
      } catch (err) {
        setSnackbar({
          open: true,
          message: err.message,
          severity: "error",
        });
        console.error("Error:", err);
      }
    }
  };
  // Sort events array by dateTime property in descending order
  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Box
        component="main"
        sx={{
          minHeight: "100vh",
          height: "auto",
          backgroundColor: "#1B1918",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px 0",
          marginTop: `${headerHeight}px`,
          "@media (min-width:600px)": { marginLeft: `${drawerWidth}px` },
        }}
      >
        <Toolbar />
        <Grid
          container
          gap={2}
          sx={{
            width: "80%",
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <Grid item>
            <Typography variant="h3" fontWeight={600} align="center">
              Complaints
            </Typography>
          </Grid>
          <Grid item sx={{ width: "100%" }}>
            <Grid
              container
              gap={1}
              sx={{
                width: "100%",
                padding: "5px",
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-evenly",
                "@media (max-width:1100px)": { flexDirection: "column" },
              }}
            >
              <Grid
                item
                sx={{
                  backgroundColor: "#080808",
                  width: "40%",
                  minHeight: "45vh",
                  height: "auto",
                  padding: "20px",
                  "@media (max-width:1100px)": { width: "100%" },
                  borderRadius: "8px",
                }}
              >
                <Grid item>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Your complaint type
                  </Typography>
                </Grid>
                <Grid item>
                  <FormControl sx={{ backgroundColor: "white", width: "100%" }}>
                    <Select
                      value={check}
                      onChange={handleChange}
                      displayEmpty
                      size="small"
                      inputProps={{ "aria-label": "Without label" }}
                      sx={{}}
                    >
                      <MenuItem value="Electric">Electric</MenuItem>
                      <MenuItem value="Wash Rooms">Wash Rooms</MenuItem>
                      <MenuItem value="Cleaning">Cleaning</MenuItem>
                      <MenuItem value="Mess">Mess</MenuItem>
                      <MenuItem value="Others">Others</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Your Complaint Title
                  </Typography>
                </Grid>
                <Grid item sx={{}}>
                  <TextField
                    id="filled-basic"
                    label="Title"
                    variant="filled"
                    size="small"
                    name="ctitle"
                    value={data.ctitle}
                    onChange={handlerChange}
                    fullWidth
                    sx={{ backgroundColor: "white", borderRadius: "4px" }}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Your Complaint description
                  </Typography>
                </Grid>
                <Grid item>
                  <TextField
                    id="filled-basic"
                    label="Details of complaint..."
                    variant="filled"
                    fullWidth
                    name="cdescription"
                    value={data.cdescription}
                    onChange={handlerChange}
                    size="small"
                    multiline
                    sx={{ backgroundColor: "white", borderRadius: "4px" }}
                  />
                </Grid>
                <Grid item sx={{}}>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{ height: "50px", marginTop: "10px" }}
                    onClick={handleClick}
                  >
                    Make complaint
                  </Button>
                </Grid>
              </Grid>
              <Grid
                item
                sx={{
                  backgroundColor: "#080808",
                  width: "40%",
                  minHeight: "40vh",
                  padding: "20px",
                  height: "auto",
                  "@media (max-width:1100px)": { width: "100%" },
                  borderRadius: "8px",
                }}
              >
                <Grid item>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Registered complaints
                  </Typography>
                </Grid>
                <Grid
                  container
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "start",
                    padding: "15px",
                    height: "36vh",
                    overflowY: "auto",
                    flexWrap: "revert",
                    gap: "10px",
                    "&::-webkit-scrollbar": { display: "none" },
                  }}
                >
                  {userComplaint.map((currentrecord) => (
                    <Complaintstext
                      key={currentrecord.id}
                      title={currentrecord.complainttype}
                      dates={currentrecord.datetime}
                      lefticon={<ErrorOutlineRoundedIcon />}
                      righticon={<DoneIcon />}
                    />
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <NotificationSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        handleClose={handleSnackbarClose}
      />
    </div>
  );
}

export default Complaints;

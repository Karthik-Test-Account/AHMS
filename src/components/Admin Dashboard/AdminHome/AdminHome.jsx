import { Typography, Box, Toolbar, Grid, Button } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

import {
  browserLocalPersistence,
  getAuth,
  onAuthStateChanged,
  setPersistence,
} from "firebase/auth";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const headerHeight = 50,
  drawerWidth = 240;

function AdminHome() {
  const [data, setData] = useState([]);
  const [suggestionData, setSuggestionData] = useState([]);
  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "messoff"));
        const documents = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setData(documents);
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };

    fetchDocuments();
  }, []);

  //suggestions
  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "suggestions"));
        const documents = [];
        querySnapshot.forEach((doc) => {
          documents.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setSuggestionData(documents);
        // console.log(data)
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };

    fetchDocuments();
  }, []);
  // console.log(suggestionData)

  const [userName, setUserName] = useState("");
  useEffect(() => {
    const auth = getAuth();

    // Set persistence
    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            const fetchUserData = async () => {
              const userDocRef = doc(db, "admins", user.uid);
              const userDoc = await getDoc(userDocRef);

              if (userDoc.exists()) {
                const userData = userDoc.data();
                setUserName(userData.name);
                // console.log(userName);
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
  // console.log(suggestionData)
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
          alignItems: "start",
          padding: "0",
          marginTop: `${headerHeight}px`,
          "@media (min-width:600px)": { marginLeft: `${drawerWidth}px` },
        }}
      >
        <Toolbar />
        <Grid
          container
          gap={2}
          sx={{
            margin: "60px 0 20px 0",
            width: "80%",
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "start",
            padding: "10px",
          }}
        >
          <Grid item>
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold", textAlign: "center" }}
            >
              Welcome <span style={{ color: "#1976D2" }}>{userName}</span>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" sx={{ textAlign: "center" }}>
              Manager, Illuminati Hostel 1
            </Typography>
          </Grid>
          <Grid
            item
            gap={1}
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              "@media (max-width:900px)": { flexDirection: "column" },
            }}
          >
            <Grid
              container
              gap={1}
              sx={{
                width: "31%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#080808",
                padding: "10px",
                borderRadius: "8px",
                "@media (max-width:900px)": { width: "100%" },
              }}
            >
              <Grid item>
                <Typography
                  variant="h4"
                  sx={{ color: "#1976D2", fontWeight: "bold" }}
                >
                  200
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ textAlign: "center" }}>
                  Total Students
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              gap={1}
              sx={{
                width: "31%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#080808",
                padding: "10px",
                borderRadius: "8px",
                "@media (max-width:900px)": { width: "100%" },
              }}
            >
              <Grid item>
                <Typography
                  variant="h4"
                  sx={{ color: "#1976D2", fontWeight: "bold" }}
                >
                  200
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ textAlign: "center" }}>
                  Total Complaints
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              gap={1}
              sx={{
                width: "31%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#080808",
                padding: "10px",
                borderRadius: "8px",
                "@media (max-width:900px)": { width: "100%" },
              }}
            >
              <Grid item>
                <Typography
                  variant="h4"
                  sx={{ color: "#1976D2", fontWeight: "bold" }}
                >
                  {suggestionData.length}
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ textAlign: "center" }}>
                  Total Suggestions
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            gap={1}
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              "@media (max-width:900px)": { flexDirection: "column" },
            }}
          >
            {/* MESS code */}
            <Grid
              container
              gap={1}
              sx={{
                width: "40%",
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                backgroundColor: "#080808",
                padding: "10px",
                borderRadius: "8px",
                "@media (max-width:900px)": { width: "100%" },
              }}
            >
              <Grid item sx={{ width: "100%" }}>
                <Typography paragraph sx={{ fontWeight: "bold" }}>
                  New mess
                </Typography>
              </Grid>
              <Grid
                item
                sx={{ width: "100%", height: "100px", overflowY: "auto" }}
              >
                <Grid
                  container
                  gap={1}
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                  }}
                >
                  <Grid item>
                    <HelpOutlineIcon />
                  </Grid>
                  {data.map((cur) => (
                    <Grid
                      item
                      sx={{ display: "flex", flexDirection: "column" }}
                      key={cur.id}
                    >
                      <Grid item>
                        <Typography sx={{ fontSize: "13px" }}>
                          {cur.fname} {cur.lname} [Room:212]
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography sx={{ fontSize: "12px", color: "#606060" }}>
                          Jun 23 to Jun 26
                        </Typography>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid item sx={{ width: "100%" }}>
                <Button variant="contained" fullWidth>
                  <NavLink
                    to="/admin/mess"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      width: "100%",
                    }}
                  >
                    Manage mess
                  </NavLink>
                </Button>
              </Grid>
            </Grid>

            {/* Suggestions code */}
            <Grid
              container
              gap={1}
              sx={{
                width: "40%",
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                backgroundColor: "#080808",
                padding: "10px",
                borderRadius: "8px",
                "@media (max-width:900px)": { width: "100%" },
              }}
            >
              <Grid item sx={{ width: "100%" }}>
                <Typography paragraph sx={{ fontWeight: "bold" }}>
                  New Suggestions
                </Typography>
              </Grid>
              <Grid
                item
                sx={{
                  width: "100%",
                  height: "100px",
                  overflowY: "auto",
                  "&::-webkit-scrollbar": { display: "none" },
                }}
              >
                {suggestionData.map((cur) => (
                  <Grid
                    container
                    gap={1}
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                    }}
                    key={cur.id}
                  >
                    <Grid item>
                      <AddCircleOutlineIcon />
                    </Grid>

                    <Grid
                      item
                      sx={{ display: "flex", flexDirection: "column" }}
                    >
                      <Grid item>
                        <Typography sx={{ fontSize: "13px" }}>
                          {cur.title}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography sx={{ fontSize: "12px", color: "#606060" }}>
                          {cur.description}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
              <Grid item sx={{ width: "100%" }}>
                <Button variant="contained" fullWidth>
                  <NavLink
                    to="/admin/suggestions"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      width: "100%",
                    }}
                  >
                    Manage Suggestions
                  </NavLink>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default AdminHome;

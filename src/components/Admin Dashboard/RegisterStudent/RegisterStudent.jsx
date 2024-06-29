import React from "react";
import { Typography, Box, Toolbar, Grid, Button } from "@mui/material";
const headerHeight = 50;
const drawerWidth = 240;
import FormText from "./FormText";

function RegisterStudent() {
  return (
    <>
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
              width: "80%",
              color: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "start",
              padding: "10px",
              marginTop: "80px",
            }}
          >
            <Grid item>
              <Typography variant="h4" sx={{ color: "white" }}>
                Register Student
              </Typography>
            </Grid>
            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                backgroundColor: "black",
                padding: "20px",
                gap: "10px",
              }}
            >
              <Grid
                container
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <Grid item sx={{ color: "white", textAlign: "center" }}>
                  <Typography>Name :</Typography>
                  <FormText />
                </Grid>
                <Grid item sx={{ color: "white", textAlign: "center" }}>
                  <Typography>DOB :</Typography>
                  <input
                    type="date"
                    style={{
                      padding: "15px",
                      fontSize: "1rem",
                      backgroundColor: "gray",
                      color: "white",
                      width: "20ch",
                      borderRadius: "10px",
                    }}
                  />
                </Grid>
                <Grid item sx={{ textAlign: "center" }}>
                  <Typography>Contact :</Typography>
                  <FormText />
                </Grid>
              </Grid>
              <Grid item sx={{ textAlign: "center" }}>
                <Typography>Address :</Typography>
                <input
                  type="text"
                  style={{
                    width: "80%",
                    padding: "15px",
                    backgroundColor: "gray",
                    color: "white",
                    border: "none",
                    outline: "none",
                    fontSize: "1rem",
                    borderRadius: "10px",
                    // "@media(max-width:751px)": { width: "20ch" },
                  }}
                />
              </Grid>
              <Grid
                container
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <Grid item sx={{ color: "white", textAlign: "center" }}>
                  <Typography>Father Name :</Typography>
                  <FormText />
                </Grid>
                <Grid item sx={{ color: "white", textAlign: "center" }}>
                  <Typography>Room No :</Typography>
                  <FormText />
                </Grid>
                <Grid item sx={{ textAlign: "center" }}>
                  <Typography>Roll No :</Typography>
                  <FormText />
                </Grid>
              </Grid>
              <Grid
                container
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <Grid item sx={{ color: "white", textAlign: "center" }}>
                  <Typography>Course :</Typography>
                  <FormText />
                </Grid>
                <Grid item sx={{ color: "white", textAlign: "center" }}>
                  <Typography>Department :</Typography>
                  <FormText />
                </Grid>
                <Grid item sx={{ textAlign: "center" }}>
                  <Typography>Batch :</Typography>
                  <FormText />
                </Grid>
              </Grid>
              <Grid item sx={{ textAlign: "center" }}>
                <Typography>Password :</Typography>
                <input
                  type="password"
                  style={{
                    padding: "15px",
                    backgroundColor: "gray",
                    color: "white",
                    border: "none",
                    outline: "none",
                    fontSize: "1rem",
                    width: "20ch",
                    borderRadius: "10px",
                  }}
                />
              </Grid>
              <Grid
                item
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button sx={{ width: "100%" }} variant="contained">
                  Register Student
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}

export default RegisterStudent;

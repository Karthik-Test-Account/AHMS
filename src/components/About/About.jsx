import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import Carddata from "./Carddata";

function About() {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          minHeight: "80vh",
        }}
      >
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            marginTop: "120px",
            gap: "30px",
          }}
        >
          <Grid item>
            <Typography
              variant="h2"
              sx={{
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Meet Our Team!
            </Typography>
          </Grid>
          <Grid
            item
            sx={{
              width: "80%",
              padding: "20px",
              display: "flex",
            }}
          >
            <Grid
              spacing={3}
              container
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Carddata name="karthik ram" />
              <Carddata name="dhanush" />
              <Carddata name="sai teja" />
              <Carddata name="shiva sai" />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default About;

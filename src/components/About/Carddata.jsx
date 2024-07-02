import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import profile from "../../assets/profile.jpeg";
function Carddata() {
  return (
    <>
      <Grid
        item
        xs={12}
        sm={6}
        md={3}
        lg={3}
        xl={3}
        sx={{ width: "18%", "@media(max-width:898px)": {} }}
      >
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            height: "100%",
            backgroundColor: "#101826",
            textAlign: "center",
            gap: "10px",
            padding: "20px",
          }}
        >
          <Grid item sx={{ width: "100%", padding: "15px" }}>
            <img
              src={profile}
              alt="img"
              style={{ width: "100%", borderRadius: "50%" }}
            />
          </Grid>
          <Grid item>
            <Typography
              sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              karthik ram
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              sx={{
                color: "white",
                fontSize: "15px",
              }}
            >
              front-end and back-end developer
            </Typography>
          </Grid>
          <Grid item>
            <Button
              sx={{ width: "100%", borderRadius: "10px" }}
              variant="contained"
            >
              View profile
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Carddata;

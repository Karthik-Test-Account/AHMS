import React from "react";
import { Typography, Box, Toolbar, Grid } from "@mui/material";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
function Complaintstext(props) {
  return (
    <>
      <Grid
        item
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Grid
          container
          sx={{
            width: "50%",
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Grid item sx={{ color: "white" }}>
            {props.lefticon}
          </Grid>
          <Grid item>
            <Grid
              container
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}
            >
              <Grid item>
                <Typography sx={{ fontSize: "15px", color: "white" }}>
                  {props.title}
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ fontSize: "10px", color: "white" }}>
                  {props.dates}
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ fontSize: "12px", color: "white" }}>
                  {props.name}
                </Typography>
              </Grid>
              
              <Grid item>
                <Typography sx={{ fontSize: "12px", color: "white" }}>
                  {props.datess}
                </Typography>
              </Grid>
              
             
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            width: "calc(50% - 10px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
          }}
        >
          <Grid item sx={{ color: "white" }}>
            {props.righticon}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Complaintstext;
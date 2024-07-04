import React from "react";
import { Typography, Box, Toolbar, Grid } from "@mui/material";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
function AdminAttendanceText(props) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "10px",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <PermIdentityOutlinedIcon
            sx={{ color: "white", marginRight: "10px" }}
          />
          <div>
            <Typography sx={{ fontSize: "12px", color: "white" }}>
              {props.name}
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "white" }}>
              502502 | Room:{props.roomNumber}
            </Typography>
          </div>
        </Box>
        {/* right box */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "5px",
            alignItems: "center",
          }}
        >
          <Grid item>
            <CheckCircleOutlineRoundedIcon />
          </Grid>
          <Grid item>
            <CancelOutlinedIcon />
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default AdminAttendanceText;

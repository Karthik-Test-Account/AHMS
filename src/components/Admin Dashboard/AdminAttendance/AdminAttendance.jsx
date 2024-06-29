import React from "react";
import { Typography, Box, Toolbar, Grid } from "@mui/material";
import PieChartComponent from "../../PieChart/PieChart";

import AdminAttendanceText from "./AdminAttendanceText";
const data = [
  { category: "Absent", value: 2 },
  { category: "Present", value: 3 },
];

const headerHeight = 50;
const drawerWidth = 240;

function AdminAttendance() {
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
              width: "90%",
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
              <Typography
                variant="h4"
                sx={{ color: "white", fontWeight: "bold" }}
              >
                Attendance
              </Typography>
            </Grid>
            <Grid item sx={{}}>
              <Typography
                variant="h6"
                sx={{ fontSize: "17px", color: "white" }}
              >
                Date: June 28, 2024
              </Typography>
            </Grid>
            <Grid
              container
              sx={{
                width: "100%",
                gap: "10px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                "@media(max-width:1000px)": {
                  flexDirection: "column",
                  alignItems: "center",
                },
              }}
            >
              <Grid item sx={{ width: "40%" }}>
                <PieChartComponent
                  data={data}
                  argumentField="category"
                  valueField="value"
                  height="250"
                  width="250"
                  labelVisible={false}
                  paperColor="#1B1918"
                />
              </Grid>
              <Grid
                item
                sx={{
                  width: "40%",
                  backgroundColor: "black",
                  padding: "20px",

                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "10px",
                  "@media(max-width:1000px)": { width: "80%" },
                  "@media(max-width:600px)": { width: "100%" },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontSize: "20px", color: "white" }}
                >
                  Unmarked students
                </Typography>
                {/* item container start */}
                <Grid
                  container
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    height: "30vh",
                    overflowY: "auto",
                    "&::-webkit-scrollbar": { display: "none" },
                  }}
                >
                  <AdminAttendanceText />
                  <AdminAttendanceText />
                  <AdminAttendanceText />
                  <AdminAttendanceText />
                  <AdminAttendanceText />
                  <AdminAttendanceText />
                  <AdminAttendanceText />
                  <AdminAttendanceText />
                  <AdminAttendanceText />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}

export default AdminAttendance;

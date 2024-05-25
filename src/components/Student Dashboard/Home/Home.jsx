import React from "react";
import { Box, Grid, Toolbar, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PieChartComponent from "../../PieChart/PieChart";

const drawerWidth = 240;
const headerHeight = 50;

const data = [
  { category: "Days off", value: 35 },
  { category: "Days present", value: 65 },
];

function Home() {
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
            width: "70%",
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <Grid item>
            <Typography variant="h3" fontWeight={600} align="center">
              Welcome <span style={{ color: "#1976D2" }}>PERSON</span>
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
                justifyContent: "space-evenly",
                "@media (max-width:1100px)": { flexDirection: "column" },
              }}
            >
              <Grid
                item
                sx={{
                  backgroundColor: "#080808",
                  width: "53%",
                  minHeight: "40vh",
                  height: "auto",
                  "@media (max-width:1100px)": { width: "100%" },
                  borderRadius: "8px",
                }}
              >
                <Grid
                  container
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "start",
                    padding: "15px",
                    height: "40vh",
                    overflowY: "auto",
                    flexWrap: "revert",
                    "&::-webkit-scrollbar": { display: "none" },
                  }}
                >
                  <Grid item>
                    <Typography variant="h6" fontWeight={700}>
                      Unpaid Invoices
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    sx={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "5px",
                    }}
                  >
                    {/* start of box */}
                    <Grid
                      container
                      sx={{
                        width: "60%",
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <Grid item>
                        <AccessTimeIcon />
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
                            <Typography sx={{ fontSize: "13px" }}>
                              Mess Fee
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography sx={{ fontSize: "13px" }}>
                              May 21, 2023
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      sx={{
                        width: "calc(40% - 10px)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "end",
                      }}
                    >
                      <Grid item>
                        <Typography sx={{ fontSize: "14px" }}>
                          Rs. 9000
                        </Typography>
                      </Grid>
                    </Grid>
                    {/* end of box */}
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                sx={{
                  backgroundColor: "#080808",
                  borderRadius: "8px",
                  width: "38%",
                  minHeight: "40vh",
                  height: "auto",
                  "@media (max-width:1100px)": { width: "100%" },
                }}
              >
                <Grid
                  container
                  gap={1}
                  sx={{
                    width: "100%",
                    height: "40vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Grid item sx={{ width: "100%", height: "100%" }}>
                    <PieChartComponent
                      data={data}
                      title="Attendance"
                      argumentField="category"
                      valueField="value"
                      height="220"
                      width="220"
                      labelVisible={true}
                      paperColor="#080808"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Home;

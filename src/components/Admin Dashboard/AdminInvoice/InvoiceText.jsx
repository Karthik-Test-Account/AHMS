// import React from 'react'
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {  Grid, Typography } from '@mui/material';
function InvoiceText() {
  return (
    <Grid
                item
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "6px",
                }}
              >
                <Grid
                  container
                  sx={{
                    width: "55%",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <Grid item>
                    <ConfirmationNumberOutlinedIcon
                      fontSize="small"
                      sx={{ color: "whitesmoke" }}
                    />
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
                        <Typography
                          sx={{ fontSize: "13px", color: "whitesmoke" }}
                        >
                          Abdul Ahad [Room:212]
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography
                          sx={{ fontSize: "10px", color: "rgb(120,120,120)" }}
                        >
                          from:Jun 20 to:Jun 26
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  container
                  gap={1}
                  sx={{
                    width: "calc(50% - 10px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "end",
                  }}
                >
                  <Grid item>
                    <CheckCircleOutlineIcon
                      fontSize="small"
                      sx={{ color: "whitesmoke" }}
                    />
                  </Grid>
                </Grid>
              </Grid>
  )
}

export default InvoiceText

import {
  height,
  width,
} from "@fortawesome/free-regular-svg-icons/faAddressBook";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
// import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

import { Typography, Box, Grid, Button } from "@mui/material";
import InvoiceText from "./InvoiceText";
// import React from "react";
const headerHeight = 50,
  drawerWidth = 240;

function AdminInvoice() {
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
          "@media (min-width:700px)": { marginLeft: `${drawerWidth}px` },
        }}
      >
        <Grid
          container
          direction="column"
          alignItems="center"
          gap={1.5}
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: "5rem",
            width: "80%",
          }}
        >
          <Grid item>
            {" "}
            I
            <Typography
              variant="h4"
              align="center"
              color="whitesmoke"
              fontWeight="bold"
              fontSize="2.5rem"
              fontFamily='"Gill Sans", sans-serif'
              sx={{ "@media (max-width:518px)": { fontSize: "1.5rem" } }}
            >
              Invoices
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              size="medium"
              sx={{ "@media (max-width:518px)": { size: "small" } }}
            >
              Generate Invoices
            </Button>
          </Grid>
          <Grid
            item
            sx={{
              width: "60%",
              height: "auto",
              borderRadius: "10px",
              backgroundColor: "black",
              "@media (max-width:980px)": { width: "100%" },
            }}
          >
            <Grid
              container
              sx={{
                width: "100%",
                borderRadius: "10px",
                height: "100%",
                backgroundColor: "#090909",
                padding: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                gap: "10px",
                overflowY: "auto",
              }}
            >
              <Grid item>
                <Typography variant="h6" color="whitesmoke">
                  All Invoices
                </Typography>
              </Grid>
              <InvoiceText name="Dhanush" roomNumber="123"></InvoiceText>
              
              
              
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default AdminInvoice;

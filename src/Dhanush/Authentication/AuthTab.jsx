import { Box } from "@mui/system";
import React, { useState } from "react";
import { TabContext } from "@mui/lab";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import  {Tab}  from "@mui/material";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function AuthTab() {
    const [value, setValue] = useState("1");
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
        <Box
        sx={{
          display: "flex",
          position:"relative",
          justifyContent: "center",
          marginTop:{lg:"100px",md:"50px",sm:"30px"},
          height:"100%",
          
        }}>
      <Box sx={{  typography: 'body1' ,width:"100%",maxWidth:"600px"}}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example" centered sx={{border:"none"}}>
              <Tab label="Item One" value="1" />
              <Tab label="Item Two" value="2" />
              
            </TabList>
          </Box>
          <TabPanel value="1"><SignIn></SignIn></TabPanel>
          <TabPanel value="2"><SignUp></SignUp></TabPanel>
          
        </TabContext>
      </Box>
      </Box>
    );
  }
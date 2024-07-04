import React, { useEffect, useState } from "react";
import { Typography, Box, Toolbar, Grid, Button } from "@mui/material";
import {json2csv} from 'json-2-csv';
import PieChartComponent from "../../PieChart/PieChart";
import AdminAttendanceText from "./AdminAttendanceText";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

const data = [
  { category: "Absent", value: 2 },
  { category: "Present", value: 3 },
];

const headerHeight = 50;
const drawerWidth = 240;

function AdminAttendance() {
  const [studentDetails, setStudentDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "students"));
        const documents = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setStudentDetails(documents);
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };

    fetchDocuments();
  }, []);

  const downloadCSV = () => {
    const filteredDetails = studentDetails.map(({ firstName, lastName, email, roomNumber }) => ({
      firstName,
      lastName,
      email,
      roomNumber
    }));
    const fields = ['firstName', 'lastName', 'email', 'roomNumber'];
    const opts = { fields };
    try {
      const csv = json2csv(filteredDetails, opts);
      
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement("a");
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", "student_list.csv");
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error("Error converting to CSV: ", err);
    }
  };

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
            <Grid item>
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
                
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    height: "30vh",
                    overflowY: "auto",
                    "&::-webkit-scrollbar": { display: "none" },
                  }}
                >
                  {studentDetails.map((details, index) => (
                    <AdminAttendanceText
                      key={index}
                      name={details.firstName + " " + details.lastName}
                      roomNumber={details.roomNumber}
                    />
                  ))}
                </Box>
              </Grid>
            </Grid>
            <Grid item>
              <Button 
                variant="contained" 
                color="primary" 
                onClick={downloadCSV}
                sx={{ marginTop: "20px" }}
              >
                Download Student List
              </Button>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}

export default AdminAttendance;

import { Typography, Box, Grid, Toolbar, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import AdminAttendanceText from "../AdminAttendance/AdminAttendanceText";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { json2csv } from "json-2-csv";
const headerHeight = 50;
const drawerWidth = 240;

function AdminAllStudents() {
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
    const filteredDetails = studentDetails.map(
      ({ firstName, lastName, email, roomNumber }) => ({
        firstName,
        lastName,
        email,
        roomNumber,
      })
    );
    const fields = ["firstName", "lastName", "email", "roomNumber"];
    const opts = { fields };
    try {
      const csv = json2csv(filteredDetails, opts);

      const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
      const link = document.createElement("a");
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", "student_list.csv");
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error("Error converting to CSV: ", err);
    }
  };
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
          "@media (min-width:600px)": { marginLeft: `${drawerWidth}px` },
        }}
      >
        <Toolbar />
        <Grid
          container
          sx={{
            display: "flex",
            margin: "60px 20px 20px 10px",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          <Grid item>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                color: "white",
                "@media (max-width:1136px)": { fontSize: "20px" },
              }}
            >
              All Students
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              sx={{
                height: "50px",
                width: "240px",
                borderRadius: "7.5px",
                "@media (max-width:400px)": { width: "auto" },
              }}
              onClick={downloadCSV}
            >
              Download List
            </Button>
          </Grid>
          <Grid
            item
            sx={{
              backgroundColor: "#080808",
              width: "53%",
              minHeight: "40vh",
              height: "auto",
              padding: "10px",
              "@media (max-width:1100px)": { width: "100%" },
              borderRadius: "8px",
            }}
          >
            <Grid item>
              <Typography variant="h6" fontWeight={700} sx={{ color: "white" }}>
                All students
              </Typography>
            </Grid>
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
              {studentDetails.map((details, index) => (
                <AdminAttendanceText
                  key={index}
                  name={details.firstName + " " + details.lastName}
                  email={details.email}
                  roomNumber={details.roomNumber}
                />
              ))}

              <Grid></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default AdminAllStudents;

import { Typography, Box, Grid } from "@mui/material";
import { React, useState, useEffect } from "react";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { db } from "../../../firebaseConfig"; // Ensure correct import path
import { collection, getDocs, doc, deleteDoc, getDoc, setDoc} from "firebase/firestore"; // Ensure batch is imported

import { v4 as uuidv4 } from 'uuid';

const headerHeight = 50,
  drawerWidth = 220;

import { BarChart } from "@mui/x-charts/BarChart";

// Example usage:
const currentDate = new Date();
function dateToWords(date) {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return `${months[monthIndex]} ${day}, ${year}`;
} // Outputs: "June 29, 2024"

function AdminMess() {
  const [data, setData] = useState([]);
  const [rejectedStatus, setRejectedStatus] = useState(false);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "messoff"));
        const documents = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Sort documents by datetime in descending order
        // Example: documents.sort((a, b) => b.datetime - a.datetime);

        setData(documents);
        console.log(documents);
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };

    fetchDocuments();
  }, []);

  const handleDelete = async (complaintId) => {
    try {
      const documentRef = doc(db, 'messoff', complaintId);
      const docSnapshot = await getDoc(documentRef);

      if (docSnapshot.exists()) {
        const docData = docSnapshot.data();

        // Step 1: Fetch all documents in "request" collection
        const querySnapshot = await getDocs(collection(db, "request"));

        querySnapshot.forEach(async (doc) => {
          const requestData = doc.data();
          const c=doc.time1.getDate();
          if (requestData.usermail === docData.useremail && new Date().getDay()>c) {
            await deleteDoc(doc.ref);
          }
        });

        // Step 5: Set a new document in "request" collection
        await setDoc(doc(db, "request", uuidv4()), {
          status: "Approved",
          time: docData.leavedate,
          time1:docData.returndate,
          usermail: docData.useremail
        });

        // Step 6: Delete document from "messoff" collection
        await deleteDoc(documentRef);
        console.log('Approved and Document successfully deleted!');

        // Update state to reflect deletion
        setData(data.filter((complaint) => complaint.id !== complaintId));
      } else {
        console.error('Document does not exist!');
      }
    } catch (error) {
      console.error('Error removing document: ', error);
    }
  };

  const handleReject = async (complaintId) => {
    try {
      const documentRef = doc(db, 'messoff', complaintId);
      const docSnapshot = await getDoc(documentRef);

      if (docSnapshot.exists()) {
        const docData = docSnapshot.data();

        // Step 1: Fetch all documents in "request" collection
        const querySnapshot = await getDocs(collection(db, "request"));

      querySnapshot.forEach(async (doc) => {
        if(doc.usermail===docData.useremail){
        await deleteDoc(doc.ref);
        }
      });

        // Step 5: Set a new document in "request" collection
        await setDoc(doc(db, "request", uuidv4()), {
          
          status: "Rejected",
          time: docData.returndate,
          usermail: docData.useremail
        });

        // Step 6: Delete document from "messoff" collection
        await deleteDoc(documentRef);
        console.log('Approved and Document successfully deleted!');

        // Update state to reflect deletion
        setData(data.filter((complaint) => complaint.id !== complaintId));
      } else {
        console.error('Document does not exist!');
      }
    } catch (error) {
      console.error('Error removing document: ', error);
    }
    
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
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
        <Grid
          container
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Grid item sx={{ marginTop: "50px", marginRight: "30px" }}>
            <Typography
              variant="h4"
              align="center"
              color="whitesmoke"
              fontWeight="bold"
              fontSize="2.5rem"
              fontFamily='"Gill Sans", sans-serif'
            >
              Manage Mess
            </Typography>
          </Grid>

          <Grid
            item
            container
            sx={{
              width: "100%",
              marginTop: "40px",
              "@media (max-width:980px)": { width: "85%" },
            }}
            justifyContent="center"
          >
            <Grid
              item
              xs={12}
              sm={10}
              md={8}
              lg={6}
              sx={{
                width: "100%",
                maxWidth: "100%", // Adjust maximum width as needed
                backgroundColor: "#bdbdbd",
                borderRadius: "10px",
                padding: "10px",
                boxSizing: "border-box",
              }}
            >
              <BarChart
                series={[
                  { data: [35, 44, 24] },

                ]}
                height={290}
                xAxis={[{ data: ['Q1', 'Q2', 'Q3'], scaleType: 'band' }]}
                margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
              />
            </Grid>
          </Grid>

          <Grid
            item
            container
            sx={{
              width: "100%",
              maxWidth: "40%",
              height: "30vh",
              borderRadius: "7px",
              backgroundColor: "black",
              marginTop: "30px",
              "@media (max-width:980px)": { maxWidth: "85%" },
              overflowY: 'auto',
              '&::-webkit-scrollbar': { display: 'none' },
            }}
          >
            <Grid
              item
              container
              sx={{
                width: "100%",
                borderRadius: "7px",
                backgroundColor: "#090909",
                padding: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                gap: "10px",
               
              }}
            >
              <Typography variant="h6" color="whitesmoke" sx={{ paddingLeft: '10px' }}>
                All Invoices
              </Typography>
              {data.map((cur) => (
                <Grid
                  item
                  container
                  key={cur.id}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "6px",
                    width: "100%",
                  }}
                >
                  <Grid item sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <ConfirmationNumberOutlinedIcon fontSize="small" sx={{ color: "whitesmoke" }} />
                    <div>
                      <Typography sx={{ fontSize: "13px", color: "whitesmoke" }}>
                        {cur.fname} {cur.lname} [Room:212]
                      </Typography>
                      <Typography sx={{ fontSize: "11px", color: "rgb(120, 120, 120)" }}>
                        from: {dateToWords(new Date(cur.leavedate))} | to: {dateToWords(new Date(cur.returndate))}
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item sx={{ display: "flex", alignItems: "center", justifyContent: "end", gap: "10px" }}>
                    <CheckCircleOutlineIcon
                      fontSize="small"
                      sx={{ color: "whitesmoke", cursor: "pointer" }}
                      onClick={() => handleDelete(cur.id)}
                    />
                    <CancelOutlinedIcon
                      fontSize="small"
                      sx={{ color: "whitesmoke", cursor: "pointer" }}
                      onClick={() => handleReject(cur.id)}
                    />
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
      
    </div>
  );
}

export default AdminMess;

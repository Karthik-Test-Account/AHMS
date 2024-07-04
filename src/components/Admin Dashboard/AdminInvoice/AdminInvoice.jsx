import {
  collection,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { Typography, Box, Grid, Button } from "@mui/material";
import InvoiceText from "./InvoiceText";
import { useState, useEffect } from "react";

const headerHeight = 50,
  drawerWidth = 240;

function AdminInvoice() {
  const [data, setData] = useState([]);
  const [invoiceDetails, setInvoiceDetails] = useState([]);
  // const [image,setImage]= useState([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "invoices"));
        const documents = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Sort documents by datetime in descending order
        documents.sort((a, b) => new Date(a.datetime) - new Date(b.datetime));

        setData(documents);
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };

    fetchDocuments();
  }, []);

  useEffect(() => {
    const fetchStudentDetails = async () => {
      const results = [];
      // const imageRes=[];
      for (const details of data) {
        try {
          let imageId= details.imageId;
          let studentId = details.studentId;
          let docId = details.id;

          const docRef = doc(db, "students", studentId);
          // console.log(docId)
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            let name = `${docSnap.data().firstName} ${docSnap.data().lastName}`;
            results.push({ name, roomNumber: "123",imageId,docId});
            // imageRes.push(imageId); // Adjust roomNumber as needed
          } else {
            console.log("No such document!");
          }
          
        } catch (error) {
          console.error("Error getting document:", error);
        }
      }
      setInvoiceDetails(results);
      // setImage(imageRes);
    };

    if (data.length > 0) {
      fetchStudentDetails();
    }
  }, [data]);
  
  

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
              {invoiceDetails.map((details, index) => (
                <InvoiceText
                  key={index}
                  name={details.name}
                  roomNumber={details.roomNumber}
                  imageId={details.imageId}
                  docId={details.docId}
                />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default AdminInvoice;

import { Typography, Box, Toolbar, Grid, Link } from "@mui/material";
import { React, useEffect, useState } from "react";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import LibraryAddCheckOutlinedIcon from "@mui/icons-material/LibraryAddCheckOutlined";
import { db } from "../../../firebaseConfig";
//import {collection, doc,setDoc} from 'firebase/firestore'
import { collection, getDocs } from "firebase/firestore";
import { doc, getDoc, deleteDoc } from "firebase/firestore";

const headerHeight = 50;
const drawerWidth = 240;

function AdminSuggestions() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "suggestions"));
        const documents = [];
        querySnapshot.forEach((doc) => {
          documents.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setData(documents);
        console.log(data);
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };

    fetchDocuments();
  }, []);
  const handleDelete = async (suggestionId) => {
    try {
      await deleteDoc(doc(db, "suggestions", suggestionId));
      console.log("Document successfully deleted!");
      // Update state to reflect deletion
      setData(data.filter((suggestion) => suggestion.id !== suggestionId));
    } catch (error) {
      console.error("Error removing document: ", error);
    }
  };

  console.log(data);

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
          gap={2}
          sx={{
            margin: "60px 0 20px 0",
            width: "80%",
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "start",
            padding: "10px",
          }}
        >
          <Grid item sx={{}}>
            <Typography
              variant="h3"
              sx={{
                color: "white",
                "@media (max-width:1136px)": { fontSize: "2rem" },
              }}
            >
              Suggestions
            </Typography>
          </Grid>

          <Grid
            container
            sx={{
              height: "100%",
              width: "70%",
              padding: "20px",
              borderRadius: "10px",
              background: "black",
              display: "flex",
              flexDirection: "row",
              "@media(max-width:1050px)": { width: "100%" },
            }}
          >
            <Grid item>
              <Typography
                variant="h5"
                sx={{
                  color: "white",
                  "@media (max-width:1136px)": { fontSize: "1rem" },
                }}
              >
                All Students
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
                height: "30vh",
                overflowY: "auto",
                flexWrap: "revert",
                "&::-webkit-scrollbar": { display: "none" },
              }}
            >
              <Grid
                container
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "30px",
                  gap: "20px",
                }}
              >
                {data.map((doc) => (
                  <Grid
                    container
                    sx={{ display: "flex", flexDirection: "column" }}
                    key={doc.id}
                  >
                    <Grid
                      conatiner
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "20px",
                      }}
                    >
                      <Grid item>
                        <LightbulbOutlinedIcon
                          sx={{
                            fontSize: "30px",
                            "@media (max-width:1136px)": { fontSize: "20px" },
                          }}
                        />
                      </Grid>
                      <Grid item>
                        <Typography
                          variant="body1"
                          sx={{
                            "@media (max-width:1136px)": { fontSize: "15px" },
                          }}
                        >
                          {doc.title}
                        </Typography>
                      </Grid>
                      <Grid
                        container
                        sx={{ display: "flex", justifyContent: "end" }}
                      >
                        <LibraryAddCheckOutlinedIcon
                          sx={{
                            cursor: "pointer",
                            fontSize: "30px",
                            "@media (max-width:1136px)": { fontSize: "20px" },
                          }}
                          onClick={() => handleDelete(doc.id)}
                        />
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "px",
                      }}
                    >
                      <Grid
                        item
                        sx={{
                          marginLeft: "50px",
                          marginTop: "-20px",
                          "@media (max-width:1136px)": {
                            marginLeft: "40px",
                            marginTop: "-10px",
                          },
                        }}
                      >
                        <Typography
                          variant="caption"
                          sx={{
                            color: "gray",
                            "@media (max-width:1136px)": { fontSize: "10px" },
                          }}
                        >
                          {doc.description}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default AdminSuggestions;

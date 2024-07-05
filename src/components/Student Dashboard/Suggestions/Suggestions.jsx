import { React, useEffect, useState } from "react";
import {
  Box,
  Grid,
  Toolbar,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { db } from "../../../firebaseConfig";
import { collection, doc, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import NotificationSnackbar from "../../NotificationSnackbar/NotificationSnackbar";
const drawerWidth = 240;
const headerHeight = 50;

function Suggestions() {
  const [suggestion, setSuggestion] = useState({
    title: "",
    description: "",
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const handleChange = (e) => {
    setSuggestion({ ...suggestion, [e.target.name]: e.target.value });
  };
  const handleClick = async (e) => {
    e.preventDefault();

    if (
      suggestion.title.trim() === "" ||
      suggestion.description.trim() === ""
    ) {
      setSnackbar({
        open: true,
        message: "Fill in the details first",
        severity: "warning",
      });
    } else {
      try {
        await setDoc(doc(db, "notifications", uuidv4()), {
          message: suggestion.title,
          notidifieddatetime: new Date().toLocaleString(),
          type: "suggestion",
        });
        await setDoc(doc(db, "suggestions", uuidv4()), {
          title: suggestion.title,
          description: suggestion.description,
        });
        setSnackbar({
          open: true,
          message: "Successfully submitted",
          severity: "success",
        });
      } catch (err) {
        setSnackbar({
          open: true,
          message: err.message,
          severity: "error",
        });
      }
    }
    setSuggestion({ title: "", description: "" });
  };
  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: "#1B1918",
        height: `calc(100vh - ${headerHeight}px)`,
        padding: "0",
        marginTop: `${headerHeight}px`,
        "@media (min-width:600px)": { marginLeft: `${drawerWidth}px ` },
      }}
    >
      <Toolbar />
      <Box sx={{ width: "100%", height: "100%", backgroundColor: "#1B1918" }}>
        <Grid
          container
          gap={2}
          sx={{
            width: "100%",
            height: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Grid item>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", color: "white" }}
            >
              Suggestions
            </Typography>
          </Grid>
          <Grid
            item
            sx={{
              width: "40%",
              height: "60%",
              "@media (max-width:1085px)": { height: "60%", width: "90%" },
            }}
          >
            <Grid
              container
              sx={{
                width: "100%",
                height: "100%",
                backgroundColor: "black",
                display: "flex",
                flexDirection: "column",
                color: "white",
                padding: "20px",
                gap: "20px",
              }}
            >
              <Grid item>
                <Typography>Your Suggestion Title</Typography>
              </Grid>
              <Grid item>
                <TextField
                  id="filled-basic"
                  placeholder="Title"
                  variant="outlined"
                  fullWidth
                  sx={{ backgroundColor: "white", borderRadius: "4px" }}
                  name="title"
                  value={suggestion.title}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item>
                <Typography>Your Suggestion description</Typography>
              </Grid>
              <Grid item>
                <TextField
                  id="filled-basic"
                  placeholder="Suggestions.."
                  variant="outlined"
                  fullWidth
                  multiline
                  sx={{ backgroundColor: "white", borderRadius: "4px" }}
                  name="description"
                  value={suggestion.description}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ p: "15px" }}
                  onClick={handleClick}
                >
                  Make Suggestion
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <NotificationSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        handleClose={handleSnackbarClose}
      />
    </Box>
  );
}

export default Suggestions;

import { Grid, Typography, Button } from "@mui/material";
import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      #myInput::placeholder {
        color: white; /* Change this to the color you prefer */
        
        }
      
    `;
    document.head.appendChild(style);
  }, []);

  const ContactUs = () => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "80vh",
          width: "100%",
        }}
      >
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            marginTop: "120px",
            marginBottom: "20px",
          }}
        >
          <Grid item>
            <Typography
              variant="h4"
              sx={{ color: "white", fontWeight: "bold" }}
            >
              Contact Us
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h6"
              sx={{
                color: "white",
                fontSize: "18px",
                margin: "10px",
                textAlign: "center",
              }}
            >
              If you are facing any problem or if you have any queries, let us
              know.
            </Typography>
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "start",
              marginTop: "40px",
              width: { md: "60%", sm: "80%", xs: "80%" },
            }}
          >
            <Grid container sx={{ width: "100%", gap: "30px" }}>
              <Grid item sx={{ width: "100%" }}>
                <Typography
                  variant="h6"
                  sx={{ color: "white", fontSize: "18px" }}
                >
                  Your email
                </Typography>
                <input
                  type="email"
                  id="myInput"
                  placeholder="Enter your email"
                  style={{
                    backgroundColor: "gray",
                    border: "none",
                    outline: "none",
                    padding: "12px",
                    color: "white",
                    fontSize: "17px",
                    width: "100%",
                    borderRadius: "10px",
                  }}
                />
              </Grid>
              <Grid item sx={{ width: "100%" }}>
                <Typography
                  variant="h6"
                  sx={{ color: "white", fontSize: "18px" }}
                >
                  Subject
                </Typography>
                <input
                  type="text"
                  id="myInput"
                  placeholder="Let us know how can we help you"
                  style={{
                    backgroundColor: "gray",
                    border: "none",
                    outline: "none",
                    padding: "12px",
                    color: "white",
                    fontSize: "17px",
                    width: "100%",
                    borderRadius: "10px",
                  }}
                />
              </Grid>
              <Grid item sx={{ width: "100%" }}>
                <Typography
                  variant="h6"
                  sx={{ color: "white", fontSize: "18px" }}
                >
                  Your message
                </Typography>
                <textarea
                  id="myInput"
                  placeholder="Leave a comment..."
                  rows="6" // Adjust the number of rows as needed
                  style={{
                    backgroundColor: "gray",
                    border: "none",
                    outline: "none",
                    padding: "12px",
                    color: "white",
                    fontSize: "17px",
                    width: "100%",
                    borderRadius: "10px",
                    resize: "none",
                  }} // Adjust styles as needed
                />
              </Grid>
              <Grid item sx={{ width: "100%" }}>
                <Button
                  sx={{ width: "100%", borderRadius: "10px" }}
                  variant="contained"
                >
                  Send message
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  };

  return <ContactUs />;
};

export default App;

import React, { useState, useEffect } from 'react';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ImageIcon from '@mui/icons-material/Image';
import { Grid, IconButton, Typography, CircularProgress, Box, Dialog, DialogContent, DialogTitle } from '@mui/material';
import { storage } from '../../../firebaseConfig';


function InvoiceText(props) {
  // const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  
  const [imageUrl, setImageUrl] = useState('');

 

    // fetchImage();


  const handleClickOpen = () => {
    setLoading(true);
    setOpen(true);
    setLoading(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
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
                <Typography sx={{ fontSize: "13px", color: "whitesmoke" }}>
                  {props.name} Room No.{props.roomNumber}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  sx={{ fontSize: "10px", color: "rgb(120,120,120)" }}
                >
                  {new Date().toLocaleString()}
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
            <IconButton onClick={handleClickOpen}>
              <ImageIcon fontSize="small" sx={{ color: "whitesmoke" }} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton>
              <CheckCircleOutlineIcon
                fontSize="small"
                sx={{ color: "whitesmoke" }}
              />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      
      <Dialog open={open} onClose={handleClose} maxWidth="lg">
        <DialogTitle>Image Preview</DialogTitle>
        <DialogContent>
          {loading ? (
            <Box display="flex" justifyContent="center" alignItems="center" height="100%">
              <CircularProgress />
            </Box>
          ) : (
            <img src={imageUrl} alt="Invoice" style={{ width: '100%', height: 'auto' }} />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

export default InvoiceText;

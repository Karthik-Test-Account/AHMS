import React, { useState} from 'react';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ImageIcon from '@mui/icons-material/Image';
import { Grid, IconButton, Typography, CircularProgress, Box, Dialog, DialogContent} from '@mui/material';
import { imageStore } from '../../../firebaseConfig';
import {getDownloadURL,ref} from 'firebase/storage'
function InvoiceText(props) {
  const [imageURL,setImageURL]=useState('');
  const [loading,setLoading]=useState(false);
  const [open,setOpen]=useState(false);



  const fetchImage=async()=>{
    setLoading(true);
    setOpen(true);
    try {
      const imageRef=ref(imageStore,`Invoices/d4628d87-348f-44dd-ba55-257b4cf02735}`);
      console.log("got image ref: "+imageRef);
      const url=await getDownloadURL(imageRef);
      console.log("got url: "+url);
      setImageURL(url);
    } catch (error) {
      console.log("error : "+error);
    }finally{
      setLoading(false);
    }
  }

  const handleClose = () => {
    setOpen(false);
    setImageURL('');
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
            <IconButton onClick={fetchImage}>
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

      {/* for loading image */}
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
              <CircularProgress />
            </Box>
          ) : (
            <img src={imageURL} alt="Invoice" style={{ width: '100%' }} />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

export default InvoiceText;

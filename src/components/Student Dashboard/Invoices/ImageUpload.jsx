import React, { useState, useRef,useEffect } from 'react';
import { Button, Box, IconButton, Stack } from '@mui/material';
import { CloudUpload as CloudUploadIcon, Done as DoneIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { imageStore,db } from '../../../firebaseConfig';
import { ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
import {onAuthStateChanged,getAuth} from 'firebase/auth'
import {doc,setDoc} from 'firebase/firestore'

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isUploaded, setIsUploaded] = useState(false);
  const fileInputRef = useRef();
  const [studentId, setStudentId] = useState(null);

  useEffect(() => {
    const auth=getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setStudentId(user.uid);
      } else {
        // User is signed out
        setStudentId(null);
      }
    });

    // Clean up the subscription on unmount
    return () => unsubscribe();
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setIsUploaded(false);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async () => {
    if (selectedFile) {
      console.log('File ready to be uploaded:', selectedFile);
      const imgId=v4();
      // DATABSE CODE
      const imageRef = ref(imageStore, `Invoices/${imgId}`);
      await uploadBytes(imageRef, selectedFile);
      console.log("file stored in database");

      //storing studentid and imageid into invoices collection
      try {
        await setDoc(doc(db,"invoices",v4()),{
          imageId:imgId,
          studentId
        })
      } catch (error) {
        alert(error.message);
      }

      // Set upload status to true and clear selected file and preview
      setIsUploaded(true);
      setSelectedFile(null);
      setPreview(null);
    }
  };

  const handleDelete = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    setSelectedFile(null);
    setPreview(null);
    setIsUploaded(false);
    fileInputRef.current.value = ''; // Clear the file input value
  };

  return (
    <Box sx={{ textAlign: 'center', mt: 5 }}>
      <input
        accept="image/*"
        style={{ display: 'none' }}
        id="raised-button-file"
        type="file"
        onChange={handleFileChange}
        ref={fileInputRef}
      />
      <label htmlFor="raised-button-file">
        <Stack direction="row" spacing={1} alignItems="center">
          <Button
            variant="contained"
            component="span"
            startIcon={<CloudUploadIcon />}
          >
            Upload Image
          </Button>
          {selectedFile && !isUploaded && (
            <>
              <IconButton color="primary" onClick={handleUpload}>
                <DoneIcon />
              </IconButton>
              <IconButton color="secondary" onClick={handleDelete}>
                <DeleteIcon />
              </IconButton>
            </>
          )}
        </Stack>
      </label>
      {preview && !isUploaded && (
        <Box mt={2}>
          <img src={preview} alt="Preview" style={{ maxWidth: '100px', maxHeight: '50px' }} />
        </Box>
      )}
    </Box>
  );
};

export default ImageUpload;

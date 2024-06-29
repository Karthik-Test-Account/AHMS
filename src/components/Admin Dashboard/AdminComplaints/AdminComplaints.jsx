// Admincomplaints.jsx
import React, { useEffect, useState } from 'react';
import { Typography, Box, Toolbar, Grid } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import DoneIcon from '@mui/icons-material/Done';
import Complaintstext from './Complaintstext';
import { db } from '../../../firebaseConfig';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';

const headerHeight = 50, drawerWidth = 220;
const uData = [0, 0, 0, 0, 0, 0, 1];

const xLabels = [
  'june 2,2023',
  'june 3,2023',
  'june 4,2023',
  'june 5,2023',
  'june 6,2023',
  'june 7,2023',
  'june 8,2023',
];

const Admincomplaints = (props) => {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'complaints'));
        const documents = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Sort documents by datetime in descending order
        documents.sort((a, b) => new Date(b.datetime) - new Date(a.datetime));

        // Extract datetime strings for xLabels
        
        setData(documents);
      } catch (error) {
        console.error('Error fetching documents: ', error);
      }
    };

    fetchDocuments();
  }, []);

  const handleDelete = async (complaintId) => {
    try {
      await deleteDoc(doc(db, 'complaints', complaintId));
      console.log('Document successfully deleted!');
      // Update state to reflect deletion
      setData(data.filter((complaint) => complaint.id !== complaintId));
    } catch (error) {
      console.error('Error removing document: ', error);
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Box
        component="main"
        sx={{
          minHeight: '100vh',
          height: 'auto',
          backgroundColor: '#1B1918',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'start',
          padding: '0',
          marginTop: `${headerHeight}px`,
          '@media (min-width:600px)': { marginLeft: `${drawerWidth}px` },
        }}
      >
        <Toolbar />
        <Grid
          container
          sx={{
            display: 'flex',
            margin: '60px 0 20px 0',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            gap: '50px',
          }}
        >
          <Grid item>
            <Typography
              variant="h3"
              sx={{
                color: 'white',
                '@media (max-width:1136px)': { fontSize: '2rem' },
              }}
            >
              Complaints
            </Typography>
          </Grid>
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '50px',
              '@media(max-width:1034px)': { flexDirection: 'column' },
            }}
          >
            <Grid
              item
              sx={{
                height: '300px',
                width: { md: '40%', sm: '80%', xs: '60%' },
                '@media (max-width:1030px)': { width: '80%' },
              }}
            >
              <LineChart
                series={[{ data: uData }]}
                xAxis={[{ scaleType: 'point', data: xLabels }]}
                sx={{ backgroundColor: '#bdbdbd', borderRadius: '10px' }}
              />
            </Grid>
            <Grid
              item
              sx={{
                width: { md: '40%', sm: '80%' },
                height: '40%',
                '@media (max-width:1030px)': { width: '80%' },
              }}
            >
              <Grid
                container
                sx={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#090909',
                  padding: '20px',
                  display: 'flex',
                  borderRadius: '10px',
                  flexDirection: 'column',
                  justifyContent: 'start',
                  gap: '10px',
                  overflowY: 'auto',
                }}
              >
                <Grid item>
                  <Typography variant="h6" sx={{ color: 'white' }}>
                    New Complaints
                  </Typography>
                </Grid>
                <Grid
                  container
                  sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'start',
                    padding: '15px',
                    height: '31vh',
                    overflowY: 'auto',
                    flexWrap: 'revert',
                    gap: '10px',
                    '&::-webkit-scrollbar': { display: 'none' },
                  }}
                >
                  {data.map((cur) => (
                    <Complaintstext
                      key={cur.id}
                      title={cur.complainttype}
                      metatitle={cur.complainttitle}
                      name={`${cur.fname} ${cur.lname}`}
                      datess={cur.datetime}
                      lefticon={<ErrorOutlineRoundedIcon />}
                      righticon={<DoneIcon style={{ cursor: 'pointer' }} onClick={() => handleDelete(cur.id)} />}
                      onDelete={() => handleDelete(cur.id)} // Pass onDelete function
                    />
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Admincomplaints;

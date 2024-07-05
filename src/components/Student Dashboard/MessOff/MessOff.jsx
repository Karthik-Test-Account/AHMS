import React, { useState, useEffect } from 'react';
import { Typography, Box, Toolbar, Grid, Button } from '@mui/material';
import PieChartComponent from '../../PieChart/PieChart';
import { db } from '../../../firebaseConfig';
import { collection, getDocs,setDoc,doc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import { getAuth } from 'firebase/auth';

const headerHeight = 50;
const drawerWidth = 240;



function MessOff() {
  const [leavingDate, setLeavingDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userMail, setUserMail] = useState('');
  const [stat, setStat] = useState('');
  const [time, setTime] = useState(null);
  const [time1, setTime1] = useState(null);
  const [datas, setDatas] = useState([]);
  const [request,setRequest]=useState()
  

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUserMail(user.email);
      } else {
        alert('No user is signed in.');
        setUserMail('');
      }
    });

    return () => unsubscribe(); // Clean up the listener
  }, []);

  useEffect(() => {
    const fetchUsernames = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'students'));
        const documents = [];
        querySnapshot.forEach(doc => {
          if (doc.data().email === userMail) {
            documents.push({
              id: doc.id,
              ...doc.data()
            });
          }
        });

        if (documents.length > 0) {
          const { firstName, lastName } = documents[0]; // Assuming only one document matches email
          setFirstName(firstName);
          setLastName(lastName);
        }
      } catch (error) {
        console.error('Error fetching documents: ', error);
      }
    };

    if (userMail) {
      fetchUsernames();
    }
  }, [userMail]);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'request'));
        const documents = [];
        querySnapshot.forEach(doc => {
          if (doc.data().usermail === userMail) {
            // Assuming 'status' is a field in your 'request' documents
            documents.push({
              id: doc.id,
              ...doc.data() // Store all data from the document
            });
          }
        });

        if (documents.length > 0) {
          // Store all fetched documents in state
          documents.sort((a, b) => new Date(b.time1) - new Date(a.time1));
          setDatas(documents);
          setRequest(documents.length)
        }
      } catch (error) {
        console.error('Error fetching status: ', error);
      }
    };

    if (userMail) {
      fetchStatus();
    }
  }, [userMail]);
  const data = [
    { category: 'Mess off', value:new Date().getDate() },
    { category: 'Requested Mess', value:request },
    
  ];

  const handleLeavingDateChange = e => {
    setLeavingDate(e.target.value);
  };

  const handleReturnDateChange = e => {
    setReturnDate(e.target.value);
  };

  const handleRequestMessOff = async e => {
    e.preventDefault();

    if (leavingDate === '' || returnDate === '') {
      alert('Please select both leaving and return dates.');
    }
    else if(new Date(returnDate).getDate()<new Date(leavingDate).getDate())
    {
      alert("please select correct date")
    }
     else {
      try {
        await setDoc(doc(db, 'messoff', uuidv4()), {
          leavedate: leavingDate,
          returndate: returnDate,
          fname: firstName,
          lname: lastName,
          useremail: userMail
        });
        alert('Successfully submitted.');
        setLeavingDate('');
        setReturnDate('');
      } catch (error) {
        alert('Error submitting: ' + error.message);
      }
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
          '@media (min-width:600px)': { marginLeft: `${drawerWidth}px` }
        }}
      >
        <Toolbar />
        <Grid
          container
          gap={2}
          sx={{
            margin: '60px 0 20px 0',
            width: '80%',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '10px'
          }}
        >
          <Grid item>
            <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
              Mess Off
            </Typography>
          </Grid>
          <Grid item sx={{ width: '100%' }}>
            <Grid
              container
              gap={1}
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-evenly',
                flexWrap: 'wrap'
              }}
            >
              <Grid item>
                <Typography>Total Mess: {new Date().getDate()}</Typography>
              </Grid>
              
              <Grid item>
                <Typography>Requests Sent: {request}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sx={{ width: '100%', marginTop: '15px' }}>
            <Grid
              container
              gap={2}
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center'
              }}
            >
              <Grid
                item
                sx={{
                  borderRadius: '8px',
                  width: '42%',
                  minHeight: '40vh',
                  height: 'auto',
                  '@media (max-width:1100px)': { width: '100%' }
                }}
              >
                <Grid
                  container
                  gap={1}
                  sx={{
                    width: '100%',
                    height: '40vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <Grid item sx={{ width: '100%', height: '100%' }}>
                    <PieChartComponent
                      data={data}
                      argumentField="category"
                      valueField="value"
                      height="300"
                      width="300"
                      labelVisible={false}
                      paperColor="#1B1918"
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                sx={{
                  backgroundColor: '#080808',
                  borderRadius: '8px',
                  width: '35%',
                  minHeight: '40vh',
                  height: 'auto',
                  '@media (max-width:1100px)': { width: '100%' }
                }}
              >
                <Grid
                  container
                  sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'start',
                    padding: '15px',
                    height: '40vh',
                    overflowY: 'auto',
                    flexWrap: 'revert',
                    '&::-webkit-scrollbar': { display: 'none' }
                  }}
                >
                  <Grid item>
                    <Typography variant="h6" fontWeight={700}>
                      All Requests
                    </Typography>
                  </Grid>
                  {datas.map((item, index) => (
                    <Grid
                      key={index}
                      item
                      sx={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '5px'
                      }}
                    >
                      {/* Display each document's information */}
                      <Grid
                        container
                        sx={{
                          width: '60%',
                          display: 'flex',
                          justifyContent: 'start',
                          alignItems: 'center',
                          gap: '10px'
                        }}
                      >
                        <Grid item>
                          <Grid
                            container
                            sx={{
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'start'
                            }}
                          >
                            <Grid item>
                              <Typography sx={{ fontSize: '15px', color: 'whitesmoke' }}>
                                {item.status} {/* Assuming 'status' is a field in 'request' documents */}
                              </Typography>
                            </Grid>
                            <Grid item>
                              <Typography sx={{ fontSize: '15px', color: '#838383' }}>
                                {item.time ? item.time.toLocaleString() : ''}{"      "}{"to"}{" "}
                                {item.time1 ? item.time1.toLocaleString() : ''}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        sx={{
                          width: 'calc(40% - 10px)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'end'
                        }}
                      >
                        <Grid item>
                          <Typography sx={{ fontSize: '14px' }}>{new Date().getDate()+"-"+new Date().getMonth()+"-"+new Date().getFullYear()}</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            sx={{
              width: '40%',
              backgroundColor: '#080808',
              height: 'auto',
              padding: '15px',
              borderRadius: '7px',
              '@media (max-width:600px)': { width: '100%' },
              '@media (max-width:1085px)': { width: '70%' },
              '@media (max-width:870px)': { width: '90%' }
            }}
          >
            <Grid
              container
              gap={1}
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start'
              }}
            >
              <Grid
                item
                sx={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <Grid
                  container
                  gap={1}
                  sx={{ width: '40%', display: 'flex', flexDirection: 'column', alignItems: 'start' }}
                >
                  <Grid item>
                    <Typography sx={{ fontSize: '13px' }}>Your leaving date</Typography>
                  </Grid>
                  <Grid item sx={{ width: '100%' }}>
                    <input
                      type="date"
                      value={leavingDate}
                      onChange={handleLeavingDateChange}
                      style={{
                        width: '100%',
                        backgroundColor: 'gray',
                        padding: '5px 10px',
                        borderRadius: '7px',
                        color: 'white',
                        fontSize: '15px'
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  gap={1}
                  sx={{ width: '40%', display: 'flex', flexDirection: 'column', alignItems: 'start' }}
                >
                  <Grid item>
                    <Typography sx={{ fontSize: '13px' }}>Your return date</Typography>
                  </Grid>
                  <Grid item sx={{ width: '100%' }}>
                    <input
                      type="date"
                      value={returnDate}
                      onChange={handleReturnDateChange}
                      style={{
                        width: '100%',
                        backgroundColor: 'gray',
                        padding: '5px 10px',
                        borderRadius: '7px',
                        color: 'white',
                        fontSize: '14px'
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ width: '100%' }}>
                <Button variant="contained" sx={{ width: '100%' }} onClick={handleRequestMessOff}>
                  Request Mess off
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default MessOff;

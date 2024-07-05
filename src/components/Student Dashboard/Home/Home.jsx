import React, { useEffect, useState } from "react";
import { Box, Grid, Toolbar, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PieChartComponent from "../../PieChart/PieChart";
import { browserLocalPersistence, getAuth, onAuthStateChanged, setPersistence } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

const drawerWidth = 240;
const headerHeight = 50;



function Home(props) {
  const [userName,setUserName]= useState('');
  const [total,setTotal]=useState(0)
    const [present,setPresent]=useState(0)
    const [absent,setAbsent]=useState(0)
    const [userMail, setUserMail] = useState('');
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
    const auth = getAuth();

    // Set persistence
    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            const fetchUserData = async () => {
              const userDocRef = doc(db, 'students', user.uid);
              const userDoc = await getDoc(userDocRef);

              if (userDoc.exists()) {
                const userData = userDoc.data();
                setUserName(userData.firstName+" "+userData.lastName);
                console.log(userName) 
              } else {
                console.log("No such document!");
              }
            };

            fetchUserData();
          } else {
            console.log("No user is signed in.");
          }
        });
      })
      .catch((error) => {
        console.error("Error setting persistence:", error);
      });
  }, []);
  useEffect(() => {
    const now = new Date();
    setTotal(now.getDay());
    setPresent(now.getDay()) 
    
    
    
    
    
}, []); // 
  useEffect(() => {
    const fetchDocuments = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'request'));
            const documents = [];
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                if (data.usermail === userMail && new Date().getDate()>new Date(data.time).getDate()) {
                    documents.push({
                        id: doc.id,
                        ...doc.data() // Store all data from the document
                      });
                }
            });
            setDatas(documents)
           console.log(datas)
            if (documents.length >= 1) {
                let totalAbsent = 0;
                 documents.forEach(doc => {
                const c = new Date(doc.time).getDate();
                const d = new Date(doc.time1).getDate();
                const today = now.getDate();

                if (today!=c && today <= d) {
                    totalAbsent += d - c;
                }
                else{

                }
            });
              setAbsent(totalAbsent)
              setPresent(total-absent)
            
                 // Adjust state update
            } else {
                console.log('Insufficient documents found.');
                // Reset time and time1 to null or some default values if needed
                setTime(null);
                setTime1(null);
                // Reset absent and present if necessary
                //setAbsent(0);
                //setPresent(0);
            }
        } catch (error) {
            console.error('Error fetching documents: ', error);
        }
    };

    if (userMail) {
        fetchDocuments();
    }
}, [userMail, total]); 
const data=[
  {category:"Days Off",value:total},
  {category:"Present",value:present}
]

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
          alignItems: "center",
          padding: "20px 0",
          marginTop: `${headerHeight}px`,
          "@media (min-width:600px)": { marginLeft: `${drawerWidth}px` },
        }}
      >
        <Toolbar />
        <Grid
          container
          gap={2}
          sx={{
            width: "70%",
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <Grid item>
            <Typography variant="h3" fontWeight={600} align="center">
              Welcome <span style={{ color: "#1976D2" }}>{userName}</span>
            </Typography>
          </Grid>
          <Grid item sx={{ width: "100%" }}>
            <Grid
              container
              gap={1}
              sx={{
                width: "100%",
                padding: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                "@media (max-width:1100px)": { flexDirection: "column" },
              }}
            >
              <Grid
                item
                sx={{
                  backgroundColor: "#080808",
                  width: "53%",
                  minHeight: "40vh",
                  height: "auto",
                  "@media (max-width:1100px)": { width: "100%" },
                  borderRadius: "8px",
                }}
              >
                <Grid
                  container
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "start",
                    padding: "15px",
                    height: "40vh",
                    overflowY: "auto",
                    flexWrap: "revert",
                    "&::-webkit-scrollbar": { display: "none" },
                  }}
                >
                  <Grid item>
                    <Typography variant="h6" fontWeight={700}>
                      Unpaid Invoices
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    sx={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "5px",
                    }}
                  >
                    {/* start of box */}
                    <Grid
                      container
                      sx={{
                        width: "60%",
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <Grid item>
                        <AccessTimeIcon />
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
                            <Typography sx={{ fontSize: "13px" }}>
                              Mess Fee
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography sx={{ fontSize: "13px" }}>
                              May 21, 2023
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      sx={{
                        width: "calc(40% - 10px)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "end",
                      }}
                    >
                      <Grid item>
                        <Typography sx={{ fontSize: "14px" }}>
                          Rs. 9000
                        </Typography>
                      </Grid>
                    </Grid>
                    {/* end of box */}
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                sx={{
                  backgroundColor: "#080808",
                  borderRadius: "8px",
                  width: "38%",
                  minHeight: "40vh",
                  height: "auto",
                  "@media (max-width:1100px)": { width: "100%" },
                }}
              >
                <Grid
                  container
                  gap={1}
                  sx={{
                    width: "100%",
                    height: "40vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Grid item sx={{ width: "100%", height: "100%" }}>
                    <PieChartComponent
                      data={data}
                      title="Attendance"
                      argumentField="category"
                      valueField="value"
                      height="220"
                      width="220"
                      labelVisible={true}
                      paperColor="#080808"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Home;

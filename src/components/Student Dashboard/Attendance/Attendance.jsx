import {React,useState,useEffect} from 'react';
import { Box, Grid, Toolbar, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PieChartComponent from '../../PieChart/PieChart';
import CloseIcon from '@mui/icons-material/Close';
import { db } from '../../../firebaseConfig';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const drawerWidth = 240;
const headerHeight = 50;

const data = [
    { category: 'Days off', value: 3 },
    { category: 'Days present', value: 5 },
];

function Attendance() {
    const now=new Date()
    const [total,setTotal]=useState(0)
    const [present,setPresent]=useState(0)
    const [absent,setAbsent]=useState(0)
    const [userMail, setUserMail] = useState('');
    const [time,setTime]=useState(null)
    const [time1,setTime1]=useState(null)
    const [datas,setDatas]=useState([])
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
    }, [userMail, total]); // Depend on userMail and total changes
    
    
    
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Box component="main" sx={{
                backgroundColor: '#1B1918', height: `calc(100vh - ${headerHeight}px)`, overflow: 'auto',
                padding: '15px', marginTop: `${headerHeight}px`, '@media (min-width:600px)': { marginLeft: `${drawerWidth}px ` }
            }}>
                <Toolbar />
                <Grid container sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '10px' }}>
                    <Grid item sx={{}}>
                        <Typography variant='h3' sx={{ color: 'white' }}>Attendance</Typography>
                    </Grid>
                    <Grid container sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '30px' }}>
                        <Grid item >
                            <Typography variant='h6' sx={{ color: 'white' }}>Total days:{total}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='h6' sx={{ color: 'white' }}>Present Days:{present}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='h6' sx={{ color: 'white' }}>Absent days:{absent}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '30px', '@media(max-width:980px)': { display: 'flex', flexDirection: 'column' } }}>
                        <Grid item>
                            <PieChartComponent data={data} argumentField="category" valueField="value" height='300' width='300' labelVisible={false} paperColor='#1B1918' />
                        </Grid>
                        <Grid item sx={{ width: '35%', height: 'auto', backgroundColor: '#090909', padding: '10px', '@media(max-width:1100px)': { width: '50%' }, '@media(max-width:980px)': { width: '80%' } }}>
                            <Grid container sx={{ width: '100%', height: '100%', backgroundColor: '#090909', padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'start', gap: '10px', overflowY: 'auto' }}>
                                <Grid item>
                                    <Typography variant='h6' sx={{ color: 'white' }}>This month</Typography>
                                </Grid>
                                {datas.map((cur)=>(<Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                       <Typography sx={{ fontSize: '15px', color: '#838383' }}>
                                            {cur.time ? cur.time.toLocaleString() : ''}{" "}{"to"}{" "}
                                             {cur.time1 ? cur.time1.toLocaleString() : ''}
                                         </Typography>
                                    <Grid item sx={{ color: 'white', cursor: 'pointer' }}>
                                        <CloseIcon />
                                    </Grid>
                                </Grid>))}
                                <Grid item>
                                    <Typography sx={{ color: 'gray' }}>Absent</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </Box>
        </div >
    )
}

export default Attendance;
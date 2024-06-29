import {React,useEffect,useState} from "react";
import { Typography, Box, Toolbar, Grid } from "@mui/material";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import {db} from '../../../firebaseConfig'
//import {collection, doc,setDoc} from 'firebase/firestore'
import { collection, getDocs } from 'firebase/firestore';
import { doc, getDoc } from "firebase/firestore";

function Complaintstext(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchDocuments = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, 'complaints'));
          const documents = [];
          querySnapshot.forEach((doc) => {
            documents.push({
              id: doc.id,
              ...doc.data()
            });
          });
          documents.sort((a, b) => new Date(b.datetime) - new Date(a.datetime));

           //console.log(documents)
          setData(documents);

        } catch (error) {
          console.error('Error fetching documents: ', error);
        }
      };
  
      fetchDocuments();

},[])
const handleDelete=()=>{
  data.map((docu)=>{const docRef = db.collection('complaints').doc(docu.id);

  // Delete the document
  docRef.delete().then(() => {
    console.log("Document successfully deleted!");
  }).catch((error) => {
    console.error("Error removing document: ", error);
  });
})


}
  return (
    <>
      <Grid
        item
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Grid
          container
          sx={{
            width: "50%",
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Grid item sx={{ color: "white" }}>
            {props.lefticon}
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
                <Typography sx={{ fontSize: "15px", color: "white" }}>
                  {props.title}
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ fontSize: "10px", color: "white" }}>
                  {props.dates}
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ fontSize: "12px", color: "white" }}>
                  {props.name}
                </Typography>
              </Grid>
              
              <Grid item>
                <Typography sx={{ fontSize: "12px", color: "white" }}>
                  {props.datess}
                </Typography>
              </Grid>
              
             
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            width: "calc(50% - 10px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
          }}
        >
          <Grid item sx={{ color: "white" }}>
            {props.righticon}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Complaintstext;
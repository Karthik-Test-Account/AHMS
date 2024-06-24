import {React,useEffect,useState} from 'react';
import { Box, Grid, Toolbar, Typography, TextField, Button } from '@mui/material';
import {db} from '../../../firebaseConfig'
import {collection, doc,setDoc} from 'firebase/firestore'
// import { v4 as uuidv4 } from "uuid"; 

const drawerWidth = 240;
const headerHeight = 50;


function Suggestions() {
    const [suggestion,setSuggestion]=useState({
             title:"",
             description:""
    })
    const handleChange=(e)=>{
        setSuggestion({...suggestion,[e.target.name]:e.target.value});
        

    }
     const handleClick=async(e)=>{
         e.preventDefault();

         if(suggestion.title.trim()==="" || suggestion.description.trim()==="")
            {
                
                alert("fill the detailes first");

            }
            else{
                
                
                    
                try{
        
                   await setDoc(doc(db,"suggestions",uuidv4()),{
                    title:suggestion.title,
                    description:suggestion.description

                   })
                   console.log("sucessfully submitted");
                }
                catch(err)
                {
                    alert(err)
                }

            }
            setSuggestion({ title: "", description: "" });

     }
    return (
        <Box component="main" sx={{
            backgroundColor: '#1B1918', height: `calc(100vh - ${headerHeight}px)`,
            padding: '0', marginTop: `${headerHeight}px`, '@media (min-width:600px)': { marginLeft: `${drawerWidth}px ` }
        }}>
            <Toolbar />
            <Box sx={{ width: '100%',height:'100%', backgroundColor: '#1B1918' }}>
                <Grid container gap={2} sx={{ width: '100%',height:'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '10px' }}>
                    <Grid item>
                        <Typography variant='h4' sx={{ fontWeight: 'bold', color: 'white' }}>
                            Suggestions
                        </Typography>
                    </Grid>
                    <Grid item sx={{ width: '40%', height: '60%', '@media (max-width:1085px)': { height: '60%', width: '90%' } }}>
                        <Grid container sx={{ width: '100%', height: '100%', backgroundColor: 'black', display: 'flex', flexDirection: 'column', color: 'white', padding: '20px', gap: '20px' }}>
                            <Grid item >
                                <Typography>Your Suggestion Title</Typography>
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="filled-basic"
                                    placeholder="Title"
                                    variant="outlined"
                                    fullWidth
                                    sx={{ backgroundColor: 'white', borderRadius: '4px' }}
                                    name="title"
                                    value={suggestion.title}
                                    onChange={handleChange}
                                    
                                />
                            </Grid>
                            <Grid item >
                                <Typography>Your Suggestion description</Typography>
                            </Grid>
                            <Grid item >
                                <TextField
                                    id="filled-basic"
                                    placeholder='Suggestions..'
                                    variant='outlined'
                                    fullWidth
                                    multiline
                                    sx={{ backgroundColor: 'white', borderRadius: '4px' }}
                                    name="description"
                                    value={suggestion.description}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item>
                                <Button variant="contained" fullWidth sx={{p:'15px'}} onClick={handleClick}>Make Suggestion</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box >
    );
}

export default Suggestions;
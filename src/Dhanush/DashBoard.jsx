import * as React from 'react';
import  {styled, useTheme} from '@mui/material/styles';
import {makeStyles} from '@mui/styles'
import {useMediaQuery} from '@mui/material'
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const useStyles = makeStyles(() => ({
  appBar: {
    width: { xs: '100%', sm: 'auto' },
  },
  main: {
    marginLeft: { xs: drawerWidth, sm: 0 },
    backgroundColor:'#f0f2f5'
  },
}));

export default function DashBoard() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar className={classes.appBar} position="fixed" open={open}>
        <Toolbar>
        <Grid container sx={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'0px 10px'}}>
            <Grid item>
              <Grid container spacing={1} sx={{display:'flex',alignItems:'center'}}>
                <Grid item>
                  <IconButton
                      color="inherit"
                      aria-label="open drawer"
                      onClick={handleDrawerOpen}
                      edge="start"
                      sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                    <MenuIcon />
                  </IconButton>
                </Grid>
                <Grid item>
                  <Typography sx={{fontWeight:'600',fontSize:'1.1rem'}}>Application</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container spacing={3} sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <Grid item>
                  <Grid container spacing={1} sx={{display:'flex',alignItems:'center'}}>
                    <Grid item>
                      <AcUnitIcon/>
                    </Grid>
                    <Grid item>
                      <Typography sx={{fontSize:'12px',fontWeight:'400','@media (max-width:960px)':{display:'none'}}}>ENGLISH</Typography>
                      </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container spacing={1} sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                    <Grid item>
                      <AccountCircleIcon/>
                    </Grid>
                    <Grid item>
                      <Grid container sx={{display:'flex',flexDirection:'column','@media (max-width:960px)':{display:'none'}}}>
                        <Grid item>
                          <Typography sx={{fontSize:'13px',fontWeight:'400'}}>ADMIN</Typography>
                        </Grid>
                        <Grid item>
                          <Typography sx={{fontSize:'13px',fontWeight:'400'}}>WORKSPACE</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main className={classes.main} open={open}>
        <DrawerHeader />
        <Typography>
          STUDENT PROFILE
        </Typography>
      </Main>
    </Box>
  );
}
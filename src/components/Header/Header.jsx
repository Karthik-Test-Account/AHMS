import React, { useState, useEffect } from "react";
import {
  AppBar,
  CssBaseline,
  Grid,
  Toolbar,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
  Snackbar,
  Button,
  Box,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import SidebarItems from "../Sidebar/SidebarItems/SidebarItems";
import SideBarText from "../Sidebar/SidebarHeading/SidebarText";
import SidebarLogout from "../Sidebar/SidebarLogout/SidebarLogout";
import { NavLink } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const drawerWidth = 240;

function Header(props) {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const db = getFirestore(); // Initialize Firestore
        const querySnapshot = await getDocs(collection(db, "notifications"));
        const documents = [];
        querySnapshot.forEach((doc) => {
          documents.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setNotifications(documents);
        console.log("Fetched notifications:", documents);
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };

    fetchDocuments();
  }, []);

  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleClickSnackbar = (newState) => () => {
    setState({ ...newState, open: true });
  };

  const handleSnackbarClose = () => {
    setState({ ...state, open: false });
  };

  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null); // for notifications and account

  // For appbar
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // For notifications
  const handleNotificationClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNotificationClose = () => {
    setAnchorEl(null);
  };

  const [anchor, setAnchor] = useState(null); // for notifications and account

  // For notifications
  const handleClick = (e) => {
    setAnchor(e.currentTarget);
  };
  const handleClose = (e) => {
    setAnchor(null);
  };

  const [userMail, setUserMail] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // User is signed in, you can get user details here
        setUserMail(currentUser.email);
      } else {
        // User is signed out
        setUserMail(null);
      }
    });

    // Clean up the subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          "@media (max-width:600px)": { width: "100%" },
          backgroundColor: "#0C0A08",
          color: "white",
        }}
      >
        <Toolbar>
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Grid
              item
              className="icon"
              sx={{ "@media (min-width:600px)": { visibility: "hidden" } }}
            >
              <IconButton
                color="inherit"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <Grid
                container
                sx={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <Grid item className="icon">
                  {userMail !== "xyz@gmail.com" && (
                    <NavLink style={{ color: "white" }} to="/student/settings">
                      <IconButton color="inherit" edge="start">
                        <SettingsIcon />
                      </IconButton>
                    </NavLink>
                  )}
                </Grid>
                <Grid item className="icon">
                  <IconButton
                    color="inherit"
                    edge="start"
                    onClick={handleNotificationClick}
                  >
                    <NotificationsIcon />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleNotificationClose}
                    sx={{
                      "& .MuiPaper-root": {
                        backgroundColor: "black",
                        color: "white",
                        mt: 1,
                        ml: 4,
                        height: "20vh",
                        overflowY: "auto",
                        "&::-webkit-scrollbar": { display: "none" },
                      },
                    }}
                    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                    transformOrigin={{ vertical: "top", horizontal: "right" }}
                  >
                    {notifications.map((notification, index) => (
                      <MenuItem key={index} onClick={handleNotificationClose}>
                        {notification.message +
                          " - " +
                          notification.notidifieddatetime +
                          " - " +
                          notification.type}
                      </MenuItem>
                    ))}
                  </Menu>
                </Grid>
                <Grid item className="icon">
                  <IconButton
                    color="inherit"
                    edge="start"
                    onClick={handleClickSnackbar({
                      vertical: "top",
                      horizontal: "right",
                    })}
                  >
                    <AccountCircleIcon />
                  </IconButton>
                  <Menu
                    anchorEl={anchor}
                    keepMounted
                    open={Boolean(anchor)}
                    onClose={handleClose}
                    sx={{
                      "& .MuiPaper-root": {
                        backgroundColor: "black",
                        color: "white",
                      },
                    }}
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    transformOrigin={{ vertical: "top", horizontal: "right" }}
                  >
                    <MenuItem onClick={handleClose}>Settings</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </Menu>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: "black",
            color: "white",
          },
        }}
      >
        <SideBarText />
        <SidebarItems onClick={handleDrawerToggle} userMenu={props.userMenu} />
        <SidebarLogout />
      </Drawer>
    </>
  );
}

export default Header;

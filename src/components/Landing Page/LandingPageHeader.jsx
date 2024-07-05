import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Container } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { Box, Stack } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import { MenuItem } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
function LandingPageHeader() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "transparent",
        boxShadow: 0,
        backgroundImage: "none",
        mt: 2,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={(theme) => ({
            display: "flex",
            alignItems: "center",

            justifyContent: "space-between",
            flexShrink: 0,
            borderRadius: "999px",
            bgcolor: theme.palette.mode === "light" ? "#031629" : "#fff",

            backdropFilter: "blur(24px)",
            maxHeight: 40,
            border: "1px solid",
            borderColor: "divider",
            boxShadow:
              theme.palette.mode === "light"
                ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                : "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
          })}
          variant="regular"
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton color="primary" aria-label="home">
              <NavLink to="/" style={{ color: "#1976D2" }}>
                {" "}
                <HomeIcon />{" "}
              </NavLink>
            </IconButton>
            <Typography variant="h6" noWrap component="div" color="inherit">
              Illuminati
            </Typography>
          </div>
          <Stack
            direction="row"
            spacing={3}
            sx={{
              alignItems: "center",
              display: { sm: "none", md: "block", xs: "none" },
            }}
          >
            <Button color="inherit">
              <NavLink
                to="/about"
                style={{ textDecoration: "none", color: "white" }}
              >
                About
              </NavLink>
            </Button>
            {/* <Button color="inherit">Request</Button> */}
            <Button color="inherit">
              <NavLink
                to="/contactus"
                style={{ textDecoration: "none", color: "white" }}
              >
                Contact Us
              </NavLink>
            </Button>
            <Button color="inherit">
              <NavLink
                to="/adminlogin"
                style={{ textDecoration: "none", color: "white" }}
              >
                Admin Login
              </NavLink>
            </Button>
            <Button variant="contained">
              <NavLink
                to="/login"
                style={{ textDecoration: "none", color: "white" }}
              >
                Login
              </NavLink>
            </Button>
          </Stack>

          {/* toggle menu bar */}
          <Box sx={{ display: { sm: "block", md: "none" } }}>
            <IconButton
              variant="text"
              color="primary"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ minWidth: "30px", p: "4px" }}
            >
              <MenuIcon />
            </IconButton>

            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
              <Box
                sx={{
                  minWidth: "60dvw",
                  p: 2,
                  backgroundColor: "#121212",
                  flexGrow: 1,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    color: "white",
                    flexGrow: 1,
                  }}
                >
                  <MenuItem onClick={toggleDrawer(false)}>About</MenuItem>
                  {/* <MenuItem onClick={toggleDrawer(false)}>Request</MenuItem> */}
                  <MenuItem onClick={toggleDrawer(false)}>Contact</MenuItem>
                  {/* <MenuItem onClick={toggleDrawer(false)}>Admin Login</MenuItem> */}
                  {/* <MenuItem onClick={toggleDrawer(false)}>Login</MenuItem> */}
                </Box>
                <Box>
                  <MenuItem
                    sx={{ width: "100%" }}
                    onClick={toggleDrawer(false)}
                  >
                    <Button color="primary" variant="contained" fullWidth>
                      <NavLink
                        to="/adminlogin"
                        style={{
                          width: "100%",
                          textDecoration: "none",
                          color: "white",
                        }}
                      >
                        Admin Login
                      </NavLink>
                    </Button>
                  </MenuItem>
                  <MenuItem
                    sx={{ width: "100%" }}
                    onClick={toggleDrawer(false)}
                  >
                    <Button color="primary" variant="outlined" fullWidth>
                      <NavLink
                        to="/login"
                        style={{
                          width: "100%",
                          textDecoration: "none",
                          color: "white",
                        }}
                      >
                        Login
                      </NavLink>
                    </Button>
                  </MenuItem>
                </Box>
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default LandingPageHeader;

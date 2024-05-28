import React,{useState} from 'react'
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
                  <HomeIcon />
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
                <Button color="inherit">About</Button>
                <Button color="inherit">Request</Button>
                <Button color="inherit">Contact</Button>
                <Button color="inherit">AdminLogin</Button>
                <Button variant="contained">Login</Button>
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

                <Drawer
                  anchor="right"
                  open={open}
                  onClose={toggleDrawer(false)}
                >
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
                        alignItems: "center",
                        color: "white",
                        flexGrow: 1,
                      }}
                    >
                      <MenuItem onClick={toggleDrawer(false)}>
                        Features
                      </MenuItem>
                      <MenuItem onClick={toggleDrawer(false)}>
                        Testimonials
                      </MenuItem>
                      <MenuItem onClick={toggleDrawer(false)}>
                        Highlights
                      </MenuItem>
                      <MenuItem onClick={toggleDrawer(false)}>Pricing</MenuItem>
                      <MenuItem onClick={toggleDrawer(false)}>FAQ</MenuItem>

                      <MenuItem>
                        <Button
                          color="primary"
                          variant="contained"
                          sx={{ width: "100%" }}
                        >
                          Sign up
                        </Button>
                      </MenuItem>
                      <MenuItem>
                        <Button
                          color="primary"
                          variant="outlined"
                          sx={{ width: "100%" }}
                        >
                          Sign in
                        </Button>
                      </MenuItem>
                    </Box>
                  </Box>
                </Drawer>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
  )
}

export default LandingPageHeader
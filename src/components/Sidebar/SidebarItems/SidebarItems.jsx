import React from 'react';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';

const SidebarItems = ({ onClick, userMenu = [] }) => {
  const location = useLocation();

  return (
    <>
      {/* {console.log("SidebarItems userMenu:", userMenu)} */}
      <Divider sx={{ backgroundColor: 'white' }} />
      <List>
        {userMenu.map((navMenu) => (
          <NavLink
            to={navMenu.to}
            key={navMenu.text}
            className="active-link"
            style={{
              color: location.pathname === navMenu.to ? '#1976D2' : 'white',
              textDecoration: 'none',
            }}
            onClick={onClick}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: location.pathname === navMenu.to ? '#1976D2' : 'white' }}>
                  {navMenu.icon}
                </ListItemIcon>
                <ListItemText primary={navMenu.text} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
      <Divider sx={{ backgroundColor: 'white' }} />
    </>
  );
};

export default SidebarItems;

import React from 'react';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import EditIcon from '@mui/icons-material/Edit';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill1, faStar } from '@fortawesome/free-regular-svg-icons';

const navMenus = [
  { text: 'Home', icon: <HomeIcon />, to: '/' },
  { text: 'Mess Off', icon: <RestaurantMenuIcon />, to: '/messoff' },
  { text: 'Attendance', icon: <EditIcon />, to: '/attendance' },
  { text: 'Invoices', icon: <FontAwesomeIcon icon={faMoneyBill1} />, to: '/invoices' },
  { text: 'Complaints', icon: <SentimentVeryDissatisfiedIcon />, to: '/complaints' },
  { text: 'Suggestions', icon: <FontAwesomeIcon icon={faStar} />, to: '/suggestions' },
];

const SidebarItems = ({ onClick }) => (
  <>
    <Divider sx={{ backgroundColor: 'white' }} />
    <List>
      {navMenus.map((navMenu) => (
        <NavLink
          to={navMenu.to}
          key={navMenu.text}
          style={({ isActive }) => ({
            color: isActive ? '#182A6A' : 'white',
            textDecoration: 'none',
          })}
          onClick={onClick}
        >
          {({ isActive }) => (
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: isActive ? '#112149' : 'white' }}>{navMenu.icon}</ListItemIcon>
                <ListItemText primary={navMenu.text} />
              </ListItemButton>
            </ListItem>
          )}
        </NavLink>
      ))}
    </List>
    <Divider sx={{ backgroundColor: 'white' }} />
  </>
);

export default SidebarItems;

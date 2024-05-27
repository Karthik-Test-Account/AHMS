import React, { useState } from 'react';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import EditIcon from '@mui/icons-material/Edit';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill1, faStar } from '@fortawesome/free-regular-svg-icons';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import GroupsIcon from '@mui/icons-material/Groups';

const studentNavMenus = [
  { text: 'Home', icon: <HomeIcon />, to: '/' },
  { text: 'Mess Off', icon: <RestaurantMenuIcon />, to: '/messoff' },
  { text: 'Attendance', icon: <EditIcon />, to: '/attendance' },
  { text: 'Invoices', icon: <FontAwesomeIcon icon={faMoneyBill1} />, to: '/invoices' },
  { text: 'Complaints', icon: <SentimentVeryDissatisfiedIcon />, to: '/complaints' },
  { text: 'Suggestions', icon: <FontAwesomeIcon icon={faStar} />, to: '/suggestions' },
];

const adminNavMenus=[
  { text: 'Home', icon: <HomeIcon />, to: '/' },
  { text:'Register Student',icon: <PersonAddAltIcon/>,to:'/registerStudent'},
  { text: 'Attendance', icon: <EditIcon />, to: '/attendance' },
  { text: 'Mess', icon: <RestaurantMenuIcon />, to: '/messoff' },
  { text: 'Invoices', icon: <FontAwesomeIcon icon={faMoneyBill1} />, to: '/invoices' },
  { text: 'Complaints', icon: <SentimentVeryDissatisfiedIcon />, to: '/complaints' },
  { text: 'Suggestions', icon: <FontAwesomeIcon icon={faStar} />, to: '/suggestions' },
  { text:'All Students', icon:<GroupsIcon/>,to:'/allStudents'}
]


const SidebarItems = ({ onClick }) => (
  <>
    <Divider sx={{ backgroundColor: 'white' }} />
    <List>
      {adminNavMenus.map((navMenu) => (
        <NavLink
          to={navMenu.to}
          key={navMenu.text}
          style={({ isActive }) => ({
            color: isActive ? '#1976D2' : 'white',
            textDecoration: 'none',
          })}
          onClick={onClick}
        >
          {({ isActive }) => (
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: isActive ? '#1976D2' : 'white' }}>{navMenu.icon}</ListItemIcon>
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
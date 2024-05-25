import React from 'react'
import {Box,Drawer,List,Divider,ListItem,ListItemButton,ListItemIcon,ListItemText,Toolbar,SvgIcon} from '@mui/material'
import SideBarText from './SidebarHeading/SidebarText';
import SidebarLogout from './SidebarLogout/SidebarLogout';

import HomeIcon from '@mui/icons-material/Home';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import EditIcon from '@mui/icons-material/Edit';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMoneyBill1} from '@fortawesome/free-regular-svg-icons'
import {faStar} from '@fortawesome/free-regular-svg-icons'
//for routing
import {NavLink} from 'react-router-dom'


const drawerWidth = 240;

const navMenus=[
  {
    text:'Home',
    icon:<HomeIcon/>,
    to:'/'
  },
  {
    text:'Mess Off',
    icon: <RestaurantMenuIcon/>,
    to:'/messoff'
  },
  {
    text:'Attendence',
    icon:<EditIcon/>,
    to:'/attendence'
  },
  {
    text:'Invoices',
    icon:<FontAwesomeIcon icon={faMoneyBill1}/>,
    to:'/invoices'
  },
  {
    text:'Complaints',
    icon:<SentimentVeryDissatisfiedIcon/>,
    to:'/complaints'
  },
  {
    text:'Suggestions',
    icon:<FontAwesomeIcon icon={faStar}/>,
    to:'/suggestions'
  },
]

function Sidebar() {
  return (
    <Box sx={{ display: 'flex'}}>
      <SideBarText/><SidebarLogout/>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: 'black',
            color: 'white',
          },
          '@media (max-width:600px)': {display:'none'}
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider/>
        <List>
          {navMenus.map((navMenu) => (
            <NavLink to={navMenu.to} key={navMenu.text} style={({isActive})=>({
              color:isActive?'#1976D2':'white',
              textDecoration:'none'
            })}>
              {({ isActive }) => (
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon sx={{ color: isActive ? '#1976D2' : 'white' }}>
                      {navMenu.icon}
                    </ListItemIcon>
                    <ListItemText primary={navMenu.text} />
                  </ListItemButton>
                </ListItem>
              )}
            </NavLink>
          ))}
        </List>
        <Divider/>
      </Drawer>
    </Box>
  )
}

export default Sidebar
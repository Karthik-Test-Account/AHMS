import React from 'react'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

import HomeIcon from '@mui/icons-material/Home';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import EditIcon from '@mui/icons-material/Edit';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill1, faStar } from '@fortawesome/free-regular-svg-icons';


const studentNavMenus = [
  { text: 'Home', icon: <HomeIcon />, to: '/student' },
  { text: 'Mess Off', icon: <RestaurantMenuIcon />, to: '/student/messoff' },
  { text: 'Attendance', icon: <EditIcon />, to: '/student/attendance' },
  { text: 'Invoices', icon: <FontAwesomeIcon icon={faMoneyBill1} />, to: '/student/invoices' },
  { text: 'Complaints', icon: <SentimentVeryDissatisfiedIcon />, to: '/student/complaints' },
  { text: 'Suggestions', icon: <FontAwesomeIcon icon={faStar} />, to: '/student/suggestions' },
];

function StudentLayout() {
  return (
    <>
        <Header userMenu={studentNavMenus}/>
        <Outlet/>
        <Sidebar userMenu={studentNavMenus}/>
    </>
  )
}

export default StudentLayout
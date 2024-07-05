import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import EditIcon from "@mui/icons-material/Edit";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill1, faStar } from "@fortawesome/free-regular-svg-icons";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import GroupsIcon from "@mui/icons-material/Groups";

const adminNavMenus = [
  { text: "Home", icon: <HomeIcon />, to: "/admin" },
  // { text: 'Register Student', icon: <PersonAddAltIcon />, to: '/admin/registerStudent' },
  // { text: "Attendance", icon: <EditIcon />, to: "/admin/attendance" },
  { text: "Mess", icon: <RestaurantMenuIcon />, to: "/admin/mess" },
  {
    text: "Invoices",
    icon: <FontAwesomeIcon icon={faMoneyBill1} />,
    to: "/admin/invoices",
  },
  {
    text: "Complaints",
    icon: <SentimentVeryDissatisfiedIcon />,
    to: "/admin/complaints",
  },
  {
    text: "Suggestions",
    icon: <FontAwesomeIcon icon={faStar} />,
    to: "/admin/suggestions",
  },
  { text: "All Students", icon: <GroupsIcon />, to: "/admin/allStudents" },
];

function AdminLayout() {
  return (
    <>
      <Header userMenu={adminNavMenus} />
      <Outlet />
      <Sidebar userMenu={adminNavMenus} />
    </>
  );
}

export default AdminLayout;

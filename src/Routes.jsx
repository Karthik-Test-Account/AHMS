import { createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom";
import LandingPageLayout from "./LandingPageLayout";
import LandingPageBody from "./components/Landing Page/LandingPageBody";
import SignIn from './components/Auth/SignIn'
import SignUp from './components/Auth/SignUp'

import StudentLayout from './StudetLayout'
import Home from './components/Student Dashboard/Home/Home.jsx'
import Invoices from "./components/Student Dashboard/Invoices/Invoices.jsx";
import MessOff from "./components/Student Dashboard/MessOff/MessOff.jsx";
import Suggestions from "./components/Student Dashboard/Suggestions/Suggestions.jsx";
import Attendance from "./components/Student Dashboard/Attendance/Attendance.jsx";
import Complaints from "./components/Student Dashboard/complaints/complaints.jsx";

import AdminLayout from "./AdminLayout.jsx";
import AdminHome from "./components/Admin Dashboard/AdminHome/AdminHome.jsx";
import AdminMess from "./components/Admin Dashboard/AdminMess/AdminMess.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<LandingPageLayout />}>
                <Route index element={<LandingPageBody />} />
                <Route path="login" element={<SignIn />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="adminlogin" element={<SignIn title="Manager" />} />
            </Route>
            <Route path="student" element={<StudentLayout />}>
                <Route index element={<Home />} />
                <Route path='suggestions' element={<Suggestions />} />
                <Route path='invoices' element={<Invoices />} />
                <Route path='messoff' element={<MessOff />} />
                <Route path='attendance' element={<Attendance />} />
                <Route path='complaints' element={<Complaints />} />
            </Route>
            <Route path="admin" element={<AdminLayout />}>
                <Route index element={<AdminHome />} />
                <Route path="mess" element={<AdminMess />} />
            </Route>
        </>
    )
)

export default router;
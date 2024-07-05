import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import LandingPageLayout from "./LandingPageLayout";
import LandingPageBody from "./components/Landing Page/LandingPageBody";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import ContactUs from "./components/Contact us/ContactUs.jsx";
import About from "./components/About/About.jsx";

import StudentLayout from "./StudentLayout";
import Home from "./components/Student Dashboard/Home/Home.jsx";
import Invoices from "./components/Student Dashboard/Invoices/Invoices.jsx";
import MessOff from "./components/Student Dashboard/MessOff/MessOff.jsx";
import Suggestions from "./components/Student Dashboard/Suggestions/Suggestions.jsx";
import Attendance from "./components/Student Dashboard/Attendance/Attendance.jsx";
import Complaints from "./components/Student Dashboard/complaints/complaints.jsx";

import AdminLayout from "./AdminLayout.jsx";
import AdminHome from "./components/Admin Dashboard/AdminHome/AdminHome.jsx";
import AdminMess from "./components/Admin Dashboard/AdminMess/AdminMess.jsx";
// import RegisterStudent from "./components/Admin Dashboard/RegisterStudent/RegisterStudent.jsx";
import AdminSuggestions from "./components/Admin Dashboard/AdminSuggestions/AdminSuggestions.jsx";
import AdminComplaints from "./components/Admin Dashboard/AdminComplaints/AdminComplaints.jsx";
import AdminAllStudents from "./components/Admin Dashboard/AdminAllStudents/AdminAllStudents.jsx";
import AdminInvoice from "./components/Admin Dashboard/AdminInvoice/AdminInvoice.jsx";
import AdminAttendance from "./components/Admin Dashboard/AdminAttendance/AdminAttendance.jsx";

import Settings from "./components/Settings/Settings.jsx";

import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LandingPageLayout />}>
        <Route index element={<LandingPageBody />} />
        <Route path="login" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="about" element={<About />} />
        <Route path="adminlogin" element={<SignIn title="Manager" />} />
      </Route>
      <Route
        path="student"
        element={<ProtectedRoute allowedRoles={["student"]} />}
      >
        <Route element={<StudentLayout />}>
          <Route index element={<Home />} />
          <Route path="suggestions" element={<Suggestions />} />
          <Route path="invoices" element={<Invoices />} />
          <Route path="messoff" element={<MessOff />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="complaints" element={<Complaints />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Route>
      <Route path="admin" element={<ProtectedRoute allowedRoles={["admin"]} />}>
        <Route element={<AdminLayout />}>
          <Route index element={<AdminHome />} />
          <Route path="mess" element={<AdminMess />} />
          {/* <Route path="registerstudent" element={<RegisterStudent />} /> */}
          <Route path="suggestions" element={<AdminSuggestions />} />
          <Route path="complaints" element={<AdminComplaints />} />
          <Route path="allstudents" element={<AdminAllStudents />} />
          <Route path="invoices" element={<AdminInvoice />} />
          <Route path="attendance" element={<AdminAttendance />} />
        </Route>
      </Route>
    </>
  )
);

export default router;

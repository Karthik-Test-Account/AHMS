import { createBrowserRouter,Route,createRoutesFromElements } from "react-router-dom";
import LandingPageLayout from "./LandingPageLayout";
import LandingPageBody from "./components/Landing Page/LandingPageBody";
import SignIn from './components/Auth/SignIn'
import SignUp from './components/Auth/SignUp'

import StudentLayout from './StudetLayout'
import Home from './components/Student Dashboard/Home/Home.jsx'
import Invoices from "./components/Student Dashboard/Invoices/Invoices.jsx";
import MessOff from "./components/Student Dashboard/MessOff/MessOff.jsx";
import Suggestions from "./components/Student Dashboard/Suggestions/Suggestions.jsx";

const router=createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<LandingPageLayout/>}>
                <Route index element={<LandingPageBody/>}/>
                <Route path="login" element={<SignIn/>}/>
                <Route path="signup" element={<SignUp/>}/>
                <Route path="adminlogin" element={<SignIn title="Manager"/>}/>
            </Route>
            <Route path="student" element={<StudentLayout/>}>
                <Route index element={<Home/>}/>
                <Route path='suggestions' element={<Suggestions/>}/>
                <Route path='invoices' element={<Invoices/>}/>
                <Route path='messoff' element={<MessOff/>}/>
            </Route>
        </>
    )
)

export default router;
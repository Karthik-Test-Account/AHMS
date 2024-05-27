import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from "./components/Student Dashboard/Home/Home.jsx"
import Suggestions from "./components/Student Dashboard/Suggestions/Suggestions.jsx"
import Invoices from "./components/Student Dashboard/Invoices/Invoices.jsx"
import MessOff from './components/Student Dashboard/MessOff/MessOff.jsx'
import AdminHome from './components/Admin Dashboard/AdminHome/AdminHome.jsx'
import App from './App.jsx'

// const dashboardRouter=createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:'suggestions',
//         element:<Suggestions/>
//       },
//       {
//         path:'/invoices',
//         element:<Invoices/>
//       },
//       {
//         path:'/messoff',
//         element:<MessOff/>
//       }
//     ]
//   }
// ])

const studentDashboardRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='suggestions' element={<Suggestions/>}/>
      <Route path='invoices' element={<Invoices/>}/>
      <Route path='messoff' element={<MessOff/>}/>
    </Route>
  )
)

const adminDashboardRouter= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<AdminHome/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={adminDashboardRouter}/> */}
    <App></App>
  </React.StrictMode>,
)
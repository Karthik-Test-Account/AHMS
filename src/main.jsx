import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from "./components/Home/Home"
import Suggestions from './components/Suggestions/Suggestions.jsx'
import Invoices from './components/Invoices/Invoices.jsx'

import MessOff from './components/MessOff/MessOff.jsx'

const dashboardRouter=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:'suggestions',
        element:<Suggestions/>
      },
      {
        path:'/invoices',
        element:<Invoices/>
      },
      {
        path:'/messoff',
        element:<MessOff/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={dashboardRouter}/>
  </React.StrictMode>,
)
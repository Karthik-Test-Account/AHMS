import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'




// const adminDashboardRouter= createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout/>}>
//       <Route path='' element={<AdminHome/>}/>
//     </Route>
//   )
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
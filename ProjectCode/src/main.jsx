import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
// import Navbar from './Components/Navbar';
// import Home from './Components/Home';
// import About from './Components/About';
// import Contact from './Components/Contact';
// import Footer from './Components/Footer';


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<App/>}>
//       <Route path='' element={<Home/>} />
//       <Route path='About' element={<About/>} />
//       <Route path='Contact' element={<Contact/>} />
//       <Route path='User/:UserId' element={<Footer/>} />
//     </Route>
//   )
// )

// ReactDOM.createRoot(document.getElementById('root')).render(
 
  
//     <RouterProvider router={router}/>

    
 
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
  domain="dev-hsd5m4qa3b50tane.us.auth0.com"
  clientId="fSZjjNKQ0uQd6FD3nX2wVOFJeBviAibX"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
  >
  <App/>
  </Auth0Provider>
)



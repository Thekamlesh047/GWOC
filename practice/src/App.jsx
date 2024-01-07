import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

import Modal from './Components/Modal';
import Home from './Components/Home';
import About from './Components/About/About';
import Demos from './Components/Demo/Demos';
import Achievements from './Components/Achievements/Achievements';
import ContactPage from './Components/Contact/ContactPage';



function App() {
  const [showModal, setShowModal] = useState(false)
  const { loginWithRedirect, isAuthenticated, user } = useAuth0(); 
   console.log(user);

  return (
  <>
  <div className='flex flex-col items-center'>
   
     <Home 
     onModal={() => setShowModal(true)}
    onSignup={() => loginWithRedirect()}
    Login={isAuthenticated}
    />
    {showModal && <Modal 
    userName={user.name}
    profilePicture={user.picture}
    onClose={() => setShowModal(false)}  
    onSignup={() => loginWithRedirect()}
    Login={isAuthenticated} />}
     
     <About/>
     <Achievements/>
     <Demos/>
     <ContactPage/>
     
</div>
</>
   
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import About from './pages/About';
import Contact from './pages/Contact';
import PublicTransport from './services/PublicTransport';
import WasteManagement from './services/WasteManagement';
import Emergency from './services/Emergency';
import Healthcare from './services/Healthcare';
import Education from './services/Education';
import Utilities from './services/Utilities';
import Signin from'./pages/Login';
import Register from './pages/Register';
 const App = () => {
  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');
  useEffect( () =>{
    document.body.className = theme;
  },[theme])
  return (
    <Router>
       <div className={theme}>
        <Navbar theme ={theme} setTheme={setTheme}/>
       </div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About />} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path='/public' element={<PublicTransport />} />
        <Route path="/emergency-services" element={<Emergency />} />
        <Route path="/waste-management" element={<WasteManagement/>} />
        <Route path="/healthcare" element={<Healthcare />} />
        <Route path="/education" element={<Education />} />
        <Route path="/utilities" element={<Utilities />} />

      </Routes>
    </Router>
  );
};

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomNavbar from './components/CustomNavbar/CustomNavbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Services from './components/Services/services';
import Contacts from './components/Contacts/contact';
import About from './components/About/about';

function App() {
  return (
    <Router>
      <div className="app-container">
      <CustomNavbar /> {/* Render the desktop navigation bar */}
     
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
  
        <Footer />
        <div className="whtsapp_logo">
  <section id="block-13" className="widget widget_block">
    <div className="descriptionx">
      <p>
        <a href="https://api.whatsapp.com/send?text=&amp;phone=918821088288" target="_blank" rel="noreferrer">
          <img
            decoding="async"
            src="https://tochat.be/whatsapp-icon-white.png"
            width="30"
            height="30"
            alt="whatsapp"
            style={{ background: 'transparent' }} // Add this style
          />
        </a>
      </p>
    </div>
  </section>
</div>

    
    
      </div>
    </Router>
    
  
  );
}

export default App;

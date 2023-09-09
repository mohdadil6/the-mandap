import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Contact.css'; // Import your CSS file
import Form from "../Form";
import './Contact.css';

const Contact = () => {
  return (<>  <br/><br/><br/><br/><br/><br/>    <div className="container">


      <div className="contact-card">
        <i className="fas fa-phone contact-icon"></i>
        <div className="contact-title">Phone</div>
        <div className="contact-text">
          <a href="tel:+918821088288">+91 8821 088 288</a>
        </div>
      </div>

      <div className="contact-card">
        <i className="far fa-envelope contact-icon"></i>
        <div className="contact-title">Email</div>
        <div className="contact-text">
          <a href="mailto:themandap2023@gmail.com">Send Mail</a>
        </div>
      </div>

      <div className="contact-card">
        <i className="fab fa-instagram contact-icon"></i>
        <div className="contact-title">Instagram</div>
        <div className="contact-text">
          <a href="https://instagram.com/themandap2023">@themandap2023</a>
        </div>
      </div>
    </div><br/><br/>
    <Form/>
    </>

  );
};

export default Contact;

import React, { useState } from 'react';
import './Form.css'; 
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    email: '',
    eventDate: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://13.232.33.193:5000/submit-form', {
  method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log('Response:', response);
      if (response.ok) {
        // Clear the form data
        setFormData({
          name: '',
          contactNumber: '',
          email: '',
          eventDate: '',
          message: '',
        });
         toast.success('Callback request submitted', {
          position: toast.POSITION.TOP_CENTER,
        });
        console.log("Form data sent successfully");
      }  else {
        console.error('Error sending form data');
        // Handle the error, e.g., show an error message
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle network or other errors
    }
  };

  return (
    <div className="form-shortcode">
      <h2 className="main_heading">
        Request a <span className="main_heading-span">Call back!</span>
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            placeholder="Name *"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="contactNumber">Contact Number *</label>
          <input
            type="text"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            placeholder="Contact Number *"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="eventDate">Event Date</label>
          <input
            type="text"
            id="eventDate"
            name="eventDate"
            value={formData.eventDate}
            placeholder="Date of event"
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            rows="3"
            placeholder="Message"
            onChange={handleChange}
          />
        </div>
        <div className="form-submit">
          <button type="submit" className="frm_button_submit">
            Submit
          </button><br/><br/><br/>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Form;

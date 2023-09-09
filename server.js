// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors'); // Import the cors middleware


// Create an Express app
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// Middleware to parse request body as JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define a route to handle POST requests to /submit-form
app.post('/submit-form', (req, res) => {
  const formData = req.body;
  

  // Create a nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'themandap2023@gmail.com',
      pass: 'your pwd here',
    },
  });

  // Create email content
  const mailOptions = {
    from: 'themandap2023@gmail.com',
    to: 'themandap2023@gmail.com',
    subject: 'New Query Submission',
    text: `
      Name: ${formData.name}
      Contact Number: ${formData.contactNumber}
      Email: ${formData.email}
      Event Date: ${formData.eventDate}
      Message: ${formData.message}
    `,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email: ', error);
      res.status(500).json({ success: false, message: 'Error sending email' });
    } else {
      console.log('Email sent: ', info.response);
      res.status(200).json({ success: true, message: 'Email sent successfully' });
    }
  });
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

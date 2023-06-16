const nodemailer = require('nodemailer');

const bookButton = document.querySelector('.submit');

async function sendEmail(receiverEmail, subject, message) {
  try {
    let transporter = nodemailer.createTransport({
      service: 'hotmail',
      auth: {
        user: 'abdulqadirmb@outlook.com',
        pass: 'Smarty.@q8604'
      }
    });

    let mailOptions = {
      from: 'abdulqadirmb@outlook.com',
      to: receiverEmail,
      subject: subject,
      text: message
    };

    let info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
  } catch (error) {
    console.log('Error sending email:', error);
  }
}

function submit(event) {
  event.preventDefault(); // Prevent form submission and page refresh
  // Access the form fields
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const message = document.getElementById('message').value;

  // Do something with the form data
  // For example, you can log the values to the console
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Date:', date);
  console.log('Time:', time);
  console.log('Message:', message);

  const subject = `Appointment from ${name}`;
  const emailMessage = `This is an appointment booking message from ${name}.\n\nDate: ${date}\nTime: ${time}\n\nMessage: ${message}\n\nCEO, AQ Smart Solutions Ltd.`;

  sendEmail(email, subject, emailMessage)
      .then(() => console.log('Email sent!'))
      .catch((error) => console.log('Error sending email:', error));
}

bookButton.addEventListener('click', submit);

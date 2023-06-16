import express from 'express';
import nodemailer from 'nodemailer';
const app = express();

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files from the 'public' directory
// Enable CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Route to handle form submission and send email
app.post('/iron-gym-vanilla/send-email', async (req, res) => {
    const { name, email, date, time, message } = req.body;

    // Create a transporter
    let transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
            user: 'abdulqadirmb@outlook.com',
            pass: 'Smarty.@q8604'
        }
    });

    // Compose email message
    const subject = `GYM Appointment from ${name}`;
    const emailMessage = `<pre>This is an appointment booking message from ${name}.\n\nDate: ${date}\nTime: ${time}\n\nEmail: ${email}\n\nMessage: ${message}\n\nCEO, AQ Smart Solutions Ltd.</pre>`;

    try {
        // Send email
        let info = await transporter.sendMail({
            from: 'abdulqadirmb@outlook.com',
            to: 'abdulqadir.b8604@gmail.com',
            subject: subject,
            html: emailMessage // Use 'html' instead of 'text' to send HTML content
        });
    } catch (error) {
        console.log('Error sending email:', error);
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

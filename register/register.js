// register.js

const nodemailer = require('nodemailer');

async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, username } = req.body;
        const password = generateRandomPassword(); // Assuming this function is defined elsewhere

        // Nodemailer setup (example, replace with your SMTP configuration)
        let transporter = nodemailer.createTransport({
            host: 'smtp.example.com', // Replace with your SMTP server
            port: 587,
            secure: false, // Upgrade later with STARTTLS
            auth: {
                user: 'your-email@example.com', // Replace with your email address
                pass: 'your-email-password' // Replace with your email password
            }
        });

        // Email content
        let mailOptions = {
            from: 'your-email@example.com',
            to: email,
            subject: 'Your New Password',
            text: `Hey ${username},\n\nHere is your password: ${password}`
        };

        try {
            // Send email
            let info = await transporter.sendMail(mailOptions);
            console.log('Email sent: ' + info.response);
            res.status(200).json({ message: 'Email sent successfully!' });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ error: 'Failed to send email.' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}

module.exports = handler;

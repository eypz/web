// register.js

// Import necessary libraries
const nodemailer = require('nodemailer');

// Function to generate random password
function generateRandomPassword() {
    const length = 8;
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let password = '';
    for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return password;
}

// Handler function for the serverless function
async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, username } = req.body;
        const password = generateRandomPassword();

        // Send email with the generated password
        const transporter = nodemailer.createTransport({
            // Configure your email transport here (e.g., SMTP settings)
            host: 'smtp.example.com',
            port: 587,
            secure: false,
            auth: {
                user: 'your-email@example.com',
                pass: 'your-email-password'
            }
        });

        const mailOptions = {
            from: 'sataniceypz@gamil.com',
            to: email,
            subject: 'Your New Password',
            text: `Hey ${username},\n\nHere is your password: ${password}`
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).send('Email sent successfully!');
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Failed to send email.');
        }
    } else {
        res.status(405).send('Method Not Allowed');
    }
}

module.exports = handler;

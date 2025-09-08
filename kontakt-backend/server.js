const express = require('express');
const nodemailer = require('nodemailer');
const cors = require ('cors');
require('dotenv').config();

const app = express();
app.use(cors({
    origin:'https://piasnaehstube.vercel.app',
    methods: ['POST', 'OPTIONS'],
    credentials:true
}));
app.use(express.json());

app.post('/api/sendMail', async (req, res) => {
    const {name, message, email} = req.body;

    const transporter = nodemailer.createTransport({
        host: 'mail.gmx.net',
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `Neue Nachricht von ${name || 'Webseit-Besucher'}`,
        text: `Nachricht:\n\n${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({success:true,message:'Email gesendet!'});
    } catch (error) {
        console.error(error);
        res.status(500).json({success:false,message:'Fehler beim Senden.'});
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server läuft auf Port ${PORT}'));
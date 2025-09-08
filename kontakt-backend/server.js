const express = require('express');
const nodemailer = require('nodemailer');
const cors = require ('cors');
require('dotenv').config();

const app = express();

const allowedOrigins = [
    'http://localhost:3000',
    'https://piasnaehstube.vercel.app'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

app.post('/send', async (req, res) => {
    const {name, message} = req.body;

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

app.listen(5000, () => console.log('Server läuft auf Port 5000'));
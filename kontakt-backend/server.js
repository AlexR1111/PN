const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const { GoogleSpreadsheet } = require('google-spreadsheet');
const { JWT } = require('google-auth-library');

const app = express();

// 🌐 Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const allowedOrigins = [
  'http://localhost:3000',
  'https://piasnaehstube.vercel.app',
  'https://pias-naehstube.com'
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

// 📨 Mailversand-Route
app.post('/api/sendMail', async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "mail.gmx.net",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS  
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "PiasNaehstube@gmx.de",
    subject: `Neue Nachricht von ${name || 'Webseiten-Besucher'}, ${email}`,
    text: `Nachricht:\n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("✅ Mail erfolgreich versendet");
    res.status(200).json({ success: true, message: 'Email gesendet!' });
  } catch (error) {
    console.error("❌ Fehler beim Mailversand:", error.message);
    res.status(500).json({ success: false, message: 'Fehler beim Senden.' });
  }
});

// 📝 Blogpost speichern
app.post('/api/blogposts', async (req, res) => {
  const { id, title, date, content, imageUrl } = req.body;

  const authClient = new JWT({
    email: process.env.GOOGLE_CLIENT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  });

  const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;

  try {
    const doc = new GoogleSpreadsheet(spreadsheetId, authClient);
    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0];
    await sheet.addRow({ id, title, date, content, imageUrl });

    console.log("✅ Blogpost gespeichert:", title);
    res.status(200).json({ success: true, message: 'Blogpost gespeichert!' });
  } catch (error) {
    console.error("❌ Fehler beim Speichern:", error.message);
    res.status(500).json({ success: false, message: 'Fehler beim Speichern.' });
  }
});

// 🚀 Server starten
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server läuft auf Port ${PORT}`));

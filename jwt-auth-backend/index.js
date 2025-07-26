const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors({
  origin: 'https://job-ready-cohort-hackathon-phase-1.vercel.app',
  credentials: true
}));

app.use(express.json());

// ✅ Test route
app.get('/', (req, res) => {
  res.send('🚀 Backend is running and ready to accept requests!');
});

app.use('/api/auth', require('./routes/authRoutes'));

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(process.env.PORT, () =>
      console.log(`Server running on port ${process.env.PORT}`)
    );
  })
  .catch((err) => console.error(err));

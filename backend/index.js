const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cron = require('node-cron');
const fetchNews = require('./fetchNews');
const routes = require('./routes');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
  mongoose.connect(process.env.CONNECTION_STRING, {});

cron.schedule('0 * * * *', () => {
  fetchNews();
});

fetchNews();

app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

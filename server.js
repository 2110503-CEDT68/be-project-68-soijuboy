const { setServers } = require("node:dns/promises");
setServers(["1.1.1.1", "8.8.8.8"]);

const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });

const express = require('express');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');

connectDB();

const app = express();

// Body parser
app.use(express.json());

// Cookie parser
app.use(cookieParser());

// Import routes
const auth = require('./routes/auth');
const companies = require('./routes/company');
const sessions = require('./routes/interviewsession');
const bookings = require('./routes/booking');

// Mount routes
app.use('/api/v1/auth', auth);
app.use('/api/v1/companies', companies);
app.use('/api/v1/sessions', sessions);
app.use('/api/v1/bookings', bookings);

const PORT = process.env.PORT || 5003;

const server = app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});

// Handle unhandled promise rejection
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});
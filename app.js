// Importing necessary dependencies
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const session = require('express-session');
const routes = require('./server/routes/TrackerRoutes.js');
require('dotenv').config();

// Creating an instance of the Express application
const app = express();

// Setting up environment variables
const HOSTNAME = process.env.HOSTNAME;
const PORT = process.env.PORT || process.env.BACKUPPORT;

// Middleware setup
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(expressLayouts);

// Setting default layout and view engine
app.set('layout', 'layouts/main');
app.set('view engine', 'ejs');

// Using custom routes
app.use('/', routes);

// Starting the server and listening on the specified port and hostname
app.listen(PORT, HOSTNAME, () => console.log(`[Server Started at http://${HOSTNAME}:${PORT}]\n[Listening on PORT:${PORT}]`));
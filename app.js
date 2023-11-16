//Importing dependency and other
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const session = require('express-session');
const routes = require('./server/routes/TrackerRoutes.js');
require('dotenv').config();

//Creating an instance of the app
const app = express();
//setting up my enviroment variable from .env
const HOSTNAME = process.env.HOSTNAME;
const PORT = process.env.PORT || process.env.BACKUPPORT;

//my middleware setup
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(expressLayouts);
//setting my default layout and view engine
app.set('layout', 'layouts/main');
app.set('view engine', 'ejs');

app.use('/', routes);
//starting my server and listening on the port
app.listen(PORT, HOSTNAME, () => console.log(`[Server Started at http://${HOSTNAME}:${PORT}]\n[Listening on PORT:${PORT}]`));
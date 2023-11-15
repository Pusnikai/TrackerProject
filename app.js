//Importing dependency and other
const express = require('express');
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose');
const session = require('express-session');
const routes = require('./server/routes/TrackerRoutes.js')
require('dotenv').config();
const app = express();
const HOSTNAME = process.env.HOSTNAME;
const PORT = process.env.PORT || process.env.BACKUPPORT;


app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(expressLayouts)

app.set('layout', './layouts/main');
app.set('view engine', 'ejs');
app.use('/', routes)


//Connecting to our mongodb database
/*
(async() => {
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log('  [Connected to MongoDB]');
    } catch (error) {
        console.error('*Error connecting to MongoDB:', error.message);
    }
})();

app.get('/', (req, res) => {
    res.send('Testing if this works');
});
*/


app.listen(PORT, HOSTNAME, () => console.log(`  [Server Started at http://${HOSTNAME}:${PORT}]\n  [Listening on PORT:${PORT}]`));
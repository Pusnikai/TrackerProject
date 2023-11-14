//Importing 
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');

const app = express();
const HOSTNAME = '127.0.0.1'
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send("Testing if dis work");
});

app.listen(PORT, HOSTNAME, () => {
    console.log(`Server Started at http://${HOSTNAME}:${PORT}`);
});
const express = require('express');
const router = express.Router();
const TrackerController = require('../controllers/TrackerController');



router.get('/', TrackerController.homepage);



module.exports = router;
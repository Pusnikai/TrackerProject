const express = require('express');
const router = express.Router();
const TrackerController = require('../controllers/TrackerController');

router.get('/', TrackerController.splash);
router.get('/home', TrackerController.home);
router.get('/about', TrackerController.about);
router.get('/view', TrackerController.viewMeals);
router.get('/update/:mealId', TrackerController.updateMeals);


module.exports = router;
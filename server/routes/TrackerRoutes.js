const express = require('express');
const router = express.Router();
const TrackerController = require('../controllers/TrackerController');

router.get('/', TrackerController.splash);
router.get('/home', TrackerController.home);
router.get('/about', TrackerController.about);
router.get('/view', TrackerController.viewMeals);

// Add routes
router.get('/add', TrackerController.addMeal);
router.post('/add', TrackerController.createMeal);

// Update routes
router.get('/update/:id', TrackerController.updateMeals);
router.post('/update/:id', TrackerController.MealUpdate);

// Delete route
router.delete('/delete/:id', TrackerController.deleteMeal);

module.exports = router;
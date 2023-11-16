//Importing the ExPRESS ANd creating my router isntace
//Importing my TrackerController for handling my routes
const express = require('express');
const router = express.Router();
const TrackerController = require('../controllers/TrackerController');
//setting up my routes and associating then with the corresponding controller
router.get('/', TrackerController.splash);
router.get('/home', TrackerController.home);
router.get('/about', TrackerController.about);
router.get('/view', TrackerController.viewMeals);

router.get('/add', TrackerController.addMeal);
router.post('/add', TrackerController.createMeal);

router.get('/update/:id', TrackerController.updateMeals);
router.post('/update/:id', TrackerController.MealUpdate);


router.delete('/delete/:id', TrackerController.deleteMeal);
//exporting the router
module.exports = router;
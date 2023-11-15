const Meal = require('../models/Meals');

const TrackerController = {
    splash: (req, res) => {
        res.render('splash', { title: 'Meal Tracker' });
    },
    home: async(req, res) => {
        res.render('home', { title: 'Home' });
    },
    about: async(req, res) => {
        res.render('about', { title: 'About' });
    },
    viewMeals: async(req, res) => {
        const meals = await Meal.find();
        res.render('view', { title: 'View Meals', meals });
    },
    updateMeals: async(req, res) => {
        const mealId = req.params.mealId;
        const meal = await Meal.findById(mealId);
        res.render('update', { title: 'Update Meal', meal });
    },
};

module.exports = TrackerController;
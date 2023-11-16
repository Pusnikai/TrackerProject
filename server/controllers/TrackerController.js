const Meal = require('../models/Meals');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const TrackerController = {
    splash: (req, res) => {
        res.render('splash', { title: 'Meal Tracker' });
    },

    home: async(req, res) => {
        res.render('home', { title: 'Gorilla Meal Tracker', subTitle: 'Save and share your favourite meal preps.' });
    },

    about: async(req, res) => {
        res.render('about', { title: 'About', subTitle: 'Why use Gorilla Meal Tracker?' });
    },

    viewMeals: async(req, res) => {
        try {
            const meals = await Meal.find();
            res.render('view', { title: 'View Meals', meals });
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    },

    addMeal: (req, res) => {
        res.render('add', { title: 'Add Meal' });
    },

    createMeal: [upload.single('image'), async(req, res) => {
        try {
            const { name, description, ingredients, calories, protein, carbohydrates, fats, recipe, mealtype } = req.body;

            const newMeal = new Meal({
                name,
                description,
                ingredients,
                calories,
                macronutrient: { protein, carbohydrates, fats },
                recipe,
                mealtype,
                image: req.file.buffer,
            });

            await newMeal.save();

            res.redirect('/view');
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    }],

    updateMeals: async(req, res) => {
        try {
            const mealId = req.params.id;
            const meal = await Meal.findById(mealId);
            res.render('update', { title: 'Update Meal', meal });
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    },

    MealUpdate: async(req, res) => {
        try {} catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    },

    deleteMeal: async(req, res) => {
        try {} catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    },
};

module.exports = TrackerController;
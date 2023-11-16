//import mongoose for my object model
const mongoose = require('mongoose');

//defining my schema for my collection
const MealsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: false },
    ingredients: { type: String, required: false },
    calories: { type: Number, required: true },
    macronutrient: { protein: Number, carbohydrates: Number, fats: Number },
    recipe: { type: String, required: false },
    mealtype: { type: String, require: true },
    image: { type: String, required: 'This field is required.' },
    date: { type: Date, default: Date.now },
});

//creating mongoose model for our schema
const Meal = mongoose.model('Meal', MealsSchema);

//exporting the model to use for other file
module.exports = Meal
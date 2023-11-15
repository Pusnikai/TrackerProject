const mongoose = require('mongoose');

const MealsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: false },
    ingredients: { type: String, required: false },
    calories: { type: Number, required: true },
    macronutrient: { protein: Number, carbohydrates: Number, fats: Number },
    recipe: { type: String, required: false },
    image: { type: String, required: 'This field is required.' },
    date: { type: Date, default: Date.now },
});

const Meal = mongoose.model('Meal', MealsSchema);

module.exports = Meal
const mongoose = require('mongoose');

const trackSchema = new mongoose.Schema({
    name: String,
    calories: Number,
    macronutrients: { protein: Number, carbohydrates: Number, fats: Number, },
    ingredient: String,
    date: { type: Date, default: Date.now },
    image: String,
});

module.exports = mongoose.model('track', trackSchema)
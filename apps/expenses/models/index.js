const mongoose = require("mongoose");

const ExpenseModel = mongoose.model('expenses', {
    title: String,
    description: String,
    amount: Number,
    type: Number,
    date: String
});

module.exports = ExpenseModel;
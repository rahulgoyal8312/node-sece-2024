const mongoose = require("mongoose");

module.exports = function () {
    mongoose.connect(
        `mongodb+srv://root:q5fr2dofN2giWZ8k@mern-2024.0bpg7af.mongodb.net/?retryWrites=true&w=majority`,
        // `mongodb://127.0.0.1:27018/`, 
        {
            dbName: "expense-tracker"
        }
    ).then(() => {
        console.log("Successfully connected to MongoDB");
    })
        .catch(error => {
            console.log("Error connecting to MongoDB", error);
        })
}
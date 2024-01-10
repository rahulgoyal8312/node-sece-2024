const express = require("express");
// const fs = require("fs");

const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");

// make connection to the Database
const db = require("./database/index");
db();

const { 
    fetchExpenses, 
    fetchExpensesById, 
    addExpense,
    editExpense,
    deleteExpense
} = require("./apps/expenses/controllers")

app.use(bodyParser.json());
app.use(cors());

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// })

app.get("/expenses", fetchExpenses);
app.get("/expenses/:id", fetchExpensesById)
app.post("/expenses", addExpense)
app.put("/expenses/:id", editExpense)
app.delete("/expenses/:id", deleteExpense)


const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Connected to the server on PORT: ${PORT}`);
});
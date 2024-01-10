const ExpenseModel = require("../models/index");

exports.fetchExpenses = async (req, res) => {
    const data = await ExpenseModel.find();
    return res.send(data);
    // fs.readFile("./data.json", "utf-8", (err, data) => {
    //     // console.log(data);
    //     res.send(data);
    // })
}

exports.fetchExpensesById = async (req, res) => {

    const data = await ExpenseModel.findById(req.params.id);
    return res.send(data);

    // fs.readFile("./data.json", "utf-8", (err, data) => {
    //     let formattedData = JSON.parse(data);
    //     // let formattedData = JSON.stringify(data);
    //     let item = formattedData.find(element => element.id === parseInt(req.params.id));
        
    //     if (!item) {
    //         res.status(404);
    //         return res.send({ message: "Data not exist" });
    //     }

    //     res.send(item);
    // })
}

exports.addExpense = async (req, res) => {
    const payload = req.body;
    console.log(payload);

    const expense = new ExpenseModel(payload);
    const item = await expense.save();

    console.log("POST OPERATION, ITEM: ", item);

    res.send({ message: "SUCCESS" })
}

exports.editExpense = async (req, res) => {
    const payload = req.body;
    const id = req.params.id;
    console.log("PUT API: ", payload, id);

    const item = await ExpenseModel.findByIdAndUpdate(id, payload);
    console.log(item);

    res.send({ message: "SUCCESS" })
}

exports.deleteExpense = async (req, res) => {
    const id = req.params.id;
    console.log(`Data to be deleted: ${id}`);

    const item = await ExpenseModel.findByIdAndDelete(id);
    console.log(item);

    res.send({ message: "SUCCESS" })
}
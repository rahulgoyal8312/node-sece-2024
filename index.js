const express = require("express");
const fs = require("fs");

const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(cors());

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// })

app.get("/expenses", (req, res) => {
    fs.readFile("./data.json", "utf-8", (err, data) => {
        // console.log(data);
        res.send(data);
    })
})

app.get("/expenses/:id", (req, res) => {
    fs.readFile("./data.json", "utf-8", (err, data) => {
        let formattedData = JSON.parse(data);
        // let formattedData = JSON.stringify(data);
        let item = formattedData.find(element => element.id === parseInt(req.params.id));
        
        if (!item) {
            res.status(404);
            return res.send({ message: "Data not exist" });
        }

        res.send(item);
    })
})

app.post("/expenses", (req, res) => {
    const payload = req.body;
    console.log(payload);

    res.send({ message: "SUCCESS" })
})

app.put("/expenses/:id", (req, res) => {
    const payload = req.body;
    const id = req.params.id;
    console.log(payload, id);

    res.send({ message: "SUCCESS" })
})

app.delete("/expenses/:id", (req, res) => {
    const id = req.params.id;
    console.log(`Data to be deleted: ${id}`);

    res.send({ message: "SUCCESS" })
})


const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Connected to the server on PORT: ${PORT}`);
});
const express = require('express');
const { config } = require('dotenv');

config();

const app = express();

const mongoDB = [
    {
        "id": 1,
        "name": "Vinod Kumar",
        "age": 23
    },
    {
        "id": 2,
        "name": "Deepak",
        "age": 22
    },
    {
        "id": 3,
        "name": "Tushar",
        "age": 22
    }
];

app.use(express.json());

app.get("/blogs", (req, res) => {

    // res.json([
    //     {
    //         name: "IT Jobs",
    //         decsription: "Booming the It sector in india"
    //     },
    //     {
    //         name: "Sports",
    //         decsription: "India beat pakistan by 6 wickets"
    //     },
    //     req.body
    // ]);

    mongoDB.splice(0, 1);
    res.json(mongoDB);
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
})
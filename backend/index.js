const express = require('express');
const cors = require('cors');
const { connectDB } = require("./conection");
const router = require('./routes/route');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
require("dotenv").config();

const PORT = process.env.PORT;

const app = express();

const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true
};


app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json())



connectDB(process.env.MONGO_URL).then(() => {
    console.log("Mongodb is conected")
}).catch((err) => {
    console.log("error in mongodb", err)
});

app.use(router)

app.get("/kuldeep", (req, res) => {
    res.status(200).send("hello kuldeep")
})




app.listen(PORT, () => {
    console.log("Hey your server started at 9000 PORT")
})
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");


//configure env variable
dotenv.config();

const orderRouter = require("./controller/postOrder");

//connect to db
mongoose.connect(process.env.DB_CONNECT, 
    { useNewUrlParser: true })
    .then(() => {
        console.log("Successfully connected");    
    }).catch(err => {
        console.log('Could not connect to the database.', err);
        process.exit();
    });



//Middlewares
app.use(express.json());

//Routes Middlewares
app.use("/order", orderRouter);

//Configure Server
app.listen(3000, () => console.log("Starting Server"));

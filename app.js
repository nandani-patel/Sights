const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const dotenv = require('dotenv');

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("mongoDB connected succesfully!");
    })
    .catch((err)=>{
        console.log(err);
    });

const pinRoute = require("./routes/pins");
app.use("/pins", pinRoute);

const userRoute = require("./routes/users");
app.use("/user", userRoute);

app.listen(process.env.PORT || 8000, ()=>{
    console.log("app succesfully running at port 8000;");
});

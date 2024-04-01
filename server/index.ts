const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");


dotenv.config();

mongoose.connect(process.env.MONGODB_URL, {
    userNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("Database connected")
}).catch((error:Error)=>{
    console.log("databse connection failed....",error)
})


app.listen(8800, () => {
  console.log("Server is running on port 3000");
});

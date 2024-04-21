const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");


dotenv.config();
const db = process.env.MONGODB_URL;
console.log("db",db)

mongoose.connect(process.env.MONGODB_URL, {
    
}).then(()=>{
    console.log("Database connected")
}).catch((error:Error)=>{
    console.log("databse connection failed....",error)
})
app.use(express.json());
app.use("/server/auth", authRoute);


app.listen(8080, () => {
  console.log("Server is running on port 8080");
});

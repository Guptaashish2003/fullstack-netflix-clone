const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const movieRoute = require("./routes/movies");
dotenv.config();
const cors = require('cors');
app.use(cors({
    origin: process.env.FRONTEND_URL as string,
}));
console.log(process.env.FRONTEND_URL as string)




mongoose.connect(process.env.MONGODB_URL, {
    
}).then(()=>{
    console.log("Database connected")
}).catch((error:Error)=>{
    console.log("databse connection failed....",error)
})
app.use(express.json());
app.use("/server/auth", authRoute);
app.use("/server/user", userRoute);
app.use("/server/movies", movieRoute);


app.listen(5500, () => {
  console.log("Server is running on port 5500");
});

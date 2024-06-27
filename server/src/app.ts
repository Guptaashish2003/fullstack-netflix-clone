const dotenv = require("dotenv");
dotenv.config({ path: './.env' });
const express = require("express");
const app = express();
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const movieRoute = require("./routes/movies");
const cors = require('cors');
app.use(cors({
    origin: process.env.FRONTEND_URL as string,
}));
console.log(process.env.FRONTEND_URL as string)




app.use(express.json());
app.use("/server/auth", authRoute);
app.use("/server/user", userRoute);
app.use("/server/movies", movieRoute);

module.exports = app;
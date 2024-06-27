const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const connectDatabase = () => {
    mongoose.connect(process.env.MONGODB_URL, {
    
    }).then(()=>{
        console.log("Database connected")
    }).catch((error:Error)=>{
        console.log("databse connection failed....",error)
    })

    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error:"));
    db.once("open", () => {
        console.log(`Database connected `);
    });
}


module.exports = connectDatabase;

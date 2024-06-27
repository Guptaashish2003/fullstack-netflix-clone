import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    profilePic:{
        type: String,
        default: "",
    },
    userName:{
        type: String,
        required: true,
        unique: true,  
    },
    password: {
        type: String,
        required: true,
    },
    isSuspended: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
},{timestamps: true});


userSchema.methods.getSignedJwtToken = function () {
    return jwt.sign({id: this._id},process.env.SECRET_KEY,{expiresIn: process.env.JWT_COOKIE_EXPIRE});
}



const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
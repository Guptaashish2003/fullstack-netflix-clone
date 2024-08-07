import { Router } from "express";
import User from "../models/User";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";
import sendToken from "../utils/jwtToken";
import { Response } from "express";


const router = Router();

const generateAccessToken = async(id: string) => {
 try {
  const user = await User.findById(id);
  const accessToken = user.getSignedJwtToken();
  await user.save({validateBeforeSave: false});
  return accessToken;  
 } catch (error) {
    console.log("error.......",error);
    Response.json({error: "error while generating token"});
 }

}

// register thie user

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if(!name || !email  || !password){
      return res.status(400).json("All fields are required");
    }
    const existedUser = await User.findOne({email});
    if(existedUser){
      return res.status(400).json("User already exists");
    }
    const user = await User.create({
      name,
      email,
      password,
      userName : email.split("@")[0],
    });
    res.status(201).json({message: "User created successfully", user});
    

  } catch (error) {

    console.log("error.......", error);
    res.status(500).json(error);
    
  }
});

// login the user


router.post("/login", async (req, res: Response) => {
  try {
    const {email,userName,password} = req.body;
    if (!email && !userName) {
      return res.status(400).json("username or email is required");
    }
    if (!password) {
      return res.status(400).json("password is required");
    }
    const user = await User.findOne({
      $or:[{email:email},{userName:userName}]
    })
    if (!user) {
      return res.status(404).json("User not found");
    }
    const isPasswordValid = await user.matchPassword(password);
    if (!isPasswordValid) {
      return res.status(401).json("Invalid credentials");
    }
    const accessToken=await generateAccessToken(user._id);
    // console.log("accessToken.......",accessToken);
    const loggedInUser = {
      name: user.name,
      email: user.email,
      userName: user.userName,
      isAdmin: user.isAdmin,
      profilePic: user.profilePic,
      accessToken
    };
   
  // use send token function to send the token
    sendToken(user, accessToken,res);


  } catch (error) {
    console.log("error.......", error);
    res.status(500).json(error);
    
  }
  
});

// logout the user

router.post("/logout", (req, res: Response) => {
  res.clearCookie("token").send("Logged out successfully");
  res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
});

module.exports = router;

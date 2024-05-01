import { Router} from "express";
import User from "../models/User";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";



const router = Router();

// register thie user

router.post("/register",async (req,res)=>{
    const newUser =  new User({
        name: req.body.name,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password,process.env.SECRET_KEY).toString(),
        userName:req.body.email.split("@")[0]
    });
    try {
        if(!newUser.name || !newUser.email || !newUser.password){
            return res.status(400).json("Please fill all the fields");
        }
        const alreadyExist = await User.findOne({email: newUser.email});
        if(alreadyExist){
            return res.status(409).json({message: "User already exist"});
        }
        const user = await User.create(newUser)
        return res.status(200).json({
            success: true,
            message: "User created",
            data: user
        });
    } catch (error) {
        console.log("error,,,,",error)
        res.status(500).json(error);
    }
})

// login the user

router.post("/login",async (req,res)=>{
    try {
        const user = await User.findOne({
            email: req.body.email
        }); 
        console.log(user)
        if(!user){
            return res.status(401).json("Wrong credentials");
        }
        const bytes = CryptoJS.AES.decrypt(user.password,process.env.SECRET_KEY);
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
        console.log({originalPassword:originalPassword,password:req.body.password})
        if(originalPassword !== req.body.password){
            return res.status(401).json("Wrong credentials");
        }
        const accessToken = jwt.sign({id: user._id,isAdmin: user.isAdmin},process.env.SECRET_KEY,{expiresIn: "5d"});
        const {password, ...info} = user._doc;
        res.status(200).json({...info,accessToken});
    } catch (error) {
        console.log("error,,,,",error)
        res.status(500).json(error);
    }
})

module.exports = router;
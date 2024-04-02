import { Router} from "express";
import User from "../models/User";



const router = Router();

// register thie user

router.post("/register",async (req,res)=>{
    const newUser =  new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });
    console.log("newUser",newUser)
    try {
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (error) {
        console.log("error,,,,",error)
        res.status(500).json(error);
    }
})

module.exports = router;
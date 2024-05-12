import { Router } from "express";
import User from "../models/User";
import CryptoJS from "crypto-js";
import { Request,Response } from "express";
import {verify} from "../verifyToken";
export interface IGetUserAuthInfoRequest extends Request {
    user: {
        id: string;
        isAdmin: boolean;
    } // or any other type
  }

const router = Router();

router.put("/:id/update", verify, async  (req:IGetUserAuthInfoRequest, res:Response) => {
    
    const {email,userName,name} = req.body;
    if(req.user.id === req.params.id || req.user.isAdmin){
        if(req.body.password){
            req.body.password = CryptoJS.AES.encrypt(req.body.password,process.env.SECRET_KEY).toString();
        }
        console.log("req.body",req.body)
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id
            ,{
                email:email,
                userName:userName,
                name:name,
            });
            console.log("updatedUser",updatedUser)
            return res.status(200).json({user:updatedUser, message: "User updated successfully"});
        } catch (error) {
            console.log(error)
            res.status(500).json(error);
        }
    }
    else{
        res.status(403).json({message:"You can update only your account!"});
    }

});

// suspend a user

router.put("/suspend/:id",verify,async (req:IGetUserAuthInfoRequest,res:Response)=>{
    if(req.user.isAdmin){
        try {
            const user = await User.findByIdAndUpdate({_id: req.params.id},{
                isSuspended: true
            });
            if(!user){
                return res.status(404).json({message: "User not found"});
            }
            return res.status(200).json({message: "User suspended successfully",user:user});
            
        } catch (error) {
            console.log("error.......",error)
            return res.status(500).json("Internal server error");
        }
    }else{
        return res.status(403).json({message: "You are not authorized to suspend a user"});
    }

})
// Get a user

router.get("/:id",verify,async (req:IGetUserAuthInfoRequest,res:Response)=>{
    if(req.user.id === req.params.id || req.user.isAdmin){
        try {
            const user = await User.findById(req.params.id);
            if(!user){
                return res.status(404).json("User not found");
            }
            const {password, ...info} = user._doc;
            return res.status(200).json(info);
        } catch (error) {
            console.log("error.......",error)
            return res.status(500).json("Internal server error");
        }
    }else{
        return res.status(403).json("You can only get your account details");
    }
})

// Get all users

router.get("/",verify,async( req:IGetUserAuthInfoRequest,res:Response)=>{
    // const query = req.query.new;
    if(req.user.isAdmin){
        try {
            const users = await User.find();
            if(!users){
                return res.status(404).json("No user found");
            }
            const totalUsers = users.length;
            return res.status(200).json({total:totalUsers,users:users,message:"Users fetched successfully"});

            
        } catch (error) {
            console.log("error.......",error)
            return res.status(500).json({message:"Internal server error"});
            
        }
    }
})

// get user stats
// router.get("/stats",verify,async (req:IGetUserAuthInfoRequest,res:Response)=>{
//     const today = new Date();
//     const lastYear = new Date(today.setFullYear(today.getFullYear()-1));
//     const monthsArray= ["January","February","March","April","May","June","July","August","September","October","November","December"];
//     try {
//         const data = await User.aggregate([
//            {
//                 $project:{
//                      month: {$month: "$createdAt"}
//                 }
//               },
//               {
//                 $group:{
//                      _id: "$month",
//                      total: {$sum: 1}
//                 }
//            }
//         ]);
//         return res.status(200).json({data:data,message:"User stats fetched successfully"});
//     } catch (error) {
//         console.log("error.......",error)
//         return res.status(500).json({message:"Internal server error"});
//     }
// })

module.exports = router;

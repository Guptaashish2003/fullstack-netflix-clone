import { Request,Response,NextFunction } from "express";
import jwt  from "jsonwebtoken";
interface User{
    id: string;
    isAdmin: boolean;

}

export const verify = (req:any,res:Response,next:NextFunction)=>{
    const authHeader = req.headers.cookie as string;
    console.log("authHeader...........",req.headers.cookie)
    if(authHeader){
        const token = authHeader.split("token=")[1];
        console.log("token.......",token)
        jwt.verify(token,process.env.SECRET_KEY,(err:any,user:User)=>{
            try {
                console.log("user.......",err,user)
                if(err){
                    return res.status(403).json({message: "Token is not valid!"});
                }
                req.user = user;
                next();
                
            } catch (error) {
                console.log("error.......",error)
                return res.status(500).json(error);
                
            }
        });
    }else{
        return res.status(401).json("You are not authenticated!");
    }
}
import { Router,Request,Response } from "express";
import Movie from "../models/Movie";
import {verify} from "../utils/verifyToken";

import {IGetUserAuthInfoRequest} from "./user";

const router = Router();

// create a movie

router.post("/",verify,async (req:IGetUserAuthInfoRequest,res:Response)=>{
    if(req.user.isAdmin){
        const newMovie = new Movie(req.body);
        try {
            const savedMovie = await newMovie.save();
            return res.status(200).json({Movie:savedMovie,message: "Movie created successfully"});
        } catch (error) {
            console.log("error.......",error)
            return res.status(500).json(error);
        }
    }else{
        return res.status(403).json("You are not authorized to create a movie");
    }
});

// update a movie
router.put("/:id",verify,async (req:IGetUserAuthInfoRequest,res:Response)=>{
    if(req.user.isAdmin){
        try {
            const updatedMovie = await Movie.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },{new:true});
            return res.status(200).json({Movie:updatedMovie,message: "Movie updated successfully"});
        } catch (error) {
            console.log("error.......",error)
            return res.status(500).json(error);
        }
    }
    else{
        return res.status(403).json("You are not authorized to update a movie");
    }
});


// delete a movie

router.delete("/:id",verify,async (req:IGetUserAuthInfoRequest,res:Response)=>{
    if(req.user.isAdmin){
        try {
            await Movie.findByIdAndDelete(req.params.id);
            return res.status(200).json({message: "Movie deleted successfully"});
        } catch (error) {
            console.log("error.......",error)
            return res.status(500).json(error);
        }
    }
    else{
        return res.status(403).json("You are not authorized to delete a movie");
    }
}
);

// get a movie

router.get("/find/:id",verify,async (req:IGetUserAuthInfoRequest,res:Response)=>{
    try {
        const movie = await Movie.findById(req.params.id);
        if(!movie){
            return res.status(404).json({message: "Movie not found"});
        }
        return res.status(200).json(movie);
    } catch (error) {
        console.log("error.......",error)
        return res.status(500).json(error);
    }
});

// get all movies

router.get("/all",async (req:IGetUserAuthInfoRequest,res:Response)=>{
    console.log("hjellllllllllllllllllllllllllll")
    const query = req.query.new;
    try {
        const movies = query ? await Movie.find().sort({createdAt:-1}).limit(5) : await Movie.find();
       
        return res.status(200).json({movies:movies,message: "Movies fetched successfully"});
    } catch (error) {
        console.log("error.......",error)
        return res.status(500).json(error);
    }
}
);

// get random movie

router.get("/random",verify,async (req:IGetUserAuthInfoRequest,res:Response)=>{
    const type = req.query.type;
    let movie;
    try {
        if(type === "series"){
            movie = await Movie.aggregate([
                {$match:{isSeries:true}},
                {$sample:{size:1}}
            ]);
        }else{
            movie = await Movie.aggregate([
                {$match:{isSeries:false}},
                {$sample:{size:1}}
            ]);
        }
        return res.status(200).json({movie:movie,message: "Random movie fetched successfully"});
    } catch (error) {
        console.log("error.......",error)
        return res.status(500).json(error);
    }
}
);

module.exports = router;
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
        const id = req.params.id;
        console.log("id.......",id)
        const movie = await Movie.findById(req.params.id);
        // console.log("movie.......",movie)
        if(!movie){
            return res.status(404).json({message: "Movie not found"});
        }
        const fetchedMovie ={
            id:movie._id,
            title:movie.title,
            genre:movie.genre,
            year:movie.year,
            limit:movie.limit,
            isSeries:movie.isSeries,
            trailer:movie.trailer,
            video:movie.video,
            img:movie.img,
            imgTitle:movie.imgTitle,
            imgSm:movie.imgSm,
            plot:movie.plot,
            cast:movie.cast,
            director:movie.director,
            writer:movie.writer,
            runtime:movie.runtime,
            imdb:movie.imdb,
            createdAt:movie.createdAt,
            updatedAt:movie.updatedAt,
            __v:movie.__v
        }
        return res.status(200).json({movie:fetchedMovie,message: "Movie fetched successfully"});
    } catch (error) {
        console.log("error.......",error)
        return res.status(500).json(error);
    }
});

// get all movies

router.get("/all",verify,async (req:IGetUserAuthInfoRequest,res:Response)=>{
    
    const query = req.query.new;
    try {
        const movies = query ? await Movie.find().sort({createdAt:-1}).limit(5) : await Movie.find();
       
        return res.status(200).json({movies:movies,message: "Movies fetched successfully"});
    } catch (error) {
        console.log("error...all movie....",error)
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
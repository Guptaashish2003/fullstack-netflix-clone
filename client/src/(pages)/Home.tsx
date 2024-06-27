import React from "react";
import Card from "../components/tools/Card";
import NavBar from "../components/MainPage/NavBar";
import BannerSwiper from "../components/MainPage/BannerSwiper";
import axios from "axios";
import { useEffect, useState } from "react";
const Home = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const res = await axios.get("/movies/all");
      
      if(res.status === 200){
        
        setMovies(res.data.movies)
      }
    } catch (error) {
      // console.log(error);
    }
  }
  console.log("movies../.................",movies);
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      className=""
    >
      <NavBar />
      <BannerSwiper />
      <div className="h-full w-full  "></div>
      <div className="z-10 w-full absolute bg-zinc-900 px-6">
        <h2 className="text-white pt-2 text-3xl">Trending </h2>
        <div className="   mx-auto flex gap-x-2 overflow-x-clip  ">
          {
            movies.map((movie, index) => {
              return <Card key={index} movies={movie} />
            })
          }
          
        </div>

        <h2 className="text-white pt-2 text-3xl">Feature  </h2>
        <div className="   h-[90vh] mx-auto flex gap-x-2 overflow-x-clip ">
          
        </div>
      </div>
    </div>
  );
};

export default Home;

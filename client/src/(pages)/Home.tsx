import React from "react";
import Card from "../components/tools/Card";
import NavBar from "../components/MainPage/NavBar";
const Home = () => {
  return (
    <div
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      className="h-[100vh]"
    >
      <NavBar />
      <div className="backgoundImage   " />
      <div className="h-full w-full  "></div>
      <div className="z-10 absolute bg-zinc-900 px-6">
        <h2 className="text-white pt-2 text-3xl">Trending </h2>
        <div className="   mx-auto flex gap-x-2 overflow-x-clip ">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

        <h2 className="text-white pt-2 text-3xl">Feature  </h2>
        <div className="   h-[90vh] mx-auto flex gap-x-2 overflow-x-clip ">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import Card from "../components/tools/Card";
const Home = () => {
  return (
    <div
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      className="h-[100vh]"
    >
      <div className="backgoundImage   " />
      <div className="h-full w-full  "></div>
      <div className=" bg-zinc-900 h-[90vh] px-6 mx-auto flex gap-x-2 overflow-clip ">


      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      </ div>
    </div>
  );
};

export default Home;

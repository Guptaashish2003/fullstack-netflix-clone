import React from "react";
import LandingNav from "./LandingNav";
import { FaAngleRight } from "react-icons/fa";
import Button from "../tools/Button";

const LandingPage = () => {
  return (
    <>
      <div
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        className="h-[100vh]"
      >
        <LandingNav />
        <div className="backgoundImage   " />
        <div className="flex flex-col mb-8 w-full  gap-y-3 tracking-wide justify-center items-center h-[60vh]">
          <p className="text-white text-6xl font-bold ">
            Unlimited movies, TV shows and more
          </p>
          <p className="text-white text-3xl font-semibold">
            Watch your favorite movies and TV shows{" "}
          </p>
          <p className="text-white text-2xl font-semibold">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="flex gap-4 mt-4 w-1/2 justify-center items-center">
            <input
              type="text"
              className=" w-3/5 text-2xl h-20 p-4 bg-transparent rounded-md border-2 border-white text-white"
              placeholder="Email address"
            />
            <Button
              icons={<FaAngleRight />}
              value="Get Started"
              className=" h-20 w-60 text-3xl bg-red-700 text-white rounded-md"
            />
          </div>
        </div>
      </div>

      {/* make after pages like attach videos and other thinghs */}
    </>
  );
};

export default LandingPage;

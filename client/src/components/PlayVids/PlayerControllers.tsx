import React from "react";
import { PlayerControllersProps } from "../../interface";
import { FaPlay, FaPause } from "react-icons/fa";
import { TbPictureInPictureOn, TbPictureInPictureOff } from "react-icons/tb";
import { handlePlayPause, handlePictureInPicture } from "./_hooks";

const PlayerControllers = ({
  pause,
  setPause,
  videoRef,
  className,
  pictureInPicture,
  setPictureInPicture,
  isFullScreen,
  setIsFullScreen,
  isTheaterMode,
  setIsTheatreMode,
  isMuted,
  setIsMuted,
}: PlayerControllersProps) => {
  return (
    <div
      className={`${className} absolute  flex inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.75)] to-transparent `}
    >
      <div className="flex absolute left-0 bottom-0 p-2 gap-4 items-center justify-center cursor-pointer transition-transform  text-white duration-300 ease-in-out ">
        <span
          className="cursor-pointer"
          onClick={() => handlePlayPause({ pause, setPause, videoRef })}
        >
          {pause ? (
            <FaPlay
              size={18}
              className="transition-opacity duration-300 ease-in-out opacity-80 hover:opacity-100 "
            />
          ) : (
            <FaPause
              size={18}
              className="transition-opacity duration-300 ease-in-out opacity-80 hover:opacity-100 "
            />
          )}
        </span>
        {isFullScreen ? (
          <span
          className=" text-white duration-300 opacity-80 hover:opacity-100  ease-in-out cursor-pointer hover:scale-105"
          onClick={() =>
            handlePictureInPicture({
              pictureInPicture,
              setPictureInPicture,
              videoRef,
            })
          }
        >
          {pictureInPicture ? (
            <TbPictureInPictureOff size={24} />
          ) : (
            <TbPictureInPictureOn size={24} />
          )}
        </span>):""}
        <div
          className={`text-white duration-300 border-[3px] my-auto ${isTheaterMode?"!h-0.5 w-6":"h-2 w-8"} p-2 ease-in-out cursor-pointer opacity-80 hover:opacity-100 ${
            isFullScreen ? "" : ""
          } `}
          onClick={() => setIsTheatreMode && setIsTheatreMode(!isTheaterMode)}
            
        ></div>
      </div>
    </div>
  );
};

export default PlayerControllers;

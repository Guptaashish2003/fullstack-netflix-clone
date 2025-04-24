import React, { useEffect, useRef, useState } from "react";
import { PlayvideoProps } from "../../interface";
import PlayerControllers from "./PlayerControllers";
import { handleFullScreen, handlePlayPause } from "./_hooks";

interface PlayerProps {
  movie: PlayvideoProps;
}

const Player = ({ movie }: PlayerProps) => {
  console.log("moview", movie.video);
  const [pause, setPause] = useState<Boolean>(true);
  const [pictureInPicture, setPictureInPicture] = useState<Boolean>(false);
  const [isFullScreen, setIsFullScreen] = useState<Boolean>(false);
  const [isMuted, setIsMuted] = useState<Boolean>(false);
  const [isTheatreMode, setIsTheatreMode] = useState<Boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const fullScreenRef = useRef<HTMLDivElement>(null);
  console.log("fullscrenn............", isFullScreen);
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault(); // Prevent scrolling when pressing spacebar
        handlePlayPause({ pause, setPause, videoRef });
      }

      if (e.code === "Escape") {
        console.log("pressseeeeeeeeeeeeeeeeddd")
        if (isFullScreen) {
          handleFullScreen({ isFullScreen, setIsFullScreen, fullScreenRef });
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [pause, isFullScreen, videoRef, fullScreenRef, setPause, setIsFullScreen]);
  return (
    <div
      ref={fullScreenRef}
      className={`relative ${
        isTheatreMode ? "!max-h-[90vh] !max-w-full " : ""
      } ${
        isFullScreen ? "!max-h-screen !max-w-full" : ""
      }  w-[90%] max-w-[1000px]  flex justify-center m-auto group pt-32   `}
    >
      {/* Player Controllers, visible on hover */}
      <PlayerControllers
        pause={pause}
        isFullScreen={isFullScreen}
        setIsFullScreen={setIsFullScreen}
        isMuted={isMuted}
        setIsMuted={setIsMuted}
        isTheaterMode={isTheatreMode}
        setIsTheatreMode={setIsTheatreMode}
        pictureInPicture={pictureInPicture}
        setPictureInPicture={setPictureInPicture}
        setPause={setPause}
        videoRef={videoRef}
        fullScreenRef={fullScreenRef}
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />

      <video
        onClick={() => handlePlayPause({ pause, setPause, videoRef })}
        ref={videoRef}
        className={` w-full bg-black`}
        src={`${movie.video ? "/Deadpool.mp4" : "/Deadpool.mp4"}`}
      />
    </div>
  );
};

export default Player;

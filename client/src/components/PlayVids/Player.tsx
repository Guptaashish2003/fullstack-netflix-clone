import React, { useEffect, useRef, useState } from 'react'
import { PlayvideoProps } from '../../interface'
import PlayerControllers from './PlayerControllers'
import { handlePlayPause } from './_hooks'


interface PlayerProps {
    movie: PlayvideoProps
}

const Player = ({ movie }: PlayerProps) => {
    console.log("moview",movie.video)
    const [pause, setPause ] = useState<Boolean>(true)
    const [pictureInPicture, setPictureInPicture] = useState<Boolean>(false)
    const [isFullScreen, setIsFullScreen] = useState<Boolean>(false)
    const [isMuted, setIsMuted] = useState<Boolean>(false)
    const [isTheatreMode, setIsTheatreMode] = useState<Boolean>(false)
    const videoRef = useRef<HTMLVideoElement>(null)
    let videosize:string="h-auto"
  useEffect(() => {
    if(isTheatreMode){
      videosize = "max-h-[80vh]"
    }
    else if (isFullScreen){
      videosize = "h-screen"
    }
  }, [pause, pictureInPicture, isFullScreen, isMuted, isTheatreMode])
    

    return (
      <div  className='relative w-[90%] max-w-[1000px] flex justify-center m-auto group pt-32 '>
        {/* Player Controllers, visible on hover */}
        <PlayerControllers pause={pause} isFullScreen={isFullScreen} setIsFullScreen={setIsFullScreen} isMuted={isMuted} setIsMuted={setIsMuted} isTheaterMode={isTheatreMode} setIsTheatreMode={setIsTheatreMode}  pictureInPicture ={pictureInPicture} setPictureInPicture={setPictureInPicture} setPause={setPause} videoRef={videoRef} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <video
          ref={videoRef}
          // onClick={() => handlePlayPause({ pause, setPause, videoRef })}
          className={`w-full ${videosize} `}
          src={`${movie.video ? "/Deadpool.mp4" : "/Deadpool.mp4"}`}
        />
      </div>
    );
}

export default Player
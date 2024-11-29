import { PlayerControllersProps } from "../../interface";

export const handlePlayPause = ({
    pause,
    setPause,
    videoRef,
  }: PlayerControllersProps) => {
    if (setPause) {
      setPause(!pause);
    }
    if (videoRef && videoRef.current) {
      if (pause) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };
  
  export const handlePictureInPicture = async ({pictureInPicture,setPictureInPicture,videoRef}:PlayerControllersProps) => {
    console.log("hellowowww")
    if (setPictureInPicture) {
      setPictureInPicture(!pictureInPicture);
    }
    try {
        if (videoRef?.current) {
          if (!pictureInPicture) {
            // Enter Picture-in-Picture mode
            await videoRef.current.requestPictureInPicture();
            if (setPictureInPicture) {
              setPictureInPicture(true); // Update state after successfully entering PiP
            }
          } else {
            // Exit Picture-in-Picture mode
            if (document.pictureInPictureElement) {
              await document.exitPictureInPicture();
              if (setPictureInPicture) {
                setPictureInPicture(false); // Update state after successfully exiting PiP
              }
            }
          }
        }
      } catch (error) {
        console.error("Error handling Picture-in-Picture:", error);
      }
  }
  
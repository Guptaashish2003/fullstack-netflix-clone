export interface PlayBtnProps {
  id?: string;
  size?: number;
}
export interface PlayvideoProps {
  id?: string;
  video?: string;
  title?: string;
  plot?: string;
  img?: string;
  imgTitle?: string;
  imgSm?: string;
  trailer?: string;
  year?: string;
  genre?: string;
  isSeries?: boolean;
  imdb?: {
    id: string;
    rating: number;
    votes: number;
  };
  director?: string;
  writer?: string;
  cast?: string[];
  runtime?: string;
  createdAt?: Date;
  updatedAt?: Date;
  __v?: number;
}


export interface PlayerControllersProps {
  pause?: Boolean;
  setPause?: React.Dispatch<React.SetStateAction<Boolean>>;
  videoRef?: React.RefObject<HTMLVideoElement>;
  className?: string;
  pictureInPicture?: Boolean;
  setPictureInPicture?: React.Dispatch<React.SetStateAction<Boolean>>;
  isMuted?: Boolean;
  setIsMuted?: React.Dispatch<React.SetStateAction<Boolean>>;
  isFullScreen?: Boolean;
  setIsFullScreen?: React.Dispatch<React.SetStateAction<Boolean>>;
  fullScreenRef?: React.RefObject<HTMLDivElement>;
  isTheaterMode?: Boolean;
  setIsTheatreMode?: React.Dispatch<React.SetStateAction<Boolean>>;

}
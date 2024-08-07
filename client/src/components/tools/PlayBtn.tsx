import React from 'react'
import { FaPlay } from "react-icons/fa6";
import { PlayBtnProps } from '../../interface';
import { useNavigate } from 'react-router-dom';
const PlayBtn:React.FC<PlayBtnProps> = ({id,size}) => {
    const navigate = useNavigate();
    console.log(id)
    
  return (
    <div>
        <FaPlay size={size} onClick={()=>{ navigate(`/Play/${id}`)}}/>
    </div>
  )
}

export default PlayBtn
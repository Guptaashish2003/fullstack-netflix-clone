import React from 'react'
import PlayBtn from './PlayBtn';
import Favorite from './Favorite';
import { Navigate } from 'react-router-dom';

interface IMovies {
  _id?: string;
  img?: string;
  title?: string;
  year?: string;
  genre?: string;
  duration?: string;
  limit?: string;
  plot?: string;
  key: number;
  onclick?: ()=>void;
}

const Card: React.FC<{ movies: IMovies }> = ({ movies }) => {
  // destructure the movie object
  console.log("movies",movies)
  const {_id,img, title, year, plot} = movies;
  console.log("id........................",_id)
  const sendVideoPage = ()=>{
    console.log("sendVideoPage",movies);

    // return <Navigate to={`/${id}`} />  
  }
  return (
    <div onClick={sendVideoPage} className='group bg-zinc-900 h-[11vw]  col-span relative mt-6  '>
        <img src={img?img:"12th-Fail.jpg"} alt={title?title:"img"} className='cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90  sm:group-hover:opacity-0 w-full h-[11vw]
         ' />
         <div className='opacity-0 absolute top-0 transition duration-400 z-10 invisible sm:visible delay-300 w-full scale-0 group-hover:scale-110 group-hover:translate-x-[1.5vw] group-hover:translate-y-[-6vw]  group-hover:opacity-100  '>
         <img src={img?img:"12th-Fail.jpg"} alt={title?title:"img"}  className='cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full h-full     ' />
         <div className=' z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md    '>
          <div className='flex flex-row items-center gap-3' >
            <div className='cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300' >
            <PlayBtn id={_id}  size={29}/>
            </div>
            <Favorite />
          </div>
          <p className='text-green-400 font-semibold mt-4   ' >
            New <span className='text-white  ' >{year?year:2024}</span>
          </p>
          <div className='flex flex-row mt-4 gap-2 items-center'>
            <p className='text-white text-[10px] lg:text-sm'> {title?title:" Lorem, ipsum dolor sit amet"} </p>
          </div>
          <div className='flex flex-row mt-4 gap-2 items-center'>
            <p className='text-white text-[10px] lg:text-sm'> {plot?plot.substring(0,150):"Lorem  Lorem, ipsum dolor sit amet Lorem, ipsum dolor sit amet"}. </p>
          </div>

         </div>

  
         </div>
        
        
       
    </div>
  )
}

export default Card
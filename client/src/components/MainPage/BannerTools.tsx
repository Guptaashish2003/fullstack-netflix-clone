import React from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'

export const BannerVidsTools = () => {
  return (
    <div className='relative h-[56.25vw]'>
        <video autoPlay loop  poster='marvelBanner.png' muted className=' h-[56.25vw] w-full brightness-[60%]' src="Deadpool.mp4"></video>
        <div className='absolute top-[30%] md:top-[40%] ml-4 md:ml-16   '>
            <p className=' text-white text-xl md:text-5xl h-full lg:w-[60%]  font-bold drop-shadow-xl  ' >
            {`Deadpool Vol. 1 `}
            </p>
            <p className='text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[60%]   '>
            Deadpool must make his way through a battalion of mercenaries in Sarajevo, Yugoslavia.
            </p>
            <div className='flex gap-2'>
                <button className='bg-red-500 text-white px-4 py-2 mt-4 md:mt-8 rounded-md  md:py-2  md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center  transitionhover:bg-red-600'>Watch Now</button>
                <button className='bg-white text-white bg-opacity-30 md:mt-8  rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20 transition  '><AiOutlineInfoCircle className='mr-1'/> More Info</button>
            </div>

        </div>


    </div>
  )
}
export const BannerImgTools = () => {
  return (
    <div className='relative h-[56.25vw]'>
        <img src="marvelBanner.png" className=' h-[56.25vw] w-full brightness-[60%]' alt="deadPool" />
        <div className='absolute top-[30%] md:top-[40%] ml-4 md:ml-16   '>
            <p className=' text-white text-xl md:text-5xl h-full lg:w-[60%]  font-bold drop-shadow-xl  ' >
            {`Deadpool Vol. 1 `}
            </p>
            <p className='text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[60%]   '>
            Deadpool must make his way through a battalion of mercenaries in Sarajevo, Yugoslavia.
            </p>
            <div className='flex gap-2'>
                <button className='bg-red-500 text-white px-4 py-2 mt-4 md:mt-8 rounded-md  md:py-2  md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center  transitionhover:bg-red-600'>Watch Now</button>
                <button className='bg-white text-white bg-opacity-30 md:mt-8  rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20 transition  '><AiOutlineInfoCircle className='mr-1'/> More Info</button>
            </div>

        </div>


    </div>
  )
}


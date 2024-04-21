import React from 'react'
import { IoMdAdd } from "react-icons/io";

const Favorite = () => {
  return (
    <div className='cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300' onClick={()=>{}}>
        <IoMdAdd size={30} />

           
    </div>
  )
}

export default Favorite
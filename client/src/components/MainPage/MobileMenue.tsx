import React from 'react'

interface MobileMenueProps {
    visible?:boolean
}

const MobileMenue:React.FC<MobileMenueProps> = ({visible}) => {
    if(!visible) return null
  return (
    <div className=' bg-black w-56 absolute top-8 left-0 py-5 flex-col flex border-2 border-gray-800'>
        <div className=' flex flex-col gap-4'>
            <div className=' px-4 text-center text-white hover:underline '>Home</div>
            <div className=' px-4 text-center text-white hover:underline '>Series</div>
            <div className=' px-4 text-center text-white hover:underline '>Films</div>
            <div className=' px-4 text-center text-white hover:underline '>New & Popular</div>
            <div className=' px-4 text-center text-white hover:underline '>My List</div>
            <div className=' px-4 text-center text-white hover:underline '>Browse By Language</div>

        </div>

    </div>
  )
}

export default MobileMenue
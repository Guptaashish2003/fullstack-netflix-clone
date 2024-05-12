import React, { useState } from 'react'
import {BsSearch} from 'react-icons/bs'

const SearchBar = () => {
    const [openSearchBar, setOpenSearchBar] = useState(false)
  return (
    <div>
        <div className='flex flex-row items-center gap-2'>
            {
                openSearchBar && (
                    <input type="text" placeholder='Search for movies, TV shows, genres, and more' className='w-96 text-zinc-900 h-8 transition duration-200  bg-opacity-50 rounded-md px-4'/>
                )
            }
            <BsSearch onClick={() => setOpenSearchBar(!openSearchBar)} />
        </div>
    </div>
  )
}

export default SearchBar
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PlayvideoProps } from '../../interface'
import Player from './Player'
import NavBar from '../MainPage/NavBar'
const Play = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState<PlayvideoProps>({})
  const getMoiveById = async () => {
    try {
      const response = await fetch(`/movies/find/${id}`)
      if(response.status === 200){
        const data = await response.json()
        setMovie(data.movie)
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getMoiveById()
  }, [])

  return (
    <div   className='w-full min-h-[100vh] bg-[rgb(0,0,0,0.86)]'> 
    <NavBar />
    <Player movie={movie} />
      
    </div>
  )
}

export default Play
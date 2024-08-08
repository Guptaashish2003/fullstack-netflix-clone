import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PlayvideoProps } from '../../interface'

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
    <div className='text-black z-50 bg-slate-500'> 
      <video className='w-1/2' src= {`${movie.video}`}></video>
    </div>
  )
}

export default Play
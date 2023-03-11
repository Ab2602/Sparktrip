import React from 'react'
import video from '../assests/video/v1.mp4'

const Home_content = () => {
  return (
    <div className='flex justify-center h-screen w-screen items-center absolute top-0 left-0'>
        <div style={{color:'white'}} className="wrapper w-1/2 m-auto">
            Find your perfect getaway: Search our extensive database of :
            <i class="typing-demo">Flights, Hotels, and Activities.</i>
        </div>

        <div className='w-1/2'>
            <video src={video} autoplay loop className='bg-transparent rounded-full m-auto'></video>
        </div>

    </div>
  )
}

export default Home_content

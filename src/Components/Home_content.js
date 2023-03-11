import React from 'react'
import video from '../assests/video/v1.mp4'

const Home_content = () => {
  return (
    <div className='flex justify-centre h-screen items-center absolute top-0 left-0'>
        <div style={{color:'white'}} className="wrapper w-1/2">
        Find your perfect getaway: Search our extensive database of :
          <span  class="typing-demo">
            Flights, Hotels, and Activities.
          </span>
        </div>

        <div className='w-1/2'>
            {/* <video src={video} autoplay loop className='bg-transparent'></video> */}
        </div>

    </div>
  )
}

export default Home_content
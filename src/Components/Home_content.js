import React from 'react'
// import video from '../assests/video/c2.gif'
import Typewriterco from './Typewriterco'
const Home_content = () => {
  return (
    <div className='flex justify-center absolute h-screen w-screen items-center top-0 left-0'>
        <div style={{color:'#ffffffc4'}} className=" w-1/2 m-5 text-5xl leading-relaxed ">
            <span style={{ display: 'inline',color:'#ffffffc4'}}>Find your <br /> perfect getaway: <br />
              Search our extensive  <br /> database of : </span>
            <Typewriterco  style ={{display: 'inline'}}/>
        </div>

        <div className='w-1/2'>
            {/* <video src={video} autoplay loop muted className='bg-transparent rounded-full m-auto'></video> */}
        </div>
    </div>
    
  )
}

export default Home_content

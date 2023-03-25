import React,{useState} from 'react'
// import video from '../assests/video/c2.gif'
import Typewriterco from './Typewriterco'

import '../../index.css'
const Home_content = () => {
  
  return (
    
      
    <div className='flex justify-center absolute h-screen w-screen items-center top-0 left-0'>
     
        <div style={{color:'#ffffffc4'}} className="  w-1/2 m-5 text-4xl leading-relaxed ">
       
            <span className='text-type ' style={{ display: 'inline',color:'#ffffffc4',cursor:'context-menu'}}>Find your <br /> perfect getaway: <br />
              Search our extensive  <br /> database of </span>
            <Typewriterco  style ={{display: 'inline'}}/>
            <br />
            <button className='lmfb'>Learn More</button>
            <button className='lmfb2'>Find Best Stays</button>
        </div>

        <div className='w-1/2'>
            {/* <video src={video} autoplay loop muted className='bg-transparent rounded-full m-auto'></video> */}
        </div>
     
    </div>
    
    
  )
}

export default Home_content
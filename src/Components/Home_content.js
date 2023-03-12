import React from 'react'
import video from '../assests/video/v1.mp4'
import { useTypewriter,Cursor } from 'react-simple-typewriter'

const Home_content = () => {
  const{text}= useTypewriter=({
    words: ['FLights','Hotels','And','Activities'],
    loop: {},
  });
  
  return (
    <div className='flex justify-center h-screen w-screen items-center absolute top-0 left-0'>
     <div style={{marginRight:'65%',marginBottom:'20%' ,color:'white'}} > Find your perfect getaway: Search our extensive database of: </div>
    <span>{text}</span>
    <Cursor/>
   

    </div>
    

    
  )
}

export default Home_content

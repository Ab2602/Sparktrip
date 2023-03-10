import React from 'react'
// import logo from '../assests/logo.png'
import image from '../assests/image.png'

const Navbar = () => {
  return (
    <div className='flex h-20 items-center justify-between fixed top-0 inset-x-0 z-50 backdrop-blur-lg backdrop-filter bg-opacity-75'>
        {/* Left */}
        <div className='image flex ml-14'>
            <picture className='flex items-center'>
                {/* <source media="(min-width: 1000px)" srcset={logo}/> */}
                {/* <source media="(max-width: 769px)" srcset={logo192} className= "ml-8"/> */}
                <img src={image} className='w-47 h-12'alt='Logo'/>
            </picture>
        </div>
        {/* Mid */}
        <div className='hidden md:flex shadow-sm shadow-gray-400 border rounded-full justify-center items-center relative ml-24'>
            <div className='flex  w-max absolute text-white pr-12 pl-6'>
                <button className='font-semibold  pr-4'>Anywhere</button>
                <button className='font-semibold  pr-4'>Any week</button>
                <button className='font-semibold  pr-4'>Add guests</button>
            </div>
        </div>
        {/* Right */}
        <div className='flex items-center mr-14 cursor-pointer'>
            <div className='border flex items-center border rounded-full p-2 '>
                <button className='text-centre w-20 text-white'>Contact</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
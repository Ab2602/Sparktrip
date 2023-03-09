import React from 'react'
import logo from '../assests/logo.png'
import { BiGlobe , BiMenu } from 'react-icons/bi';
import { BsPersonCircle } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';

const Navbar = () => {
  return (
    <div className='flex border-b h-20 items-center justify-between'>
        {/* Left */}
        <div className='image flex ml-14'>
            {/* <img src= {logo} alt=""  className= " w-25 h-8"/> */}
            <picture className='flex items-center'>
                {/* <source media="(min-width: 1000px)" srcset={logo}/> */}
                {/* <source media="(max-width: 769px)" srcset={logo192} className= "ml-8"/> */}
                <img src={logo} className='w-25 h-16'/>
            </picture>
        </div>
        {/* Mid */}
        <div className='hidden md:flex shadow-sm shadow-gray-400 border rounded-full justify-center items-center relative ml-24'>
            <input type="search" placeholder=''className='py-2 w-[20rem] rounded-full' />
            <div className='flex justify-between w-full absolute pr-12 pl-6'>
                <button className='font-semibold border-r pr-4'>Anywhere</button>
                <button className='font-semibold border-r pr-4'>Any week</button>
                <button className='text-gray-500'>Add guests</button>
            </div>
            <div className='bg-[#ff5a60] p-2 rounded-full mr-2 cursor-pointer'>
            <FiSearch  className='text-white cursor-pointer'/>
            </div>
        </div>
        {/* Right */}
        <div className='flex items-center mr-14 cursor-pointer'>
            <p className='font-semibold rounded-full p-1.5 pr-4 pl-4 hover:bg-[#F7F7F7]'>Airbnb your home</p>
            <BiGlobe className='mx-4 hover:bg-[#F7F7F7] text-2xl p-1 rounded-full'/>
            <div className='border flex items-center border rounded-full gap-4 p-2 text-2xl hover: shadow-gray-400'>
                <BiMenu  className=''/>
                <BsPersonCircle className=''/>
            </div>
        </div>
    </div>
  )
}

export default Navbar
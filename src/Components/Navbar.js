import React,{useState} from 'react'
// import logo from '../assests/logo.png'
import image from '../assests/image.png'
import Anywhere from './Anywhere'
import Anyweek from './Anyweek'
import AddGuest from './AddGuest'

const Navbar = () => {
const [openAnywhere, setOpenAnywhere] = useState(false);
const[openAnyweek,setOpenAnyweek]=useState(false);
const[openAddGuest,setOpenAddGuest]=useState(false);



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
            <div className='flex justify-between w-96 absolute text-white mr-11'>
            <div className='links'> <button onMouseEnter={() =>setOpenAnywhere(true)} onMouseLeave={()=> setOpenAnywhere(false)} className='font-semibold  '>Anywhere</button> </div>

            <div className='links'>  <button onMouseEnter={()=>setOpenAnyweek(true)} onMouseLeave={()=>setOpenAnyweek(false)} className='font-semibold  '>Any week</button></div>
            <div className='links'  >  <button onMouseEnter={()=>setOpenAddGuest(true)} onMouseLeave={()=>setOpenAddGuest(false)} className='font-semibold  '>Add guests</button></div>
            </div>
        </div>
        {/* Right */}
        <div className='flex items-center mr-14 cursor-pointer'>
            <div className=' flex items-center' >
            <a style={{color:'white',textDecoration:'none'}} href="#">
		<span></span>
		<span></span>
		<span></span>
		<span></span>
	        Contact</a>
            </div>
        </div>
       {openAnywhere && <Anywhere  />}
       {openAnyweek && <Anyweek/>}
      {openAddGuest && < AddGuest/>} 
    </div>
  )
}
export default Navbar
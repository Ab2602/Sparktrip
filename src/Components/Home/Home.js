import * as React from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import {sliderItems} from './CorouselApi';
import Navbar from './Navbar';
import Home_content from './Home_content';
import Searchbar from './Searchbar';
import Cards from '../HomeCard/Cards.js';
import Footer from '../Footer/Footer';
import {list} from '../HomeCard/Card-List';


function Home() {
const [userInput, setuserInput] = useState("");
const [userList, setUserList] = useState(list);
const addHotel=(e)=>{
    setuserInput(e.target.value);
    const filterData=list.filter((hotel)=>{
        if (userInput ==='') {
            return hotel;
        }
        else if (hotel.state?.toLowerCase()?.includes(userInput?.toLowerCase())){
            return hotel;
        }
    })
    setUserList(filterData)
}

 const images =sliderItems.map((url) => (

        <Carousel.Item interval={3000} wrap>
            <img
                style={{ height: '100vh' }}
                className=" d-block w-full"
                src={url}   
                alt="First slide"
            />
        </Carousel.Item>
      ));
    return(
        <>
        <Navbar />
        <div className='h-3/6'>
        <Carousel controls={false} indicators={false}>{images}</Carousel>
        </div>
        <Home_content />
        <Searchbar
        userData={userInput}
         addItem={addHotel}
         />
        <div className='card-flex'>  

        {userList.map((card,i)=>(
            <Cards key={`card-${i}`} id={card.desc} card={card} /> // card-0 card-1
        ))}
        </div>
        <Footer />
       </>
    );
}
  
  
export default Home;
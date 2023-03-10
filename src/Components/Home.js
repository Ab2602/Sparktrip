import * as React from 'react';
import Carousel from 'react-bootstrap/Carousel';
// eslint-disable-next-line
import 'bootstrap/dist/css/bootstrap.min.css';
import {sliderItems} from './CorouselApi';
import Navbar from './Navbar';
import Home_content from './Home_content';


function Home() {
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
        
       </>
    );
}
  
  
export default Home;
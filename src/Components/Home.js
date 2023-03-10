import * as React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import {sliderItems} from './CorouselApi';
import Navbar from './Navbar';
import '../index.css'

function Home() {
    const images =sliderItems.map((url) => (
        
        <Carousel.Item interval={900}>
            <img style={{height:'100vh'}}
                className="d-block w-100"
                src={url}   
                alt="First slide"
            />
                 
        </Carousel.Item>
      ));
    return(
        <>
        <Navbar />
        <div className='h-3/6'>
        <Carousel controls={false} >{images}</Carousel>
        </div>
        </>
    );
}
  
  
export default Home;
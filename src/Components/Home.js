import * as React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import {sliderItems} from './CorouselApi';

function Home() {
    const images =sliderItems.map((url) => (
        
        <Carousel.Item interval={1000}>
            <img
                className="d-block w-100"
                src={url}   
                alt="First slide"
            />
                 
        </Carousel.Item>
                
       
      ));
    return(

        <div>
            <Carousel>{images}</Carousel>
        </div>
    );
   

     
   
  }
  
  
  export default Home;
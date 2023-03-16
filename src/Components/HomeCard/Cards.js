import React from 'react'
import '../HomeCard/Card.css'
import StarRateIcon from '@mui/icons-material/StarRate';

function Cards() {
  return (
    <div>
      <img className='card-img' style={{borderRadius:'1rem'}} src="https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
      <div className='card-info'> 
      <h4>Place</h4>
      
      <div className='card-rating' >
      <StarRateIcon style={{fontSize:'20px',marginBottom:'10.5px'}}  /> 
      <p style={{marginTop:'7px'}} >4.88</p> 
      </div>
      
      </div>
       <div className='placeinfo' ><h6>Pricing</h6></div>
      </div>
  )
}

export default Cards

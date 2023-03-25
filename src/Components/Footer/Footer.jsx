import React from 'react';
import '../Footer/Footer.css';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';


function Footer() {
  return (
    <>
   
    <div className='footerContainer' >
   
        
            <div className='countrydata' >
            <div><MDBBtn  style={{ backgroundColor: '#0082ca' }} href='https://www.linkedin.com/in/devansh-sharma-4a4a07210/'>
        <MDBIcon fab icon='linkedin-in' />
         </MDBBtn>
         <MDBBtn className='m-1' style={{ backgroundColor: '#333333' }} href='#'>
        <MDBIcon fab icon='github' />
      </MDBBtn> </div>
          
               
            <h7 className='cpr' >©All Rights Reserve Sparktrip.com</h7>
        
            </div>
            <div className='logo'>
                <img src="https://d1epq84pwgteub.cloudfront.net/files/0/sites/3/2017/10/top-5star-hotels.jpg" alt="" />
            </div>


            
       
       
    </div>
    {/* <div className='footerBottom' > </div> */}
    </>
  )
}

export default Footer

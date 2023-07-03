import React from "react";
import { FiSearch } from "react-icons/fi";
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import "react-datepicker/dist/react-datepicker.css";
import '../../index.css'
// import { useState, useRef } from "react";


const Searchbar = (props) => {
  
  return (
    <div className="search_bar bg-white absolute  bottom-10 shadow-sm shadow-gray-400">
      <div className="m-auto flex justify-between content-center">
        <div className="search_content">
          <FiSearch className="inline mb-1.5 text-2xl" />
          <input onChange={props.addItem} type="search" placeholder="Search your fav places" className="ml-3 text-l "/>
        </div>
        {/* <div className="date_picker">
          <input type="date" onChange={handleChange} ref={dateInputRef} className='mt-1'/>
        </div> */}
        <BsFillArrowRightCircleFill className="text-3xl"/>
      </div>
    </div>
  );
};

export default Searchbar;

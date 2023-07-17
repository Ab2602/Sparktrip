import React, { useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import "react-datepicker/dist/react-datepicker.css";
import "../../index.css";

const Searchbar = (props) => {
  return (
    <div className="search_bar bg-white absolute  bottom-10 shadow-sm shadow-gray-400">
      <div className="m-auto flex justify-between content-center">
        <div className="search_content">
          <FiSearch className="inline mb-1.5 text-2xl" />
          <input
            onChange={props.searchCity}
            type="search"
            placeholder="City,State,Country"
            className="ml-3 text-l "
          />
        </div>
        <BsFillArrowRightCircleFill className="text-3xl" />
      </div>
    </div>
  );
};

export default Searchbar;

import React, { useState } from "react";
import image from "../../assests/image.png";
import Anywhere from "../Model/Anywhere";
import Anyweek from "../Model/Anyweek";
import AddGuest from "../Model/AddGuest";

const Navbar = () => {
  const [openAnywhere, setOpenAnywhere] = useState(false);
  const [openAnyweek, setOpenAnyweek] = useState(false);
  const [openAddGuest, setOpenAddGuest] = useState(false);
  return (
    <div className="flex h-20 w-full items-center justify-between fixed top-0 inset-x-0 z-50 backdrop-blur-lg backdrop-filter bg-opacity-75">
      {/* Left */}
      <div className="image flex ml-14">
        <picture className="flex items-center">
          <img src={image} className="w-47 h-12" alt="Logo" />
        </picture>
      </div>
      {/* Mid */}
      <div className="hidden md:flex shadow-sm shadow-gray-400 border rounded-full justify-center items-center relative ml-24">
        <div className="flex justify-between w-96 absolute text-white mr-11">
          <div className="links">
            {" "}
            <button
              onMouseOver={() => setOpenAnywhere(true)}
              className="font-semibold  "
            >
              Anywhere
            </button>{" "}
          </div>

          <div className="links">
            {" "}
            <button
              onMouseOver={() => setOpenAnyweek(true)}
              className="font-semibold    "
            >
              Any week
            </button>
          </div>

          <div className="links">
            {" "}
            <button
              onMouseOver={() => setOpenAddGuest(true)}
              className="font-semibold"
            >
              Add guests
            </button>
          </div>
        </div>
      </div>
      {/* Right */}
      <div className="flex items-center mr-14 cursor-pointer">
        <div className=" flex items-center">
          <a style={{ color: "white", textDecoration: "none" }} href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Contact
          </a>
        </div>
      </div>
      {openAnywhere && (
        <Anywhere handleAnywhere={(revProp) => setOpenAnywhere(revProp)} />
      )}
      {openAnyweek && (
        <Anyweek handleAnyweek={(revProp) => setOpenAnyweek(revProp)} />
      )}
      {openAddGuest && (
        <AddGuest handleAddGuest={(revProp) => setOpenAddGuest(revProp)} />
      )}
    </div>
  );
};
export default Navbar;

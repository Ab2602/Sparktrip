import React, { useState } from "react";
import image from "../../assests/image.png";
import Anywhere from "../Model/Anywhere";
import Anyweek from "../Model/Anyweek";
import AddGuest from "../Model/AddGuest";
import '../../index.css'

const Navbar = () => {
  const [openAnywhere, setOpenAnywhere] = useState(false);
  const [openAnyweek, setOpenAnyweek] = useState(false);
  const [openAddGuest, setOpenAddGuest] = useState(false);

  const handleMouseEnter = () => {
    setOpenAnywhere(true);
  };

  const handleMouseLeave = () => {
    setOpenAnywhere(false);
  };

  return (
    <div className="flex h-20 items-center justify-between fixed top-0 inset-x-0 z-50 backdrop-blur-lg backdrop-filter bg-opacity-75">
      {/* Left */}
      <div className="image flex ml-14">
        <picture className="flex items-center">
          {/* <source media="(min-width: 1000px)" srcset={logo}/> */}
          {/* <source media="(max-width: 769px)" srcset={logo192} className= "ml-8"/> */}
          <img src={image} className="w-47 h-12" alt="Logo" />
        </picture>
      </div>
      {/* Mid */}
      <div className="hidden md:flex shadow-sm shadow-gray-400 border rounded-full justify-center items-center relative ml-24">
        <div className="flex justify-between w-96 absolute text-white mr-11">
          <div className="links">
            {" "}
            <button
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
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
          <div className="modelbg">
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div className="modeldata">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est,
                beatae debitis deserunt commodi architecto dolorem numquam
                pariatur eligendi quam accusantium obcaecati ea dolorum! Quo
                saepe, hic deleniti cupiditate quis necessitatibus fugit magnam
                eos aut rerum officia minus consectetur maxime. Repellat
                excepturi quod, necessitatibus corrupti placeat adipisci, cum
                non aliquam facere nulla mollitia ipsum error temporibus! Rem
                modi a eos dignissimos, necessitatibus aliquam commodi placeat
                nesciunt, odio nam aliquid obcaecati nihil aspernatur! Modi
                quidem provident officia aut nulla nesciunt qui omnis dicta
                reprehenderit, harum hic dolorum est necessitatibus magnam
                nostrum debitis minima quos ab culpa iure quibusdam voluptatem
                al
              </div>
            </div>
          </div>
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

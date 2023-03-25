import React, { useState } from "react";

const Test = () => {
    const [showDiv, setShowDiv] = useState(false);

    const handleMouseEnter = () => {
      setShowDiv(true);
    };
  
    const handleMouseLeave = () => {
      setShowDiv(false);
    };
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="#" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='text-black'>
              Link 1
            </a>
          </li>
          <li>
            <a href="#" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              Link 2
            </a>
          </li>
        </ul>
      </nav>
      {showDiv && (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <p>Content goes here</p>
        </div>
        
      )}
    </div>
  )
}

export default Test



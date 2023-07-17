import Typewriter from "typewriter-effect";
import React from "react";
import "../../index.css";

const Typewriterco = () => {
  return (
    <div style={{ display: "inline" }}>
      <Typewriter
        options={{
          strings: ["Flights...", "Hotels...", "Activities..."],
          autoStart: true,
          loop: true,
        }}
        style={{ display: "inline" }}
      />
    </div>
  );
};

export default Typewriterco;

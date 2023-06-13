import React, { useEffect, useRef } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Typed from "typed.js";

function Home() {
  const typingRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["", "Web Designer", "Web Developer", "Student"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    };

    // Create Typed instance
    typingRef.current = new Typed(".typing", options);

    // Clean up Typed instance on component unmount
    return () => {
      typingRef.current.destroy();
    };
  }, []);

  return (
    <>
      <header>
        <h1 className="Heading">
          <span>M</span>ark<b>.</b>
          <em>F</em>oli<em>o</em>
        </h1>
        <h2 className="my-name">Hi, I am <em>M</em>ark </h2>
       <h3 className= "typing-effect">I am a <span className="typing"></span></h3> 
      </header>
    </>
  );
}

export default Home;

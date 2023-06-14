import React, { useEffect, useRef } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Typed from "typed.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Home() {
  const typingRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["", "Frontend Developer,", "Backend Developer,", "Student,","Fullstack Engineer,","Web Designer."],
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
        <h2 className="my-name">
          Hi, I am{" "}
          <b>
            {" "}
            <em>M</em>ark
          </b>{" "}
        </h2>
        <h3 className="typing-effect">
          {" "}
          <em>I am a</em> <span className="typing"></span>
        </h3>
      </header>
      <div>
        <p className="about-me-p">
          I'm a frontend developer passionate about creating visually appealing
          and user-friendly websites with absolutely no experience, constantly
          learning and exploring new technologies. Let's build something amazing
          together!
        </p>
        <img
          className="giphy-image"
          src="https://media0.giphy.com/media/PI3QGKFN6XZUCMMqJm/200.webp?cid=ecf05e47waeju4zsg0hnnu2xczjo34c5ylttbyokxo3ejrrk&ep=v1_gifs_search&rid=200.webp&ct=g"
          alt="software engineer"
        />
        <button className="cv-me-btn button" href="/my-cv">
          View cv
        </button>
        <button className="hire-me-btn button" href="/my-cv">
          Hire me
        </button>
        {/* <FontAwesomeIcon icon={faGithub} /> */}
      </div>
      <Navbar />
    </>
  );
}

export default Home;

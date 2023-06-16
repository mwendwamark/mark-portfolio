import React from "react";
import "./App.css";
import "animate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faHtml5,
  faCss3,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faGem } from "@fortawesome/free-regular-svg-icons";

function About() {
  return (
    <>
      <header>
        <h2 className="Heading">
          <span>M</span>ark<b>.</b>
          <em>F</em>oli<em>o</em>
        </h2>
        <h3 className="animate__animated animate__backInDown">About.</h3>
        <div className="about-me-p-about">
          My name is <strong>Mark Mwendwa,</strong> a Kenyan Citzen. I am
          currently pursuing my studies at Moringa School, where I am honing my
          skills and expanding my knowledge in programming. I have 4 months of
          experience in software development.
        </div>
        <img className="my-image" src="M" alt="mark's" />

        <div className="personal-information-div">
          <p>
            Age: <span>17 years</span>
          </p>

          <p>
            Location:<span> Nairobi, Kenya</span>
          </p>

          <p>
            Freelance: <span>Available</span>
          </p>
        </div>
        <div className="abilities">
          <h4 className="abilities-h4">SKILLS:</h4>
          <div className="frontend-tech">
            <h5 className="frontend-tech-h5">Frontend Technologies</h5>
            <p>
              <FontAwesomeIcon
                className="frontend-icons"
                icon={faHtml5}
                style={{ color: "#e66d0a" }}
              />
              HTML
            </p>
            <p>
              <FontAwesomeIcon
                className="frontend-icons"
                icon={faCss3}
                style={{ color: "#135ddd" }}
              />
              CSS
            </p>
            <p>
              <FontAwesomeIcon
                className="frontend-icons"
                icon={faJsSquare}
                style={{ color: "#ddcb03" }}
              />
              JAVASCRIPT
            </p>
            <p>
              <FontAwesomeIcon
                className="frontend-icons"
                icon={faReact}
                style={{ color: "#12d8f3" }}
              />
              REACT
            </p>
          </div>
          <div className="backend-tech">
            <h5 className="backend-tech-h5">Backend Technologies</h5>
            <p>
              <FontAwesomeIcon
                className="backend-icons"
                icon={faDatabase}
                style={{ color: "#77797e" }}
              />
              SQL
            </p>
            <p>
              <FontAwesomeIcon
                className="backend-icons"
                icon={faGem}
                style={{ color: "#bc1019" }}
              />
              RUBY
            </p>
          </div>
        </div>
        <h4 className="certificates-heading">Certifications:</h4>
        <div className="certification-sector">
          <span className="certification-image-1"></span>
          <span className="certification-image-2"></span>
          <span className="certification-image-3"></span>
        </div>

        {/* Social Media Icons */}
        {/* <div className="social-media-icons">
          <a
            href="https://github.com/mwendwamark"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="social-media-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/your-linkedin-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="social-media-icon" />
          </a>
          <a
            href="https://twitter.com/your-twitter-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} className="social-media-icon" />
          </a>
        </div> */}
      </header>
    </>
  );
}

export default About;

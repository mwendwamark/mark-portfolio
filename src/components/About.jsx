import React from "react";
import "./App.css";
import "animate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function About() {
  return (
    <>
      <header>
        <h1 className="Heading">
          <span>M</span>ark<b>.</b>
          <em>F</em>oli<em>o</em>
        </h1>
        <h3 className="animate__animated animate__backInDown">About Me .</h3>
        <p className="about-me-p-about">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          dignissimos necessitatibus corrupti quibusdam similique consequuntur,
          deserunt ratione magni in itaque adipisci ea odio nesciunt ipsa sequi
          amet maxime, est laboriosam velit quia eaque esse saepe at rem. Non,
          quas earum molestiae quidem sed iusto. Perspiciatis?
        </p>
        <div className="personal-information-div">
          <p>
            Age: <span>17 years</span>
          </p>
          <p>
            Phone : <span>+254 717 084 324</span>
          </p>
          <p>
            Location:<span> Nairobi, Kenya</span>
          </p>
          <p>
            Email: <span>mwendwamark96@gmail.com</span>
          </p>
        </div>
        <h4 className="certificates-heading">Certifications:</h4>
        <div className="certification-sector">
          <span className="certification-image-1"></span>
          <span className="certification-image-2"></span>
          <span className="certification-image-3"></span>
        </div>

        {/* Social Media Icons */}
        <div className="social-media-icons">
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
        </div>
      </header>
    </>
  );
}

export default About;

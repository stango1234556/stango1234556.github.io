import React, { memo } from "react";
import "../styles/about.scss";
import img from "../images/Me.jpg";

import {
  IoLocationSharp,
  IoMailSharp,
  IoLogoLinkedin,
} from "react-icons/io5";

import  {
  FaItchIo
} from "react-icons/fa6";

const About = memo(({ refs }) => {
  return (
    <section ref={refs} className="about-section">
      <div className="section-title">ABOUT ME</div>

      <div className="about-content">
        <img
          className="about-picture"
          src={img}
          alt="Failed to load."
        ></img>
        <div className="about-info">
          <b className="info-title">"stango"</b>
          <div className="info">
            <br />
            Hi! I am a student at New York University from Plainsboro, New Jersey. I am working towards a major in Computer Science and a minor in Game Design. I am also a part of NYU's Accelerated Bachelor's - Master's program for Computer Science. I am a member of the EGD Collective's Game Studio Program where I gain experience working with other programmers, designers, and artists to create an indie game using Unity. On the side I play piano, explore the city, and compete on NYU's Overwatch 2 team. Thanks for stopping by!
          </div>
          <ul>
            <li>
              <div className="info-li">
                <IoLocationSharp className="icon" /> New York, NY
              </div>
            </li>
            <li>
              <div className="info-li">
                <IoMailSharp className="icon" /> samuel.y.tang@gmail.com
              </div>
            </li>
            <li>
              <div className="info-li">
                <IoLogoLinkedin className="icon" /> <a
                    className="button"
                    href="https://www.linkedin.com/in/samuel-y-tang/"
                  >
                    LinkedIn
                  </a>
              </div>
            </li>
            <li>
              <div className="info-li">
                <FaItchIo className="icon" /> <a
                    className="button"
                    href="https://samuelytang.itch.io/"
                  >
                    itch.io
                  </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
});

export default About;

import React, { memo } from "react";
import "../styles/about.scss";
import img from "../images/Me.jpg";

import {
  IoPerson,
  IoLocationSharp,
  IoMailSharp,
  IoCalendarClearOutline,
} from "react-icons/io5";

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
            Hi! I am a student at New York University from Plainsboro, New Jersey. I am working towards a major in Computer Science and a minor in Game Design. I would also like to be a part of my school's Accelerated Bachelor's - Master's program. I am a member of the EGD Collective's Game Studio Program where I gain experience working with other programmers, designers, and artists to create an indie game using Unity. On the side I play piano, explore the city, and compete on NYU's Overwatch 2 team. Thanks for stopping by!
          </div>
          <ul>
            <li>
              <div className="info-li">
                <IoPerson className="icon" /> Samuel Tang
              </div>
            </li>
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
                <IoCalendarClearOutline className="icon" /> 2003.12.14
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
});

export default About;

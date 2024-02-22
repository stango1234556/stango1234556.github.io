import React, { memo } from "react";

import "../styles/skills.scss";
import GameMaker from "../images/GameMaker.png";
import Java from "../images/Java.png";
import Python from "../images/Python.png";
import PremierePro from "../images/PremierePro.png";
import VSCode from "../images/VSCode.png";
import C from "../images/C.png";

import {
  // Java,
  // Python,
  // Adobepremierepro,
  // C
} from "@icons-pack/react-simple-icons";

const Skills = memo(({ refs }) => {
  return (
    <section ref={refs} className="skills-section">
      <div className="section-title">SKILLS</div>
      <div className="skills-content">
        <h3 className="skill-title">Languages</h3>
        <div className="skills-infos">
          <div className="skill-group">
            <div className="skill">
              <img
              className="java-picture"
              src={Java} height = "60" width = "60"
              alt="Failed to load."
              ></img>
            </div>
            <p className="skill-info">Java</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <img
              className="python-picture"
              src={Python} height = "60" width = "60"
              alt="Failed to load."
              ></img>
            </div>
            <p className="skill-info">Python</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <img
              className="c-picture"
              src={C} height = "65" width = "60"
              alt="Failed to load."
              ></img>
            </div>
            <p className="skill-info">C</p>
          </div>
        </div>
        <h3 className="skill-title">Applications</h3>
        <div className="skills-infos">
          <div className="skill-group">
            <div className="skill">
              <img
              className="gamemaker-picture"
              src={GameMaker} height = "50" width = "50"
              alt="Failed to load."
              ></img>
            </div>
            <p className="skill-info">GameMaker</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <img
              className="premierepro-picture"
              src={PremierePro} height = "55" width = "55"
              alt="Failed to load."
              ></img>
            </div>
            <p className="skill-info">Premiere Pro</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <img
              className="vscode-picture"
              src={VSCode} height = "55" width = "55"
              alt="Failed to load."
              ></img>
            </div>
            <p className="skill-info">VS Code</p>
          </div>
        </div>
      </div>
    </section>
  );
});
export default Skills;

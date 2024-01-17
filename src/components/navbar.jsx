import React, { useCallback, useState, memo } from "react";
import "../styles/navbar.scss";
import Pdf from '../documents/Resume.pdf';

import { MdMenu } from "react-icons/md";

const Navbar = memo(({ handleScroll }) => {
  const [active, setActive] = useState(false);

  const click = useCallback(() => {
    setActive(!active);
  }, [active]);

  return (
    <>
      <header>
        <nav className="navbar">
          <div className="navbar__logo">Samuel Tang</div>

          <ul className="navbar__menu">
            <li>
              <button onClick={() => handleScroll("about")}>About Me</button>
            </li>
            <li>
              <button onClick={() => handleScroll("skills")}>Skills</button>
            </li>
            <li>
              <button onClick={() => handleScroll("portfolio")}>
                Portfolio
              </button>
            </li>
            <li>
              <button onClick={() => window.open(Pdf)}>
                Resume
              </button>
            </li>
          </ul>

          <div className="toggleBtn" onClick={click}>
            <MdMenu />
          </div>
        </nav>
      </header>
      {active && (
        <div className="toggle__menu">
          <ul>
            <li>
              <button
                onClick={() => {
                  handleScroll("about");
                  click();
                }}
              >
                About me
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  handleScroll("skills");
                  click();
                }}
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  handleScroll("portfolio");
                  click();
                }}
              >
                Portfolio
              </button>
            </li>
            <li>
              <button>
                <a
                  href='/pathToPdf.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  RESUME
                </a>
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
});

export default Navbar;

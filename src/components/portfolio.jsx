import React, { memo } from "react";

import "../styles/portfolio.scss";
import league from "../images/League.jpg";
import memory from "../images/Memory.png";
import podcast from "../images/Podcast.jpg";
import kingslayers from "../images/Kingslayers.png";
import spartanyahtzee from "../images/SpartanYahtzee.png";
import comingsoon from "../images/ComingSoon.png";
import spartanpdf from '../documents/SpartanYahtzee.pdf';
import kingslayerspdf from '../documents/Kingslayers.pdf';

const Portfolio = memo(({ refs }) => {
  return (
    <section ref={refs} className="portfolio-section">
      <div className="section-title">PORTFOLIO</div>
      <div className="portfolio-content">
        <div className="portfolio-info-area">
          <div className="portfolio-info">
            <div className="picture-area">
              <img src={podcast} alt="Failed to load." />
            </div>
            <div className="title"><br />The Rundown Podcast</div>
            <div className="contents">
              <br />
              Collaborated with a friend to write, film, and edit a seven episode podcast series. Researched about different video game related topics (design philosophies, development process, mainstream impact, speedrunning, esports, etc.).

            </div>
            <a
              className="button"
              href="https://youtube.com/playlist?list=PL4wWDP4Ots73mS4XPfh2tsEYfRNS1SDa6&si=LqMEQTZutpMVFUz3"
            >
              Youtube Link
            </a>
          </div>
        </div>
        <div className="portfolio-info-area">
          <div className="portfolio-info">
            <div className="picture-area">
              <img
                src={memory}
                alt="Failed to load."
              />
            </div>
            <div className="title"><br />Sequence Memory Test Player</div>
            <div className="contents">
              <br />
              A Python script that utilizes PyAutoGUI to automatically play Human Benchmark’s Sequence Memory test.
              <br />
              <br />
              <br />
            </div>
            <a
              className="button"
              href="https://github.com/stango1234556/Sequence-Memory-Game"
            >
              Github Link
            </a>
            <a
              className="button"
              href="https://humanbenchmark.com/tests/sequence"
            >
              Memory Test Link
            </a>
          </div>
        </div>
        <div className="portfolio-info-area">
          <div className="portfolio-info">
            <div className="picture-area">
              <img src={league} alt="Failed to load." />
            </div>
            <div className="title"><br />Riot API Stat Tracker</div>
            <div className="contents">
              <br />
              A Python script that gathers data from Riot’s API to show an entered user’s most recent stats for a desired game mode in League of Legends. 
              <br />
              <br />
            </div>
            <a
              className="button"
              href="https://github.com/stango1234556/League-of-Legends-Stats"
            >
              Github Link
            </a>
          </div>
        </div>
        <div className="portfolio-info-area">
          <div className="portfolio-info">
            <div className="picture-area">
              <img src={spartanyahtzee} alt="Failed to load." />
            </div>
            <div className="title"><br />Spartan Yahtzee</div>
            <div className="contents">
              <br />
              Prototype for a 2 player game based on the core rerolling mechanic of <i>King of Tokyo</i>.
              <br />
              <br />
              <br />
            </div>
            <a
              className="button"
              onClick={() => window.open(spartanpdf)}
            >
              PDF Link
            </a>
          </div>
        </div>
        <div className="portfolio-info-area">
          <div className="portfolio-info">
            <div className="picture-area">
              <img src={kingslayers} alt="Failed to load." />
            </div>
            <div className="title"><br />Kingslayers</div>
            <div className="contents">
              <br />
              Prototype for a 4 player collaborative game with randomized resources as a structural constraint and cards as a material constraint.
              <br />
              <br />
            </div>
            <a
              className="button"
              onClick={() => window.open(kingslayerspdf)}
            >
              PDF Link
            </a>
          </div>
        </div>
        <div className="portfolio-info-area">
          <div className="portfolio-info">
            <div className="picture-area">
              <img
                src={comingsoon}
                alt="Failed to load."
              />
            </div>
            <div className="title"><br />Coming Soon</div>
            <div className="contents">
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Portfolio;

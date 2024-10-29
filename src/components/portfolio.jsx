import React, { memo } from "react";

import "../styles/portfolio.scss";
import league from "../images/League.jpg";
import memory from "../images/Memory.png";
import podcast from "../images/Podcast.jpg";
import kingslayers from "../images/Kingslayers.png";
import dicewars from "../images/DiceWars.png";
import mother from "../images/Mother.png";
import shell from "../images/Shell.png";
import echolocation from "../images/Echolocation.jpg";
import comingsoon from "../images/ComingSoon.png";
import dicepdf from '../documents/DiceWars.pdf';
import kingslayerspdf from '../documents/Kingslayers.pdf';
import motherpdf from '../documents/Mother.pdf';
import echolocationpdf from '../documents/Echolocation.pdf';

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
              <img src={shell} alt="Failed to load." />
            </div>
            <div className="title"><br />Unix Shell</div>
            <div className="contents">
              <br />
              A recreation of a simplified version of the Unix shell. Features the use of pipes, input and output redirection, and built-in commands such as "exit", "ls", "cd", etc.
              <br />
              <br />
              
            </div>
            <a
              className="button"
              href="https://github.com/stango1234556/shell"
            >
              Github Link
            </a>
          </div>
        </div>

        <div className="portfolio-info-area">
          <div className="portfolio-info">
            <div className="picture-area">
              <img src={dicewars} alt="Failed to load." />
            </div>
            <div className="title"><br />Dice Wars</div>
            <div className="contents">
              <br />
              A 2 player game where you roll dice to defeat your opponent. Add dice to your dice pool to strengthen and change your army's playstyle in a deck-building-esque game. Our group is planning to continue to develop this game.
              <br />
              <br />
            </div>
            <a
              className="button"
              href="https://youtu.be/YWYECi5K3C4?si=ms9U2fndBgGjfGFn"
            >
              Youtube Link
            </a>
            <a
              className="button"
              onClick={() => window.open(dicepdf)}
            >
              PDF Link
            </a>
          </div>
        </div>

        <div className="portfolio-info-area">
          <div className="portfolio-info">
            <div className="picture-area">
              <img src={echolocation} alt="Failed to load." />
            </div>
            <div className="title"><br />Echolocation</div>
            <div className="contents">
              <br />
              A collaborative social game inspired from <i>Wavelength</i>. Players must attempt to understand each other’s interpretations of words to navigate towards a location on the board. Our group is continuing to develop this game, with goals of eventually publishing it.
              <br />
            </div>
            <a
              className="button"
              onClick={() => window.open(echolocationpdf)}
            >
              PDF Link
            </a>
          </div>
        </div>

        <div className="portfolio-info-area">
          <div className="portfolio-info">
            <div className="picture-area">
              <img src={mother} alt="Failed to load." />
            </div>
            <div className="title"><br />Mother</div>
            <div className="contents">
              <br />
              A single player high score card game with fantasy and tokusatsu as thematic constraints.
              <br />
              <br />
            </div>
            <a
              className="button"
              onClick={() => window.open(motherpdf)}
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
              A 4 player collaborative game with randomized resources as a structural constraint and cards as a material constraint.
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
              <img src={league} alt="Failed to load." />
            </div>
            <div className="title"><br />Riot API Stat Tracker</div>
            <div className="contents">
              <br />
              A Python script that gathers data from Riot’s API to show an entered user’s most recent stats for a desired game mode in <i>League of Legends</i>. 
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

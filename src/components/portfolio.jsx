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
import expenseapp from '../images/ExpenseApp.png';
import drunkblackjack from '../images/DrunkBlackjack.png';
import emotiondetector from '../images/EmotionDetector.png';
import coursescheduler from '../images/CourseScheduler.png';
import cloudfighters from '../images/CloudFighters.png';
import clickergame from '../images/ClickerGame.png';

const Portfolio = memo(({ refs }) => {
  return (
    <section ref={refs} className="portfolio-section">
      <div className="section-title">COMPUTER SCIENCE PORTFOLIO</div>
      <div className="portfolio-content">
      
      <div className="portfolio-info-area">
          <div className="portfolio-info">
            <div className="picture-area">
              <img src={coursescheduler} alt="Failed to load." />
            </div>
            <div className="title"><br />Class Scheduler Web App</div>
            <div className="contents">
              <br />
              <br />
              <br />
              A web app that uses a generation algorithm to create potential schedules for a user based on inputted courses, a target credit range, and course priorities.
              <br />
              <br />
            </div>
            <a
              className="button"
              href="http://138.197.107.82:3000/login"
            >
              Web App Link
            </a>
            <a
              className="button"
              href="https://github.com/software-students-fall2024/5-final-swe_switching_with_econ/blob/main/instructions.md"
            >
              Github Link
            </a>
          </div>
        </div>

        <div className="portfolio-info-area">
            <div className="portfolio-info">
              <div className="picture-area">
                <img src={emotiondetector} alt="Failed to load." />
              </div>
              <div className="title"><br />Emotion Recognition and Mental Health Advice Web App</div>
              <div className="contents">
                <br />
                A web app that uses an existing Hugging Face machine learning API to analyze and classify a user’s emotion based on recorded audio input, then provides the user with advice based on the detected emotion.

                <br />
                
              </div>
              <a
                className="button"
                href="https://github.com/software-students-fall2024/4-containers-swe-switching-with-econ-1"
              >
                Github Link
              </a>
            </div>
          </div>

        <div className="portfolio-info-area">
            <div className="portfolio-info">
              <div className="picture-area">
                <img src={drunkblackjack} alt="Failed to load." />
              </div>
              <div className="title"><br />Drunk Blackjack</div>
              <div className="contents">
                <br />
                A lighthearted Blackjack python package that gives you the option to get "drunk" and see how it affects your play, as well as get commentary on your actions and get good or bad advice on gambling. Warning: don't drink like this in real life!

                <br />
                
              </div>
              <a
                className="button"
                href="https://github.com/software-students-fall2024/3-python-package-swe-switching-with-econ"
              >
                Github Link
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
                Recreation of a Unix shell in C from scratch. The shell can parse user input and handle signals, built-in commands, input and output redirection, and the use of pipes.
                <br />
                <br />
                
              </div>
              <a
                className="button"
                href="https://github.com/stango1234556/Unix-Shell"
              >
                Github Link
              </a>
            </div>
          </div>

          <div className="portfolio-info-area">
            <div className="portfolio-info">
              <div className="picture-area">
                <img src={expenseapp} alt="Failed to load." />
              </div>
              <div className="title"><br />Expense Tracking Web App</div>
              <div className="contents">
                <br />
                A mobile web app that allows users to create accounts, add/remove/edit logs of expenses, as well as searching and sorting saved logs. 
                <br />
                <br />
                
              </div>
              <a
                className="button"
                href="https://github.com/software-students-fall2024/2-web-app-now-you-re-unemployed"
              >
                Github Link
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

      <div className="section-title">GAME DESIGN PORTFOLIO</div>
        <div className="portfolio-content">

        <div className="portfolio-info-area">
            <div className="portfolio-info">
              <div className="picture-area">
                <img src={clickergame} alt="Failed to load." />
              </div>
              <div className="title"><br />A Mermaid's Goal</div>
              <div className="contents">
                <br />
                An incremental game I created with a partner in GameMaker over the span of 2 days for Global Game Jam 2025. I worked on the technical aspects such as all the coding, sound design, and balancing. 
                <br />
              </div>
              <a
                className="button"
                href="https://stango1234556.itch.io/a-mermaids-goal"
              >
                itch.io Link
              </a>
            </div>
          </div>

        <div className="portfolio-info-area">
            <div className="portfolio-info">
              <div className="picture-area">
                <img src={cloudfighters} alt="Failed to load." />
              </div>
              <div className="title"><br />Cloud Fighters</div>
              <div className="contents">
                <br />
                A 2 player <em>Smash Bros</em> inspired platform fighting game created in GameMaker. Hit your opponent to launch them farther and farther until they get blasted out of the screen! 
                <br />
                <br />
              </div>
              <a
                className="button"
                href="https://stango1234556.itch.io/cloud-fighters"
              >
                itch.io Link
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
                A 2 player game where you roll dice to defeat your opponent. Add dice to your dice pool to strengthen and change your army's playstyle in a deck-building-esque game. 
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
                A collaborative social game inspired from <i>Wavelength</i>. Players must attempt to understand each other’s interpretations of words to navigate towards a location on the board. 
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

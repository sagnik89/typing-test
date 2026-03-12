import React from "react";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="stat-container">
        <div className="wpm">
          <div className="wpm-text subject-text">
            WPM: <span className="data">40</span>
          </div>
        </div>
        <div className="divider"></div>
        <div className="accuracy">
          <div className="accuracy-text subject-text">
            Accuracy: <span className="data">94 %</span>
          </div>
        </div>
        <div className="divider"></div>
        <div className="time">
          <div className="time-text subject-text">
            Time: <span className="data">0:46</span>
          </div>
        </div>
      </div>
      <div className="button-container">
        <div className="difficulty">
          <div className="difficulty-text subject-text">Difficulty : </div>
          <button className="menu-buttons easy-button">Easy</button>
          <button className="menu-buttons medium-button">Medium</button>
          <button className="menu-buttons hard-button">Hard</button>
        </div>
        <div className="divider"></div>
        <div className="mode">
          <div className="mode-text subject-text">Mode : </div>
          <button className="menu-buttons timed-button">Timed (60s)</button>
          <button className="menu-buttons passage-button">Passage</button>
        </div>
      </div>
    </div>
  );
};

export default Menu;

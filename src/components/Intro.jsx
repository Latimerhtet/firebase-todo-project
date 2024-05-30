import React from "react";

const Intro = ({ setIntro, introduction }) => {
  return (
    <div className="container" style={{ display: introduction && "none" }}>
      <div className="intro">
        <h2>Welcome to our Note App!</h2>
        <p>Try to record your daily tasks and stay productive!</p>
        <button onClick={() => setIntro(true)} className="start">
          Try Now
        </button>
      </div>
    </div>
  );
};

export default Intro;

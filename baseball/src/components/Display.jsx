import React from "react";

export default function Display(props) {
  const { balls, strikes } = props;
  return (
    <div className="display">
      <h2>SCORE</h2>
      <div className="balls">
        Balls:<span data-testid="ballsDisplayed">{balls}</span>
      </div>
      <div className="strikes">
        Strikes:<span data-testid="strikesDisplayed">{strikes}</span>
      </div>
    </div>
  );
}

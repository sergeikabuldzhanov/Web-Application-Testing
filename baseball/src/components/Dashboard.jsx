import React from "react";

export default function Dashboard(props) {
  const { setScore } = props;
  return (
    <div className="dasboard">
      <button
        data-testid="strikeButton"
        className="strike"
        onClick={e => setScore("strike")}
      >
        Strike
      </button>
      <button
        data-testid="ballButton"
        className="ball"
        onClick={e => setScore("ball")}
      >
        Ball
      </button>
      <button
        data-testid="foulButton"
        className="foul"
        onClick={e => setScore("foul")}
      >
        Foul
      </button>
      <button
        data-testid="hitButton"
        className="hit"
        onClick={e => setScore("hit")}
      >
        Hit
      </button>
    </div>
  );
}

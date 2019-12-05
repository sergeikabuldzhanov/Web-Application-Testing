import {useState} from "react";

export default function useScore(Balls, Strikes) {
  const [balls, setBalls] = useState(Balls);
  const [strikes, setStrikes] = useState(Strikes);
  function scoreChange(scoreType) {
    switch (scoreType) {
      case "strike":
        if (strikes + 1 >= 3) {
          setStrikes(0);
          setBalls(0);
        } else setStrikes(strikes + 1);
        break;
      case "ball":
        if (balls + 1 >= 4) {
          setStrikes(0);
          setBalls(0);
        } else setBalls(balls + 1);
        setBalls(balls + 1);
        break;
      case "foul":
        if (strikes < 2) setStrikes(2);
        break;
      case "hit":
        setStrikes(0);
        setBalls(0);
        break;
    }
  }
  return [balls, strikes, scoreChange];
}

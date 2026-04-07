import React, { useState } from "react";
import ScoreView from "./scoreView.jsx";
import "./scoreKeeper.css";
const ScoreKeeper = () => {
  const [teamOneScore, setTeamOneScore] = useState(0);
  const [teamTwoScore, setTeamTwoScore] = useState(0);
  const teamOneScored = () => {
    setTeamOneScore(prev => prev + 1);
  };
  const teamTwoScored = () => setTeamTwoScore(prev => prev + 1);
  const resetScores = () => {
    setTeamOneScore(0);
    setTeamTwoScore(0);
  };
  const winner =
    teamOneScore === 10 ? "Team One" : teamTwoScore === 10 ? "Team Two" : null;
  return (
    <div className="score-keeper-container">
      <h1 className="score-keeper-heading">Score Keeper</h1>
      <ScoreView
        teamName="Team One"
        score={teamOneScore}
        leading={teamOneScore > teamTwoScore}
      />
      <ScoreView
        teamName="Team Two"
        score={teamTwoScore}
        leading={teamOneScore < teamTwoScore}
      />
      <button
        className="score-keeper-button"
        onClick={teamOneScored}
        disabled={winner !== null}
      >
        +1 Team One
      </button>
      <button
        className="score-keeper-button"
        onClick={teamTwoScored}
        disabled={winner !== null}
      >
        +1 Team Two
      </button>
      <button className="reset-button" onClick={resetScores}>
        Reset Scores
      </button>
      {winner && <h2 className="winner">{winner} Wins! 🎉</h2>}
    </div>
  );
};
export default ScoreKeeper;

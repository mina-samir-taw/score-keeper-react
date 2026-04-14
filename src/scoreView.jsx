import React from "react";
<<<<<<< HEAD
import "./scoreView.css";
const ScoreView = ({teamName , score, leading}) => {
=======
import "./ScoreView.css";
const ScoreView = ({teamName, score, leading}) => {
>>>>>>> e558bd8 (feat: add arrays and improve leading logic)
  return (
    <div className={`score-view-${leading ? "leading":""}`}>
      <h2>
        {teamName}:{score}
      </h2>
    </div>
  );
};
export default ScoreView;

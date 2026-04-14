import React from "react";
import "./scoreView.css";
const ScoreView = ({teamName , score, leading}) => {
  return (
    <div className={`score-view-${leading ? "leading":""}`}>
      <h2>
        {teamName}:{score}
      </h2>
    </div>
  );
};
export default ScoreView;

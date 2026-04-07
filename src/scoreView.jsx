import React from "react";
import "./ScoreView.css";
const ScoreView = (props) => {
  return (
    <div className={`score-view-${props.leading ? "leading":""}`}>
      <h2>
        {props.teamName}:{props.score}
      </h2>
    </div>
  );
};
export default ScoreView;

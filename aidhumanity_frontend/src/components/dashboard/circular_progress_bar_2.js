import React, { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Circular_progress_bar_2() {
  const percentage = 50;
  const rotateDeg = 180 - (percentage * 3.6) / 2;
  return (
    <div>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        background
        backgroundPadding={0}
        styles={{
          root: {
            transform: `rotate(${rotateDeg}deg)`
          },
          background: {
            fill: "#102558"
          },
          path: {
            stroke: "#00ade9",
            backgroundColor: "#00ade9",
          },
          trail: {
            stroke: "transparent",
            transform: "rotate(90deg)",
            transformOrigin: "center center",
            rotation: 1 / 7 + 1 / 10
          },
          text: {
            fill: "white",
            transformOrigin: "center center",
            transform: `rotate(-${rotateDeg}deg)`,
            fontSize: "2.25rem",
            fontWeight: "bold"
          }
        }}
      />
    </div>
  );
}

export default Circular_progress_bar_2;

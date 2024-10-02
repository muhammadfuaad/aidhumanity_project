import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";

function Circular_progress_bar() {
  const percentage = 10;

  return (
    <div>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        background
        backgroundPadding={0}
        styles={{
          background: {
            fill: "#102558"
          },
          path: {
            stroke: "#00ade9",
          },
          trail: {
            stroke: "transparent",
            transform: "rotate(90deg)",
            transformOrigin: "center center",
            rotation: 1 / 7 + 1 / 10,
          },
          text: {
            // Text color
            fill: "white",
            // Text size
            fontSize: "3rem",
            fontWeight: "bold",
          }
        }}
      />
    </div>
  );
}

export default Circular_progress_bar;

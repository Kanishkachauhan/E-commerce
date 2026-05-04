import React from "react";
import "./Shimmer.css";

function Shimmer() {
  return (
    <div className="shimmer-grid">
      {Array(8).fill("").map((_, index) => (
        <div className="shimmer-card" key={index}>
          <div className="shimmer-image"></div>
          <div className="shimmer-text"></div>
          <div className="shimmer-text small"></div>
          <div className="shimmer-btn"></div>
        </div>
      ))}
    </div>
  );
}

export default Shimmer;
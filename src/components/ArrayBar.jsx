// src/components/ArrayBar.jsx
import React from "react";

const ArrayBar = ({ value, index }) => {
  return (
    <div
      className="flex justify-center"
      style={{
        height: `${value * 3}px`, // Height based on value (multiplied for better visibility)
        width: "20px",
        margin: "0 2px",
        backgroundColor: "#4CAF50",
        transition: "height 0.2s ease-in-out",
      }}
    >
      <div
        style={{
          height: `${value * 3}px`,
          width: "100%",
          backgroundColor: "rgba(34, 197, 94, 0.8)",
        }}
      />
    </div>
  );
};

export default ArrayBar;

import React from "react";

const TabButton = ({ onClick, ...props }) => {
  return (
    <span>
      <button
        style={{
          padding: "0.5rem",
          borderRadius: "10px",
          color: "magenta",
          margin: "1rem",
        }}
        onClick={onClick}
        {...props}
      ></button>
    </span>
  );
};

export default TabButton;

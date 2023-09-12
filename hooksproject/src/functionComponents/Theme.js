import React, { useState } from "react";

const Theme = () => {
  const [darktheme, setDarktheme] = useState(false);
  const theme = {
    darktheme: {
      backgroundColor: "gray",
      color: "white",
      padding: "20px",
    },
    lighttheme: {
      backgroundColor: "white",
      color: "black",
      padding: "20px",
    },
  };
  return (
    <>
      <span>
        Enable dark theme :
        <input
          type="checkbox"
          checked={darktheme}
          onChange={() => setDarktheme((darktheme) => !darktheme)}
        />
      </span>

      <div style={darktheme ? theme.darktheme : theme.lighttheme}>
        <h1>useState Hook in React</h1>
      </div>
    </>
  );
};

export default Theme;

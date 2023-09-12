import React, { useState, useMemo } from "react";
import { items } from "../Utils/items";

const Usememo = () => {
  const [count, setCount] = useState(0);

  // we use useMemo hook to memoize the return value and return the same unless dependency changes
  // In this case the fuction will not be re created unless depency Changes
  const SelectedItem = useMemo(
    () => items?.find((item) => item.isSelected),
    [items]
  );

  return (
    <div>
      <div> Count : {count}</div>
      <div> Selected : {SelectedItem?.item}</div>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: "0.5rem",
          borderRadius: "10px",
          backgroundColor: "violet",
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default Usememo;

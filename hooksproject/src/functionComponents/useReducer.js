import React, { useReducer } from "react";

const defaultState = {
  count: 0,
  error: null,
};
const Reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "increment": {
      const hasError = state.count + 1 > 5;
      return {
        ...state,
        count: hasError ? state.count : state.count + 1,
        error: hasError ? "Maximum Reached" : null,
      };
    }
    case "decrement": {
      const hasError = state.count - 1 < 0;
      return {
        ...state,
        count: hasError ? state.count : state.count - 1,
        error: hasError ? "Minimum Reached" : null,
      };
    }
    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(Reducer, defaultState);
  return (
    <div
      style={{
        margin: "2rem",
        alignItems: "center",
        minHeight: "20vh",
        textAlign: "center",
      }}
    >
      <div>Count : {state.count}</div>
      {state.error && <div className="mb-2 text-red-500">{state.error}</div>}
      <span
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "2rem",
        }}
      >
        <button
          className="mb-2"
          onClick={() => dispatch({ type: "increment" })}
        >
          Increment
        </button>
        <button
          className="mb-2"
          onClick={() => dispatch({ type: "decrement" })}
        >
          decrement
        </button>
      </span>
    </div>
  );
};

export default UseReducer;

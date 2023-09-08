import React from "react";
import HOC from "./HOC";

const TodoList = ({ data }) => {
  let renderTodos = data?.slice(0, 10).map((todo) => {
    return (
      <div key={todo.userId}>
        <p>
          <strong>{todo.title}</strong>
        </p>
      </div>
    );
  });
  return (
    <div>
      <div>{renderTodos}</div>
    </div>
  );
};

const SearchTodos = HOC(TodoList, "todos");

export default SearchTodos;

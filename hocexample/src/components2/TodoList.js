import React, { useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import WithLogger from "./withLogger";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos((prevtodo) => [...prevtodo, newTodo]);
      setNewTodo("");
    }
  };

  const completeTodo = (index) => {
    setTodos((prevtodo) => {
      const updatedTodos = [...prevtodo];
      updatedTodos.splice(index, 1);

      return updatedTodos;
    });
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} />
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            onComplete={() => completeTodo(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default WithLogger(TodoList);

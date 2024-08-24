import React, { Component } from "react";
import Todos from "./ToDos";

const App = () => {
  const [todos, setTodos] = React.useState([
    { id: 1, content: "do homework" },
    { id: 2, content: "walk a dog" },
  ]);

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app">
      <h1> Hello world</h1>
      <Todos deleteTodo={deleteTodo} todos={todos} />
    </div>
  );
};
export default App;

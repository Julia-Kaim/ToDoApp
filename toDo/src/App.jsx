import React, { Component } from "react";
import Todos from "./ToDos";
import Addtodo from "./Addtodo";
import "./App.css";
const App = () => {
  const [todos, setTodos] = React.useState([
    { id: 1, content: "do homework" },
    { id: 2, content: "walk a dog" },
  ]);

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodo = (content) => {
    const newTodo = { id: Math.random(), content };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="card glass w-96 mx-auto my-10   ">
      <div className="card-body p-6">
        <h1 className="card-title justify-center"> My Todos App</h1>
        <div className="card-actions flex flex-col gap-4 ">
          <Todos deleteTodo={deleteTodo} todos={todos} />
          <Addtodo addTodo={addTodo}></Addtodo>
        </div>
      </div>
    </div>
  );
};
export default App;

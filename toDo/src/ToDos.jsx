import React from "react";

const Todos = ({ todos, deleteTodo }) => {
  return (
    <div className="todos-list">
      {todos.length ? (
        todos.map((todo) => (
          <div key={todo.id} className="todo-item">
            <span>{todo.content}</span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        ))
      ) : (
        <p>You have no todo left ᓚ₍ ^. .^₎</p>
      )}
    </div>
  );
};

export default Todos;

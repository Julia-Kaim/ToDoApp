import React from "react";

const Todos = ({ todos, deleteTodo }) => {
  return (
    <div className="card-body items-center text-center">
      {todos.length ? (
        todos.map((todo) => (
          <div key={todo.id} className="todo-item">
            <span>{todo.content}</span>

            <button
              className="btn btn-ghost"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p>You have no todo left ᓚ₍ ^. .^₎</p>
      )}
    </div>
  );
};

export default Todos;

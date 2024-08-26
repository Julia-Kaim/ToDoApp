import React, { useState } from "react";

const Addtodo = ({ addTodo }) => {
  const [content, setContent] = useState("");

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      addTodo(content);
      setContent("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="addtodo">Add Todo</label>
      <input
        onChange={handleChange}
        type="text"
        value={content}
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
      ></input>
      <button className="btn btn-ghost" type="submit">
        Add
      </button>
    </form>
  );
};

export default Addtodo;

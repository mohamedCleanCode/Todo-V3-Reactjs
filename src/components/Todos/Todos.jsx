import React from "react";
import { TodoItem } from "../TodoItem/TodoItem";

const Todos = () => {
  return (
    <div className="todos">
      <div className="message">
        Welcome back {JSON.parse(localStorage.getItem("user")).email}
      </div>
      <div className="todos-list">
        <TodoItem title="" />
        <TodoItem title="" />
        <TodoItem title="" />
        <TodoItem title="" />
      </div>
    </div>
  );
};

export default Todos;

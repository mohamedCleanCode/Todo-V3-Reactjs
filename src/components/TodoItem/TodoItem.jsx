import React from "react";

export const TodoItem = ({ title }) => {
  const onClickEdit = () => {
    console.log("edit");
  };
  return (
    <div className="todo-item">
      <div className="title">Dan's Task</div>
      <div className="progress">
        <div className="inside-progress"></div>
      </div>
      <div className="todo-item-controls">
        <button className="edit" onClick={onClickEdit}>
          Edit
        </button>
        <button className="delete">Delete</button>
      </div>
    </div>
  );
};

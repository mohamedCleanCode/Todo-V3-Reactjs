import React, { useContext, useState } from "react";
import { TodosContext } from "../../ContextApi/TodosContext";

const EditTask = ({ active, onClickCloseButton }) => {
  const { addTodo } = useContext(TodosContext);
  const [todoName, setTodoName] = useState("");
  const [todoProgress, setTodoProgress] = useState(0);
  const handleSubmit = (e) => {
    console.log(todoName);
    console.log(todoProgress);
    addTodo(todoName, todoProgress);
  };
  return (
    <div className={`edit-task ${active ? "active" : ""}`}>
      <div className="overlay"></div>
      <div className="edit-task-container">
        <div className="heade">
          <p>Let's edit your task</p>
          <div className="close-button" onClick={onClickCloseButton}>
            X
          </div>
        </div>
        <div>
          <input
            className="task-input"
            type="text"
            value={todoName}
            onChange={(e) => setTodoName(e.target.value)}
          />
        </div>
        <div className="task-range">
          <label>Drag to select your current porgress</label>
          <br />
          <input
            type="range"
            name="range"
            id="rang"
            min={0}
            max={100}
            value={todoProgress}
            onChange={(e) => setTodoProgress(e.target.value)}
          />
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default EditTask;

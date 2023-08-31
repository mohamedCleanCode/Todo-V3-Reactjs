import React, { useContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { TodosContext } from "../../ContextApi/TodosContext";
import Notify from "../utils/Notify";

const EditTask = ({ active, onClickCloseButton }) => {
  const { addTodo, data } = useContext(TodosContext);
  const [todoName, setTodoName] = useState("");
  const [todoProgress, setTodoProgress] = useState(0);
  const handleSubmit = (e) => {
    addTodo(todoName, todoProgress);
  };
  useEffect(() => {
    if (data) {
      console.log(data);
      if (data.status === 201) {
        Notify("success", "Task added successfully");
      } else {
        Notify("warn", "Something went wrong please try again!");
      }
    }
  }, [data]);
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
            placeholder="Enter your task..."
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
          {todoProgress === "0" ? "" : todoProgress}
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <ToastContainer autoClose={1000} />
    </div>
  );
};

export default EditTask;

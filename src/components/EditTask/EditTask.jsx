import React from "react";

const EditTask = () => {
  return (
    <div className="edit-task">
      <div className="overlay"></div>
      <div className="edit-task-container">
        <div className="heade">
          <p>Let's edit your task</p>
          <div className="close-button">X</div>
        </div>
        <div>
          <input className="task-input" type="text" />
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
            value={50}
          />
        </div>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default EditTask;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import EditTask from "../EditTask/EditTask";

const Header = () => {
  const [active, setActive] = useState(false);
  const onClickAddNew = () => {
    setActive(true);
  };
  const onClickCloseButton = () => {
    setActive(false);
  };
  return (
    <>
      <div className="header">
        <h1>🎉🎄 Holiday Tick List</h1>
        <div className="controls">
          <button className="add-new" onClick={onClickAddNew}>
            Add New
          </button>
          {localStorage.getItem("user") ? (
            <button>Logout</button>
          ) : (
            <Link to="/login" className="sign-in">
              Signin
            </Link>
          )}
        </div>
      </div>
      <EditTask active={active} onClickCloseButton={onClickCloseButton} />
    </>
  );
};

export default Header;

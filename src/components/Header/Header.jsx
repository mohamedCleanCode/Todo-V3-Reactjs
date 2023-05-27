import React from "react";

const Header = () => {
  return (
    <div className="header">
      <h1>🎉🎄 Holiday Tick List</h1>
      <div className="controls">
        <button className="add-new">Add New</button>
        <button className="sign-in">Sign in</button>
      </div>
    </div>
  );
};

export default Header;

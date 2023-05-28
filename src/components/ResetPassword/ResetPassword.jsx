import React from "react";

const ResetPassword = () => {
  return (
    <form className="signup">
      <h1>Reset Password</h1>
      <div>
        <input type="email" name="email" placeholder="Type email" />
      </div>
      <div>
        <input type="submit" value="Send" />
      </div>
    </form>
  );
};

export default ResetPassword;

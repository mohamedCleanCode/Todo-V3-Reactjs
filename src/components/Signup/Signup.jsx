import React from "react";

const Signup = () => {
  return (
    <form className="signup">
      <div>
        <input type="text" name="username" placeholder="Type username" />
      </div>
      <div>
        <input type="email" name="email" placeholder="Type email" />
      </div>
      <div>
        <input type="submit" value="Submit" />
      </div>
      <div>
        Already have account <a href="/login">Login</a>
      </div>
    </form>
  );
};

export default Signup;

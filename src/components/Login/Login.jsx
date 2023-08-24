import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <form className="signup">
      <h1>Login</h1>
      <div>
        <input type="email" name="email" placeholder="Type email" />
      </div>
      <div>
        <input type="password" name="password" placeholder="Type password" />
      </div>
      <div>
        <input type="submit" value="Login" />
      </div>
      <div>
        Forgot Password <Link to="/reset-password">Reset Password</Link>
      </div>
      <div>
        Have'nt account <Link to="/signup">Signup</Link>
      </div>
    </form>
  );
};

export default Login;

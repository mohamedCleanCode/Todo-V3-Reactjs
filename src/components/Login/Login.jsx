import React from "react";

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
        Forgot Password <a href="/reset-password">Reset Password</a>
      </div>
      <div>
        Have'nt account <a href="/signup">Signup</a>
      </div>
    </form>
  );
};

export default Login;

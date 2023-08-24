import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import useLogin from "./useLogin";

const Login = () => {
  const [res, loading, emailRef, passwordRef, handleSubmit] = useLogin();
  return (
    <>
      <form className="signup" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Type email"
            ref={emailRef}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Type password"
            ref={passwordRef}
          />
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
      <ToastContainer autoClose={1000} />
    </>
  );
};

export default Login;

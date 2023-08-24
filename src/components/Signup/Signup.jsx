import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import useSignup from "./useSignup";

const Signup = () => {
  const [
    res,
    loading,
    nameRef,
    emailRef,
    passwordRef,
    passwordConfirmRef,
    handleSubmit,
  ] = useSignup();

  return (
    <>
      <form className="signup" onSubmit={handleSubmit}>
        <h1>Signup</h1>
        <div>
          <input
            type="text"
            name="username"
            placeholder="Type username"
            ref={nameRef}
          />
        </div>
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
          <input
            type="password"
            name="passwordConfirm"
            placeholder="Confirm password"
            ref={passwordConfirmRef}
          />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
        <div>
          Already have account <Link to="/login">Login</Link>
        </div>
      </form>
      <ToastContainer autoClose={1000} />
    </>
  );
};

export default Signup;

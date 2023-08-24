import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import postData from "../hooks/postData";
import Notify from "../utils/Notify";
const useSignup = () => {
  const navigate = useNavigate();
  const [res, setRes] = useState({});
  const [loading, setLoading] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let obj = {};
    obj.name = nameRef.current.value;
    obj.email = emailRef.current.value;
    obj.password = passwordRef.current.value;
    obj.passwordConfirm = passwordConfirmRef.current.value;
    if (obj.password !== obj.passwordConfirm) {
      return Notify("warn", "Passwords are not match");
    } else {
      setRes(await postData("/api/v1/auth/signup", obj));
      setLoading(true);
    }
  };
  useEffect(() => {
    if (loading) {
      if (res) {
        if (res.status === 201) {
          Notify("success", "Account is created");
          setTimeout(() => {
            navigate("/login");
          }, 1000);
        } else if (
          res.response?.data?.errors[0]?.msg === "Email is alryady exist"
        ) {
          Notify("warn", "Email is alryady exist");
        } else {
          Notify("err", "Something went wrong");
        }
      }
    }
  }, [loading, res]);
  return [
    res,
    loading,
    nameRef,
    emailRef,
    passwordRef,
    passwordConfirmRef,
    handleSubmit,
  ];
};

export default useSignup;

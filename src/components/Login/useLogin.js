import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import postData from "../hooks/postData";
import Notify from "../utils/Notify";
const useLogin = () => {
  const navigate = useNavigate();
  const [res, setRes] = useState({});
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let obj = {};
    obj.email = emailRef.current.value;
    obj.password = passwordRef.current.value;
    if (!obj.email || !obj.password) {
      return Notify("warn", "Please fill inputs");
    } else {
      setRes(await postData("/api/v1/auth/login", obj));
      setLoading(true);
    }
  };
  useEffect(() => {
    if (loading) {
      if (res) {
        console.log(res);
        if (res.status === 200) {
          const data = res.data;
          const { data: user, token } = data;
          document.cookie = `token=${token}`;
          localStorage.setItem("user", JSON.stringify(user));
          Notify("success", "Logged in");
          setTimeout(() => {
            navigate("/");
          }, 1000);
        } else if (res.response?.data) {
          if (res.response?.data?.message === "Incorrect email or password") {
            Notify("warn", "Incorrect email or password");
          } else if (
            res.response?.data?.errors[0]?.msg === "Password must be > 6"
          ) {
            Notify("warn", "Password must be > 6");
          }
        } else {
          Notify("err", "Something went wrong");
        }
      }
    }
  }, [loading, res]);
  return [res, loading, emailRef, passwordRef, handleSubmit];
};

export default useLogin;

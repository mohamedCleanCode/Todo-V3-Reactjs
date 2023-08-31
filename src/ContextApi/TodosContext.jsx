import { createContext, useEffect, useState } from "react";
import postData from "../components/hooks/postData";

export const TodosContext = createContext({});

export const TodosProvider = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState({});
  const [data, setData] = useState({});
  const [todo, setTodo] = useState({});

  const addTodo = async (title, progress) => {
    setRes(
      await postData("/api/v1/todos", { title, progress, user: user._id })
    );
    setLoading(true);
  };

  useEffect(() => {
    if (loading) {
      setData(res);
    }
  }, [loading]);
  return (
    <TodosContext.Provider value={{ addTodo, data }}>
      {children}
    </TodosContext.Provider>
  );
};

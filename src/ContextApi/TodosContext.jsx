import { createContext, useState } from "react";
import postData from "../components/hooks/postData";

export const TodosContext = createContext({});

export const TodosProvider = ({ children }) => {
  const [todo, setTodo] = useState({});

  const addTodo = async (title, progress) => {
    await setTodo({
      title,
      progress,
    });
    const res = await postData("/todos", todo);
    if (res) {
      console.log(res);
    }
  };
  return (
    <TodosContext.Provider value={{ addTodo }}>
      {children}
    </TodosContext.Provider>
  );
};

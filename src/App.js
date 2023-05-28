import { Route, Routes } from "react-router-dom";
import EditTask from "./components/EditTask/EditTask";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Todos from "./components/Todos/Todos";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Todos />
              <EditTask />
            </>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

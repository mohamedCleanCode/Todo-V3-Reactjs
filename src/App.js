import { Route, Routes } from "react-router-dom";
import EditTask from "./components/EditTask/EditTask";
import Header from "./components/Header/Header";
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
      </Routes>
    </div>
  );
}

export default App;

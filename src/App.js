import { Route, Routes } from "react-router-dom";
import { TodosProvider } from "./ContextApi/TodosContext";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import Signup from "./components/Signup/Signup";
import Todos from "./components/Todos/Todos";
import useProtectedRoute from "./components/hooks/useProtectedRoute";

function App() {
  const [isUser, userData] = useProtectedRoute();
  return (
    <div className="app">
      <TodosProvider>
        <Routes>
          <Route element={<ProtectedRoute auth={isUser} />}>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Todos />
                </>
              }
            />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </TodosProvider>
    </div>
  );
}

export default App;

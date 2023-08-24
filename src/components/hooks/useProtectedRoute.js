import { useEffect, useState } from "react";

const useProtectedRoute = () => {
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const [isUser, setIsUser] = useState();

  useEffect(() => {
    if (userData) {
      if (userData.role === "user") {
        setIsUser(true);
      }
    } else {
      setIsUser(false);
    }
  }, [userData]);
  return [isUser, userData];
};

export default useProtectedRoute;

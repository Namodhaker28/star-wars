import { useState } from "react";

interface UseAuth {
  isAuthenticated: boolean;
  login: (username: string, password: string) => void;
  logout: () => void;
}

const useAuth = (): UseAuth => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (username: string, password: string) => {
    if (username === "star@test.com" && password === "password") {
      setIsAuthenticated(true);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return { isAuthenticated, login, logout };
};

export default useAuth;

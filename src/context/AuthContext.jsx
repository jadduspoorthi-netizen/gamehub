import { createContext, useState } from "react";
import {
  getCurrentUser,
  setCurrentUser,
  logoutUser,
} from "../services/storage";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(getCurrentUser());

  const login = (userData) => {
    setUser(userData);
    setCurrentUser(userData);
  };

  const logout = () => {
    setUser(null);
    logoutUser();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
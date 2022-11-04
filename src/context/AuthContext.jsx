import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProviderComponent = ({ children }) => {
  const [isAuth, setAuth] = useState(true);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const toggle = () => {
    setAuth(!isAuth);
  };

  const loginUser = (email, name) => {
    setAuth(true);
    setEmail(email);
    setName(name);
  };
  const logoutUser = () => {
    setAuth(false);
    setEmail("");
    setName("");
  };

  return (
    <AuthContext.Provider
      value={{ isAuth, toggle, loginUser, logoutUser, email, name }}
    >
      {children}
    </AuthContext.Provider>
  );
};

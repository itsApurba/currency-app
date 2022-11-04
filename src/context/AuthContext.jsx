import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProviderComponent = ({ children }) => {
  const auth = JSON.parse(localStorage.getItem("data"))?.success;
  const [isAuth, setAuth] = useState(auth || false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const loginUser = (email, name) => {
    setEmail(email);
    setName(name);
    setAuth(true);
  };
  const logoutUser = () => {
    localStorage.removeItem("data");
    setEmail("");
    setName("");
    setAuth(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        loginUser,
        logoutUser,
        email,
        name,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

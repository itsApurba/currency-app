import { createContext, useState } from "react";
import { getData } from "../api/getData";

export const AppContext = createContext();

export const AppContextProviderComponent = ({ children }) => {
  const [data, setData] = useState(JSON.parse(localStorage.getItem("data")));

  return (
    <AppContext.Provider value={{ data, setData }}>
      {children}
    </AppContext.Provider>
  );
};

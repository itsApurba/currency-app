import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthContextProviderComponent } from "./context/AuthContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthContextProviderComponent>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AuthContextProviderComponent>
  </BrowserRouter>
);

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import AllRoutes from "./routes/AllRoutes";

import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import { AppContextProviderComponent } from "./context/AppContext";

function App() {
  return (
    <AppContextProviderComponent>
      <div className='App'>
        <AllRoutes />
      </div>
    </AppContextProviderComponent>
  );
}

export default App;

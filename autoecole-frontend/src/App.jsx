import { BrowserRouter, Router } from "react-router-dom";
import "./App.css";

import AppRoutes from "../src/Router/router";
import HeaderComponent from "./Components/HeaderComponent";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
};

export default App;

import { BrowserRouter, Router } from "react-router-dom";
import "./App.css";
import Home from "./Components/CarousselComponent";
import InfoComponent from "./Components/InfoComponent";
import PermisComponent from "./Components/PermisComponent";
import ProgrammeComponent from "./Components/ProgrammeComponent";
import LoginPage from "./Pages/LoginPage";
import AppRoutes from "../src/Router/router";
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

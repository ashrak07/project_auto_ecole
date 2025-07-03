import React from "react";
import CarousselComponent from "../Components/CarousselComponent";
import InfoComponent from "../Components/InfoComponent";
import ProgrammeComponent from "../Components/ProgrammeComponent";
import PermisComponent from "../Components/PermisComponent";

const HomePage = () => {
  return (
    <div>
      <CarousselComponent />
      <InfoComponent />
      <ProgrammeComponent />
      <PermisComponent />
    </div>
  );
};

export default HomePage;

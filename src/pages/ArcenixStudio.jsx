import React, { useEffect } from "react";
import { NavbarDeps } from "../components/NavbarDeps";

const ArcenixStudio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div>
        <NavbarDeps />
      </div>
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-3xl">Bienvenid@ a Arcenix Studio</h1>
      </div>
    </div>
  );
};

export { ArcenixStudio };
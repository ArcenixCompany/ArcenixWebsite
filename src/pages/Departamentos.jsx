import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { NavbarDeps } from "../components/NavbarDeps";

function Departamentos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen">
      <NavbarDeps/>
      <Outlet />
    </div>
  );
}

export {Departamentos};

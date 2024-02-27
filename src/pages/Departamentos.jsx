import React from "react";
import { Outlet } from "react-router-dom";
import { NavbarDeps } from "../components/NavbarDeps";

function Departamentos() {
  return (
    <div className="min-h-screen">
      <NavbarDeps/>
      <Outlet />
    </div>
  );
}

export {Departamentos};

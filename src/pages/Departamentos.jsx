import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

function Departamentos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-r from-gris to-blanco dark:bg-gradient-to-r dark:from-morado2 dark:to-darkAzul">
      <Outlet />
    </div>
  );
}

export { Departamentos };

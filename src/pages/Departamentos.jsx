import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

function Departamentos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen">
      <Outlet />
    </div>
  );
}

export { Departamentos };

import React from "react";
import { NavLink } from "react-router-dom";

const NavbarDeps = () => {
  const activeLink = "font-bold hover:text-text2 bg-d1 w-fit";
  return (
    <div>
      <nav className="flex justify-evenly bg-txt1 dark:bg-bg1">
        <NavLink
          to="/deps/arcDes"
          className={({ isActive }) =>
            isActive
              ? activeLink
              : "text-bg1 dark:text-txt2 hover:text-bg2 w-fit"
          }
        >
          <div className="nbb">
            <i className="bi bi-code-slash text-xl"></i>
            <p>Arcenix Desarrollo</p>
          </div>
        </NavLink>

        <NavLink
          to="/deps/arcStudio"
          className={({ isActive }) =>
            isActive
              ? activeLink
              : "text-bg1 dark:text-txt2 hover:text-bg2 w-fit"
          }
        >
          <div className="nbb">
            <i className="bi bi-clipboard text-xl"></i>
            <p>Arcenix Studio</p>
          </div>
        </NavLink>

        <NavLink
          to="/deps/arcGames"
          className={({ isActive }) =>
            isActive
              ? activeLink
              : "text-bg1 dark:text-txt2 hover:text-bg2 w-fit"
          }
        >
          <div className="nbb">
            <i className="bi bi-controller text-xl"></i>
            <p>Arcenix Gaming</p>
          </div>
        </NavLink>
      </nav>
    </div>
  );
};

export { NavbarDeps };

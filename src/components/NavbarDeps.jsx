import React from "react";
import { NavLink } from "react-router-dom";

const NavbarDeps = () => {
  const activeLink = "font-bold w-fit";
  return (
    <div>
      <nav className="flex justify-evenly bg-txt1 dark:bg-bg1">
        <NavLink
          to="/deps/arcStudio"
          className={({ isActive }) =>
            isActive
              ? activeLink + " bg-indigo-500"
              : "text-bg1 dark:text-txt2 hover:text-bg2 w-fit"
          }
        >
          <div className="nbb hover:text-indigo-300 dark:hover:text-indigo-300">
            <i className="bi bi-clipboard text-xl"></i>
            <p>Arcenix</p>
            <p>Studio</p>
          </div>
        </NavLink>

        <NavLink
          to="/deps/arcDes"
          className={({ isActive }) =>
            isActive
              ? activeLink + " bg-emerald-600"
              : "text-bg1 dark:text-txt2 hover:text-bg2 w-fit"
          }
        >
          <div className="nbb hover:text-emerald-400 dark:hover:text-emerald-400">
            <i className="bi bi-code-slash text-xl"></i>
            <p>Arcenix</p>
            <p>Desarrollo</p>
          </div>
        </NavLink>

        <NavLink
          to="/deps/arcGames"
          className={({ isActive }) =>
            isActive
              ? activeLink + " bg-pink-600"
              : "text-bg1 dark:text-txt2 hover:text-bg2 w-fit"
          }
        >
          <div className="nbb hover:text-pink-400 dark:hover:text-pink-400">
            <i className="bi bi-controller text-xl"></i>
            <p>Arcenix </p>
            <p>Games</p>
          </div>
        </NavLink>
      </nav>
    </div>
  );
};

export { NavbarDeps };

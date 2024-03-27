import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../views/img/logo25-3-24.png";
import { ToggleSwitch } from "./ToggleSwitch";

const ResponsiveBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const SMedia = [
    {
      title: "Instagram",
      src: "instagram",
      path: "https://www.instagram.com/arcenixgame/",
    },
    {
      title: "Linkedin",
      src: "linkedin",
      path: "https://www.linkedin.com/in/arcenix-company-5808b12b4/",
    },
    {
      title: "TikTok",
      src: "tiktok",
      path: "https://www.tiktok.com/@arcenixcompany",
    },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-darkAzul py-4 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <NavLink to="/">
                <img src={Logo} className="w-10 h-10 rounded-full" />
              </NavLink>
            </div>
          </div>
          {/* <div className="hidden sm:flex sm:items-center sm:ml-6">
            <div className="space-x-4">
              <NavLink
                to="/"
                className="text-bg1 hover:bg-d1 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Inicio
              </NavLink>
              <NavLink
                to="/about"
                className="text-bg1 hover:bg-d1 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Nosotros
              </NavLink>
              <NavLink
                to="/services"
                className="text-bg1 hover:bg-d1 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Servicios
              </NavLink>
              <NavLink
                to="/contact"
                className="text-bg1 hover:bg-d1 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Contacto
              </NavLink>
            </div>
          </div> */}
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-txt1 hover:text-white hover:bg-d1 focus:outline-none focus:bg-d1 focus:text-white transition duration-150 ease-in-out"
            >
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <NavLink
            to="/"
            className="text-txt1 hover:bg-d1 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            onClick={open ? toggleMenu : undefined}
          >
            <i className="bi bi-house mr-4"></i>
            Inicio
          </NavLink>
          <NavLink
            to="/about"
            className="text-txt1 hover:bg-d1 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            onClick={open ? toggleMenu : undefined}
          >
            <i className="bi bi-people mr-4"></i>
            Nosotros
          </NavLink>
          <NavLink
            to="/contact"
            className="text-txt1 hover:bg-d1 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            onClick={open ? toggleMenu : undefined}
          >
            <i className="bi bi-chat mr-4"></i>
            Contacto
          </NavLink>
          <NavLink
            to="/deps/arcDes"
            className="text-txt1 hover:bg-d1 hover:text-white flex px-3 py-2 rounded-md text-base font-medium"
            onClick={open ? toggleMenu : undefined}
          >
            <img src="/src/views/svg/arcenix_isotipo.svg" alt="Logo" className="w-4 h-4 mr-4 my-auto"></img>
            Departamentos
          </NavLink>
          <div className="flex w-full justify-evenly">
            {SMedia.map((a, b) => (
              <li
                key={b}
                className={`text-txt1 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-d1 rounded-md ${
                  a.gap ? "mt-9" : "mt-2"
                } ${!open && "justify-center"}`}
              >
                <a href={a.path} className="text-2xl" target="_blank">
                  <i className={`bi bi-${a.src}`}></i>
                </a>
              </li>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export { ResponsiveBar };

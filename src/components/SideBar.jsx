import { useState } from "react";
import Arrow from "../views/svg/arrow-right-circle-fill.svg";
import Logo from "../views/svg/LogoWhite.svg";
import { NavLink, useLocation } from "react-router-dom";
import isoLogo from "../views/svg/arcenix_isotipo.svg";
import { IoMdArrowDropdown } from "react-icons/io";
import arcLogo from "../views/svg/arcenix_isotipo.svg";

const SideBar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Inicio", src: "house", path: "/", gap: true },
    { title: "Sobre Nosotros", src: "people", path: "/about" },
    { title: "Contacto", src: "chat", path: "/contact" },
    // { title: "Departamentos", icon: true, path: "/deps/" },
  ];
  const SMedia = [
    {
      // title: "Instagram",
      src: "instagram",
      path: "https://www.instagram.com/arcenixgame/",
      gap: true,
    },
    {
      // title: "Linkedin",
      src: "linkedin",
      path: "https://www.linkedin.com/in/arcenix-company-5808b12b4/",
    },
    {
      // title: "TikTok",
      src: "tiktok",
      path: "https://www.tiktok.com/@arcenixcompany",
    },
  ];
  const isActive = (path) => {
    return location.pathname === path;
  };
  const toggleSidebar = () => {
    setOpen(!open);
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex shadow-custom border-r-2 border-gris">
      <div
        className={`h-screen p-5 pt-8 bg-txt1 dark:bg-darkAzul relative duration-300 ${
          open ? "w-60" : "w-20"
        }`}
      >
        <img
          src={Arrow}
          className={`bg-blanco absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-txt2 ${
            open && "rotate-180"
          } w-[35px]`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex w-full gap-x-4 ml-8">
          <NavLink
            to="/"
            className={`flex space-x-4 items-center justify-center cursor-pointer duration-500 w-10 h-10 ${
              open && "rotate-[360deg]"
            }`}
          >
            <img src={Logo} />
            <h1
              className={`text-bg1 dark:text-txt1 origin-left font-medium text-xl duration-300 ${
                !open && "scale-0"
              }`}
            >
              Arcenix
            </h1>
          </NavLink>
        </div>

        <ul className="pt-6">
          {Menus.map((menu, index) => (
            <NavLink
              to={menu.path}
              key={index}
              className={`text-bg1 dark:text-txt1 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-d1 rounded-md 
              ${menu.gap ? "mt-9" : "mt-2"} 
              ${isActive(menu.path) ? "hover:bg-d1" : ""} ${
                isActive(menu.path) && "bg-d1"
              }
              ${!open && "justify-center"}`}
              onClick={open ? toggleSidebar : undefined}
            >
              {menu.title === "Departamentos" && (
                <img src={isoLogo} className="w-4 h-4" />
              )}{" "}
              {/* Condición para mostrar la imagen */}
              {menu.title !== "Departamentos" && (
                <i className={`bi bi-${menu.src} `}></i>
              )}{" "}
              {/* Condición para mostrar el icono */}
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {menu.title}
              </span>
            </NavLink>
          ))}

          <button
            onClick={toggleMenu}
            className="flex items-center justify-start pl-3 space-x-3 py-3 text-blanco hover:bg-morado2 w-full rounded-md mt-2"
          >
            <img src={arcLogo} alt="Logo" className="w-4 h-4" />
            <p className={`${!open && "hidden"}`}>Departamentos</p>
            <IoMdArrowDropdown
              className={`${!open && "hidden"} ${isOpen && "rotate-180"} `}
            />
          </button>

          {isOpen && (
            <div className=" text-blanco ">
              <div
                className="flex flex-col justify-center items-center"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <NavLink
                  className="flex space-x-3 justify-start items-center w-full pl-3 py-2 hover:bg-indigo-500 hover:text-white rounded-md text-rosaClaro"
                  to="/deps/arcStudio"
                  role="menuitem"
                  onClick={() => {
                    setIsOpen(false);
                    setOpen(false); // Cerrar el menú desplegable
                  }}
                >
                  <i className="bi bi-clipboard text-sm"></i>
                  <p className={`${!open && "hidden"}`}>Arcenix Studio</p>
                </NavLink>
                <NavLink
                  className="flex space-x-3 justify-start items-center w-full pl-3 py-2 hover:bg-emerald-600 hover:text-white rounded-md text-rosaClaro"
                  to="/deps/arcDes"
                  role="menuitem"
                  onClick={() => {
                    setIsOpen(false);
                    setOpen(false); // Cerrar el menú desplegable
                  }}
                >
                  <i className="bi bi-code-slash text-sm"></i>
                  <p className={`${!open && "hidden"}`}>Arcenix Desarrollo</p>
                </NavLink>
                <NavLink
                  className="flex space-x-3 justify-start items-center w-full pl-3 py-2 hover:bg-pink-600 hover:text-white rounded-md text-rosaClaro"
                  to="/deps/arcGames"
                  role="menuitem"
                  onClick={() => {
                    setIsOpen(false);
                    setOpen(false); // Cerrar el menú desplegable
                  }}
                >
                  <i className="bi bi-controller text-sm"></i>
                  <p className={`${!open && "hidden"}`}>Arcenix Games</p>
                </NavLink>
              </div>
            </div>
          )}

          <div className={`flex w-full justify-around pt-5 ${!open && "flex-col"} transition-all`}>
            {SMedia.map((a, b) => (
              <li
                key={b}
                className={`text-bg1 dark:text-txt1 text-base flex items-center gap-x-4 cursor-pointer p-2 hover:text-rosa hover:bg-morado2 rounded-md  ${
                  !open && "justify-center"
                }`}
              >
                <a href={a.path} className="space-x-3" target="_blank">
                  <i className={`bi bi-${a.src}`}></i>
                  {/* <span
                    className={`${!open && "hidden"} origin-left duration-200`}
                  >
                    {a.title}
                  </span> */}
                </a>
              </li>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
};

export { SideBar };

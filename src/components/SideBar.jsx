import { useState } from "react";
import Arrow from "../views/svg/arrow-right-circle-fill.svg";
import Logo from "../views/svg/LogoWhite.svg";
import { NavLink, useLocation } from "react-router-dom";
import { ToggleSwitch } from "./ToggleSwitch";
const SideBar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Inicio", src: "house", path: "/", gap: true },
    { title: "Sobre Nosotros", src: "people", path: "/about" },
    { title: "Contacto", src: "chat", path: "/contact" },
    { title: "Departamentos", src: "boxes", path: "/deps/" },
  ];
  const SMedia = [
    {
      title: "Instagram",
      src: "instagram",
      path: "https://www.instagram.com/arcenixgame/",
      gap: true,
    },
    {
      title: "Linkedin",
      src: "linkedin",
      path: "https://www.linkedin.com/in/arcenix-company-5808b12b4/",
    },
    {
      title: "Twitter",
      src: "twitter-x",
      path: "https://twitter.com/ArcenixC",
    },
    {
      title: "TikTok",
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

  return (
    <div className="flex">
      <div
        className={`h-screen p-5 pt-8 bg-txt1 dark:bg-bg1 relative duration-300 ${
          open ? "w-72" : "w-20"
        }`}
      >
        <img
          src={Arrow}
          className={`bg-bg1 absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-txt2 ${
            open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={Logo}
            className={`cursor-pointer duration-500 w-10 h-10 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-bg1 dark:text-txt1 origin-left font-medium text-xl duration-300 ${
              !open && "scale-0"
            }`}
          >
            Arcenix
          </h1>
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
              <i className={`bi bi-${menu.src} `}></i>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {menu.title}
              </span>
            </NavLink>
          ))}

          <div className="w-fit mt-3">
            <ToggleSwitch />
          </div>

          {SMedia.map((a, b) => (
            <li
              key={b}
              className={`text-bg1 dark:text-txt1 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-d1 rounded-md ${
                a.gap ? "mt-9" : "mt-2"
              } ${!open && "justify-center"}`}
            >
              <a href={a.path} className="space-x-3" target="_blank">
                <i className={`bi bi-${a.src}`}></i>
                <span
                  className={`${!open && "hidden"} origin-left duration-200 `}
                >
                  {a.title}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { SideBar };

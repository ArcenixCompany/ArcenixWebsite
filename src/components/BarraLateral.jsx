import { NavLink } from "react-router-dom";
import Logo from "../views/img/logoViolet.png";
import { ToggleSwitch } from "./ToggleSwitch";

const BarraLateral = () => {
  const activeLink = "text-d1 font-bold hover:text-text2 w-fit";
  

  return (
    <div className="flex flex-col w-full justify-between items-center bg-txt1 dark:bg-bg1 h-screen p-2">
      <div className="bg-black rounded-full w-[55px] h-[55px] flex items-center justify-center">
        <NavLink to="/">
          <img src={Logo} alt="logo" className="rounded-full" />
        </NavLink>
      </div>

      {/* Navbar */}
      <div className="w-full flex justify-center">
        <nav className="w-fit">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? activeLink
                : "text-bg1 dark:text-txt2 hover:text-bg2 w-fit"
            }
          >
            <div className="nbb">
              <i className="bi bi-house text-xl"></i>
              <p>Inicio</p>
            </div>
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? activeLink
                : "text-bg1 dark:text-txt2 hover:text-bg2 w-fit"
            }
          >
            <div className="nbb">
              <i className="bi bi-people text-xl"></i>
              <p>Nosotros</p>
            </div>
          </NavLink>

          <NavLink
            to="/equipos"
            className={({ isActive }) =>
              isActive
                ? activeLink
                : " text-bg1 dark:text-txt2 hover:text-bg2 w-fit"
            }
          >
            <div className="nbb">
              <i className="bi bi-person-workspace text-xl"></i>
              <p>Fundadores</p>
            </div>
          </NavLink>

          <NavLink
            to="/contacto"
            className={({ isActive }) =>
              isActive
                ? activeLink
                : "text-bg1 dark:text-txt2 hover:text-bg2 w-fit "
            }
          >
            <div className="nbb">
              <i className="bi bi-chat text-xl"></i>
              <p>Contacto</p>
            </div>
          </NavLink>

          <NavLink
            to="/deps"
            className={({ isActive }) =>
              isActive
                ? activeLink
                : "text-bg1 dark:text-txt2 hover:text-bg2 w-fit "
            }
          >
            <div className="nbb">
              <i className="bi bi-boxes text-xl"></i>
              <p>Deps</p>
            </div>
          </NavLink>

          <div>
      {/* Botón principal */}
      
    </div>

          <ToggleSwitch />
        </nav>
      </div>

      {/* Redes */}
      <div className="flex justify-center pb-5">
        <ul className="flex flex-col gap-4">
          <li className="nbm">
            <a
              href="https://www.instagram.com/arcenixgame/"
              target="_blank"
              className="hover:theShadow-orange"
            >
              <i className="bi bi-instagram "></i>
            </a>
          </li>
          <li className="nbm shadow-2xl">
            <a
              href="https://www.linkedin.com/in/arcenix-company-5808b12b4/"
              target="_blank"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </li>
          <li className="nbm shadow-2xl">
            <a href="https://twitter.com/ArcenixC" target="_blank">
              <i className="bi bi-twitter-x hover:theShadow-orange"></i>
            </a>
          </li>
          <li className="nbm shadow-2xl">
            <a href="https://www.tiktok.com/@arcenixcompany" target="_blank">
              <i className="bi bi-tiktok hover:theShadow-orange"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { BarraLateral };

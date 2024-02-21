import { NavLink } from "react-router-dom";
import Logo from "../views/img/Logitotest.jpeg";

const BarraLateral = () => {
  const activeLink = "text-rosita font-bold hover:text-text2 w-fit";
  return (
    <div className="flex flex-col w-full justify-between bg-background1 h-screen p-2">
      <div className="flex items-center justify-center p-2">
        <NavLink to="/">
          <img src={Logo} alt="Logo" className="rounded-[50%] w-[40px]" />
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
                : "text-text1 hover:text-rosita w-fit"
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
                : "text-text1 hover:text-rosita w-fit"
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
                : " text-text1 hover:text-rosita w-fit"
            }
          >
            <div className="nbb">
              <i className="bi bi-person-workspace text-xl"></i>
              <p>Equipos</p>
            </div>
          </NavLink>

          <NavLink
            to="/contacto"
            className={({ isActive }) =>
              isActive
                ? activeLink
                : "text-text1 hover:text-rosita w-fit "
            }
          >
            <div className="nbb">
              <i className="bi bi-chat text-xl"></i>
              <p>Contacto</p>
            </div>
          </NavLink>
        </nav>
      </div>

      {/* Redes */}
      <div className="flex justify-center pb-5">
        <ul className="flex flex-col gap-4">
          <li className="nbm">
            <a href="https://www.instagram.com/arcenixgame/" target="_blank" className="hover:theShadow-orange">
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

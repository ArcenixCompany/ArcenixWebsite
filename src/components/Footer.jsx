import logo from "../views/img/Logitotest.jpeg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const activeLink = "text-rosita font-bold hover:text-text2 w-fit";
  return (
    <>
      <div className="flex w-full justify-around items-start p-10 bg-background1">
        <div className="p-3">
          <img src={logo} alt="logo" className="rounded-full" />

          <ul className="flex p-4 gap-10">
            <li className="nbm text-2xl">
              <a
                href="https://www.instagram.com/arcenixgame/"
                target="_blank"
                className="hover:theShadow-orange"
              >
                <i className="bi bi-instagram "></i>
              </a>
            </li>

            <li className="nbm text-2xl">
              <a
                href="https://www.linkedin.com/in/arcenix-company-5808b12b4/"
                target="_blank"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </li>
          </ul>
          <ul className="flex p-4 gap-10">
            <li className="nbm text-2xl">
              <a href="https://twitter.com/ArcenixC" target="_blank">
                <i className="bi bi-twitter-x hover:theShadow-orange"></i>
              </a>
            </li>

            <li className="nbm text-2xl">
              <a href="https://www.tiktok.com/@arcenixcompany" target="_blank">
                <i className="bi bi-tiktok hover:theShadow-orange"></i>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-text2 font-bold p-2">LINKS</h2>
          <div className="w-full">

            <nav className="flex flex-col justify-start items-start">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeLink : "text-text1 hover:text-text2 "
                }
              >
                <div className="p-2">
                  <p>Inicio</p>
                </div>
              </NavLink>

              <NavLink
                to="/aboutUs"
                className={({ isActive }) =>
                  isActive ? activeLink : "text-text1 hover:text-text2 "
                }
              >
                <div className="p-2">
                  <p>Nosotros</p>
                </div>
              </NavLink>

              <NavLink
                to="/equipos"
                className={({ isActive }) =>
                  isActive ? activeLink : " text-text1 hover:text-text2 "
                }
              >
                <div className="p-2">
                  <p>Equipos</p>
                </div>
              </NavLink>

              <NavLink
                to="/contacto"
                className={({ isActive }) =>
                  isActive ? activeLink : "text-text1 hover:text-text2 "
                }
              >
                <div className="p-2">
                  <p>Contacto</p>
                </div>
              </NavLink>
            </nav>
          </div>
        </div>

        <div>
          <h2 className="text-text2 font-bold p-2">INFO</h2>
          <ul>
            <li className="text-text1 p-2 hover:text-text2 transition-all">
              <a href="#">Contacto</a>
            </li>
            <li className="text-text1 p-2 hover:text-text2 transition-all">
              <a href="#">Terminos y condiciones</a>
            </li>
            <li className="text-text1 p-2 hover:text-text2 transition-all">
              <a href="#">Politicas y privacidad</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export { Footer };

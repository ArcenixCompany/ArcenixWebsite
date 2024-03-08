import logo from "../views/svg/LogoWhite.svg";
import { NavLink } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";
import { ScrollToTopButton } from "./ScrollToTopButton";

const Footer = () => {
  const activeLink = "text-rosa hover:text-text2 w-fit";
  return (
    <>
      <div className="flex flex-col sm:flex-row w-full justify-around items-start p-10 bg-txt1 dark:bg-gris2">
        <ScrollToTopButton />
        {/* Información de contacto */}
        <div>
          <h2 className="text-bg1 dark:text-txt1 font-bold w-full p-2">
            Informacion de contacto
          </h2>
          <div className="flex justify-start items-center w-full p-2">
            <i className="bi bi-envelope-fill nbm text-xl"></i>
            <p className="text-bg1 dark:text-txt2 font-medium ml-2">
              <spam>arcenixcompany@gmail.com </spam>
            </p>
          </div>
          <div className="flex justify-start items-center w-full p-2">
            <i className="bi bi-telephone-fill nbm text-xl "></i>
            <p className="text-bg1 dark:text-txt2 font-medium ml-2">
              1154366545
            </p>
          </div>
          <div className="flex justify-start items-center w-full p-2">
            <i className="bi bi-clock-fill nbm text-xl"></i>
            <p className="text-bg1 dark:text-txt2 font-medium ml-2">
              Lunes a Viernes: 9 - 20hs
            </p>
          </div>
        </div>
        {/* Acerca de */}
        <div>
          <h2 className="text-bg1 dark:text-txt1 font-bold p-2">Acerca de</h2>
          <ul>
            <li className="text-bg1 dark:text-txt2 dark:hover:text-rosa p-2 hover:text-rosa transition-all">
              <a href="#">Terminos y condiciones</a>
            </li>
            <li className="text-bg1 dark:text-txt2 dark:hover:text-rosa p-2 hover:text-rosa transition-all">
              <a href="#">Politicas y privacidad</a>
            </li>
          </ul>
        </div>
        {/* Mapa del sitio */}
        <div>
          <h2 className="text-bg1 dark:text-txt1 font-bold p-2">
            Mapa del sitio
          </h2>
          <div className="w-full">
            <nav className="flex flex-col justify-start items-start">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? activeLink
                    : "text-bg1 dark:text-txt2 hover:text-rosa dark:hover:text-rosa "
                }
              >
                <div className="p-2">
                  <p>Inicio</p>
                </div>
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? activeLink
                    : "text-bg1 dark:text-txt2 hover:text-rosa dark:hover:text-rosa "
                }
              >
                <div className="p-2">
                  <p>Nosotros</p>
                </div>
              </NavLink>

              <NavLink
                to="/deps"
                className={({ isActive }) =>
                  isActive
                    ? activeLink
                    : " text-bg1 dark:text-txt2 hover:text-rosa dark:hover:text-rosa "
                }
              >
                <div className="p-2">
                  <p>Departamentos</p>
                </div>
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? activeLink
                    : "text-bg1 dark:text-txt2 hover:text-rosa dark:hover:text-rosa"
                }
              >
                <div className="p-2">
                  <p>Contacto</p>
                </div>
              </NavLink>
            </nav>
          </div>
        </div>
        {/* Logo Y redes */}
        <div className=" flex flex-col items-center">
          <div className="rounded-full w-16 h-16">
            <a href="#">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div>
            <ul className="flex pt-6">
              <li className="nbm text-2xl p-2">
                <a
                  href="https://www.instagram.com/arcenixgame/"
                  target="_blank"
                  className="hover:theShadow-orange"
                >
                  <i className="bi bi-instagram"></i>
                </a>
              </li>
              <li className="nbm text-2xl p-2">
                <a
                  href="https://www.linkedin.com/in/arcenix-company-5808b12b4/"
                  target="_blank"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </li>
              <li className="nbm text-2xl p-2">
                <a
                  href="https://www.tiktok.com/@arcenixcompany"
                  target="_blank"
                >
                  <i className="bi bi-tiktok hover:theShadow-orange"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Texto de derechos de autor */}
      <div className="flex justify-center items-center p-3 bg-txt1 dark:bg-gris2">
        <p className="text-gray-500 text-sm">
          © 2024 Arcenix Company. Todos los derechos reservados.
        </p>
      </div>
    </>
  );
};

export { Footer };

<div className="bg-blanco">
  <IoIosArrowUp className="w-full h-full" />
</div>;

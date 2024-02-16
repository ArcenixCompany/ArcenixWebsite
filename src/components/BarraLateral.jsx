import { NavLink } from "react-router-dom";
import Logo from "../views/img/Logitotest.jpeg";

const BarraLateral = () => {
  const activeLink = "px-6 py-3 text-text2 font-bold hover:text-text2 w-fit";
  return (
    <div className="flex flex-col w-full justify-between bg-background1 h-screen">
      <div className="flex items-center p-3">
        <NavLink to="/">
          <img src={Logo} alt="Logo" className="rounded-[50%] w-10" />
        </NavLink>
        <div>
          <p className="text-violeta font-bold ml-2">ARCENIX</p>
          <p className="text-text2 font-bold ml-2">COMPANY</p>
        </div>
      </div>
      {/* Separador */}
      {/* <div className="h-24 w-fit"></div> */}

      {/* Navbar */}
      <div className="w-full flex justify-center">
        <nav className="p-3 pl-7 w-fit">
          <div className="w-full ">
            <a
              href="https://fivem.net/"
              className="flex justify-center"
              target="_blank"
            >
              <div className="flex space-x-2 px-6 py-2 text-text2 bg-violeta rounded-full hover:bg-rosa w-fit">
                <i className="bi bi-play-circle-fill"></i>
                <p>Jugar Fivem </p>
              </div>
            </a>
          </div>

          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? activeLink
                : "px-6 py-3 text-text1 hover:text-text2 w-fit"
            }
          >
            <div className="flex gap-2">
              <i className="bi bi-box-arrow-in-right"></i>
              <p>Inicias Sesion</p>
            </div>
          </NavLink>

          <NavLink
            to="/perfil"
            className={({ isActive }) =>
              isActive
                ? activeLink
                : "px-6 py-3 text-text1 hover:text-text2 w-fit"
            }
          >
            <div className="flex gap-2">
              <i className="bi bi-person"></i>
              <p>Perfil</p>
            </div>
          </NavLink>

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? activeLink
                : "px-6 py-3 text-text1 hover:text-text2 w-fit"
            }
          >
            <div className="flex gap-2">
              <i className="bi bi-house"></i>
              <p>Inicio</p>
            </div>
          </NavLink>

          <NavLink
            to="/notificaciones"
            className={({ isActive }) =>
              isActive
                ? activeLink
                : "px-6 py-3 text-text1 hover:text-text2 w-fit"
            }
          >
            <div className="flex gap-2">
              <i className="bi bi-bell"></i>
              <p>Notificaciones</p>
            </div>
          </NavLink>

          <NavLink
            to="/cartera"
            className={({ isActive }) =>
              isActive
                ? activeLink
                : "px-6 py-3 text-text1 hover:text-text2 w-fit"
            }
          >
            <div className="flex gap-2">
              <i className="bi bi-wallet2"></i>
              <p>Cartera</p>
            </div>
          </NavLink>

          <NavLink
            to="/foro"
            className={({ isActive }) =>
              isActive
                ? activeLink
                : "px-6 py-3 text-text1 hover:text-text2 w-fit"
            }
          >
            <div className="flex gap-2">
              <i className="bi bi-collection"></i>
              <p>Foro</p>
            </div>
          </NavLink>

          <NavLink
            to="/mercado"
            className={({ isActive }) =>
              isActive
                ? activeLink
                : "px-6 py-3 text-text1 hover:text-text2 w-fit"
            }
          >
            <div className="flex gap-2">
              <i className="bi bi-shop"></i>
              <p>Mercado</p>
            </div>
          </NavLink>

          <NavLink
            to="/normativa"
            className={({ isActive }) =>
              isActive
                ? activeLink
                : "px-6 py-3 text-text1 hover:text-text2 w-fit"
            }
          >
            <div className="flex gap-2">
              <i className="bi bi-file-earmark-ruled"></i>
              <p>Normativa</p>
            </div>
          </NavLink>
        </nav>
      </div>

      {/* Separador */}
      {/* <div className="h-24 w-full"></div> */}

      {/* Redes */}
      <div className="flex justify-center pb-5">
        <ul className="flex gap-4">
          <li className="text-text1 hover:text-text2 text-xl hover:text-2xl transition-all">
            <a href="https://www.instagram.com/arcenixgame/" target="_blank">
              <i className="bi bi-instagram"></i>
            </a>
          </li>
          <li className="text-text1 hover:text-text2 text-xl hover:text-2xl transition-all">
            <a
              href="https://www.linkedin.com/in/arcenix-company-5808b12b4/"
              target="_blank"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </li>
          <li className="text-text1 hover:text-text2 text-xl hover:text-2xl transition-all">
            <a href="https://twitter.com/ArcenixC" target="_blank">
              <i className="bi bi-twitter-x"></i>
            </a>
          </li>
          <li className="text-text1 hover:text-text2 text-xl hover:text-2xl transition-all">
            <a href="https://www.tiktok.com/@arcenixcompany" target="_blank">
              <i className="bi bi-tiktok"></i>
            </a>
          </li>
          <li className="text-text1 hover:text-text2 text-xl hover:text-2xl transition-all">
            <a href="">
              <i className="bi bi-facebook"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { BarraLateral };

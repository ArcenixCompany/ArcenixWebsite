// import back1 from "../views/img/backText.jpg";
import { useEffect } from "react";
import Logo from "../views/img/logoViolet.png";
import { NavLink } from "react-router-dom";

const Inicio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-txt2 dark:bg-gradient-to-br from-morado2 to-darkAzul flex flex-col p-5">
      <div className="min-h-screen w-full flex justify-center items-center">
        <div className="w-full h-full bg-cover bg-center flex flex-col sm:flex-row justify-center items-center space-x-6">
          <img
            src={Logo}
            alt="logo"
            className="w-[200px] h-[200px] rounded-full"
          />
          <div>
            <p className="text-bg1 dark:text-txt1 text-[50px] font-bold">Arcenix</p>
            <p className="text-bg1 dark:text-txt1 text-[50px] font-bold">Company</p>
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col lg:flex-row w-full items-center justify-around">
          <NavLink
            to="/deps/arcDes"
            className="card-inicio-dep shadow-sm shadow-bg1 mt-4"
          >
            <p>Arcenix Desarrollo</p>
            <p className="p-4 text-bg1 dark:text-txt2  text-justify">
              En Arcenix desarrollo vas a poder contratar servicios de
              desarrollo web.
            </p>
            <div className="bg-black rounded-full w-[55px] h-[55px] flex items-center justify-center">
              <img src={Logo} alt="logo" className="rounded-full" />
            </div>
          </NavLink>

          <NavLink
            to="/deps/arcStudio"
            className="card-inicio-dep shadow-sm shadow-bg1 mt-4"
          >
            <p>Arcenixs Studio</p>
            <p className="p-4 text-bg1 dark:text-txt2  text-justify">
              En Arcenix Studio vas a poder contratar servicios de diseño
              gráfico.
            </p>
            <div className="bg-black rounded-full w-[55px] h-[55px] flex items-center justify-center">
              <img src={Logo} alt="logo" className="rounded-full" />
            </div>
          </NavLink>

          <NavLink
            to="/deps/arcGames"
            className="card-inicio-dep shadow-sm shadow-bg1 mt-4"
          >
            <p>Arcenixs Games</p>
            <p className="p-4 text-bg1 dark:text-txt2  text-justify">
              En Arcenix Games vas a poder acceder a nuestros servidores de
              videojuegos
            </p>
            <div className="bg-black rounded-full w-[55px] h-[55px] flex items-center justify-center">
              <img src={Logo} alt="logo" className="rounded-full" />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export { Inicio };

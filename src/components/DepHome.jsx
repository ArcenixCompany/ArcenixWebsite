import React from "react";
import Logo from "../views/img/logoViolet.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const DepHome = () => {
  const [isDevHovered, setDevIsHovered] = useState(false);
  const [isStuHovered, setStuIsHovered] = useState(false);
  const [isGamHovered, setGamIsHovered] = useState(false);

  return (
    <div>
      <div className="flex flex-col lg:flex-row w-full items-center justify-around pt-16">
        <NavLink
          to="/deps/arcDes"
          className="card-inicio-dep shadow-sm shadow-bg1 mt-4 rounded-xl"
          onMouseEnter={() => setDevIsHovered(true)}
          onMouseLeave={() => setDevIsHovered(false)}
        >
          <p className="text-xl text-emerald-500" 
            style={{ textShadow: isDevHovered ? '0 0 13px rgba(16, 185, 129, 0.6)' : 'none' }}
          >Arcenix Develop</p>
          <p className="p-4 text-bg1 dark:text-txt2 text-center">
            En Arcenix Develop vas a poder contratar servicios de desarrollo
            web.
          </p>
          <div className="bg-black rounded-full w-[55px] h-[55px] flex items-center justify-center" 
            style={{ boxShadow: isDevHovered ? '0 0 15px rgba(16, 185, 129, 0.5)' : 'none' }}
          >
            <img src={Logo} alt="logo" className="rounded-full" />
          </div>
        </NavLink>

        <NavLink
          to="/deps/arcStudio"
          className="card-inicio-dep shadow-sm shadow-bg1 mt-4 rounded-xl"
          onMouseEnter={() => setStuIsHovered(true)}
          onMouseLeave={() => setStuIsHovered(false)}
        >
          <p className="text-xl text-indigo-600" 
            style={{ textShadow: isStuHovered ? '0 0 13px rgba(99, 102, 241, 0.6)' : 'none' }}
          >Arcenix Studio</p>
          <p className="p-4 text-bg1 dark:text-txt2 text-center">
            En Arcenix Studio vas a poder contratar servicios de diseño gráfico.
          </p>
          <div className="bg-black rounded-full w-[55px] h-[55px] flex items-center justify-center"
            style={{ boxShadow: isStuHovered ? '0 0 15px rgba(99, 102, 241, 0.5)' : 'none' }}
          >
            <img src={Logo} alt="logo" className="rounded-full" />
          </div>
        </NavLink>

        <NavLink
          to="/deps/arcGames"
          className="card-inicio-dep shadow-sm shadow-bg1 mt-4 rounded-xl"
          onMouseEnter={() => setGamIsHovered(true)}
          onMouseLeave={() => setGamIsHovered(false)}
        >
          <p className="text-xl text-pink-600" 
            style={{ textShadow: isGamHovered ? '0 0 13px rgba(236, 72, 153, 0.6)' : 'none' }}
            >Arcenix Gaming</p>
          <p className="p-4 text-bg1 dark:text-txt2 text-center">
            En Arcenix Gaming vas a poder acceder a nuestros servidores de
            videojuegos
          </p>
          <div className="bg-black rounded-full w-[55px] h-[55px] flex items-center justify-center"
            style={{ boxShadow: isGamHovered ? '0 0 15px rgba(236, 72, 153, 0.5)' : 'none' }}
          >
            <img src={Logo} alt="logo" className="rounded-full" />
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export { DepHome };

// import back1 from "../views/img/backText.jpg";
import { useEffect } from "react";
import LogoWhite from "../views/svg/LogoWhite.svg";
import LogoViolet from '../views/svg/LogoViolet.svg'
import { NavLink } from "react-router-dom";
import '../styles/custom.css';
import { useState } from "react";

const Inicio = () => {
  const [isDevHovered, setDevIsHovered] = useState(false);
  const [isStuHovered, setStuIsHovered] = useState(false);
  const [isGamHovered, setGamIsHovered] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-gradient-to-r from-gris to-blanco dark:bg-gradient-to-r dark:from-morado2 dark:to-darkAzul flex flex-col p-5">
      <div className="min-h-screen w-full flex justify-center items-center">
        <div className="w-full h-full bg-cover bg-center flex flex-col sm:flex-row justify-center items-center space-x-6">
          <img
            src={LogoViolet}
            alt="LogoWhite"
            className="w-[200px] h-[200px]"
          />
          <div>
            <p className="text-bg1 dark:text-blanco text-[50px] font-bold">Arcenix</p>
            <p className="text-bg1 dark:text-rosaClaro text-[50px] font-bold">Company</p>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col lg:flex-row w-full items-center justify-around pb-16">
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
          <div className="bg-opacity-0 rounded-full w-[55px] h-[55px] flex items-center justify-center">
            <img src={LogoWhite} alt="LogoWhite"  />
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
          <div className="bg-opacity-0 rounded-full w-[55px] h-[55px] flex items-center justify-center">
            <img src={LogoWhite} alt="LogoWhite"  />
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
          <div className="bg-opacity-0 rounded-full w-[55px] h-[55px] flex items-center justify-center">
            <img src={LogoWhite} alt="LogoWhite"  />
          </div>
        </NavLink>
      </div>

      <div>
        <p className="text-bg1 dark:text-blanco text-[35px] font-bold text-center">Patrocinador</p>
      </div>
      <div className="flex flex-col lg:flex-row w-full items-center justify-around pb-10">
        <img src={"https://upload.wikimedia.org/wikipedia/commons/6/6f/9zteam_logo.png"} alt="Logo 9z"  
          style={{ filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.7))' }}
        />
      </div>
    </div>
  );
};

export { Inicio };

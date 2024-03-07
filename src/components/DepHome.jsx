import React from "react";
import Logo from "../views/img/logoViolet.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import pluma from "../views/svg/pluma.svg";
import monitor from "../views/svg/monitor.svg";
import controller from "../views/svg/controller.svg";

const DepHome = () => {
  const [isDevHovered, setDevIsHovered] = useState(false);
  const [isStuHovered, setStuIsHovered] = useState(false);
  const [isGamHovered, setGamIsHovered] = useState(false);

  return (
    <div>
      <div className="flex flex-col lg:flex-row w-full h-screen items-center justify-center gap-10">
        <div className="card-inicio-dep">
          <div className="p-3">
            <img src={pluma} />
          </div>
          <p
            className="text-3xl font-bold px-3 text-blanco"
            style={{
              textShadow: isStuHovered
                ? "0 0 13px rgba(99, 102, 241, 0.9)"
                : "none",
            }}
          >
            Arcenix Studio
          </p>
          <p className="text-gray-400 text-sm px-3 pb-10 pt-2">
            Bienvenido al corazón creativo de nuestra empresa, donde cada pixel
            cuenta una historia y cada sonido evoca emociones. Nuestro equipo de
            diseño gráfico y audiovisual está formado por mentes innovadoras y
            apasionadas que transforman ideas en experiencias visuales
            cautivadoras.
          </p>
          <NavLink
            to="/deps/arcStudio"
            className="flex space-x-2 p-2 px-10 bg-morado w-fit text-blanco font-bold text-xl"
            onMouseEnter={() => setStuIsHovered(true)}
            onMouseLeave={() => setStuIsHovered(false)}
          >
            <p>Saber más</p>
            <i className="bi bi-arrow-right"></i>
          </NavLink>
        </div>

        <div className="card-inicio-dep">
          <div className="p-3">
            <img src={monitor} />
          </div>
          <p
            className="text-3xl font-bold px-3 text-blanco"
            style={{
              textShadow: isDevHovered
                ? "0 0 13px rgba(16, 185, 129, 0.9)"
                : "none",
            }}
          >
            Arcenix Desarrollo
          </p>
          <p className="text-gray-400 text-sm px-3 pb-10 pt-2">
            El corazón de innovación tecnológica de Arcenix Company. Conformado
            por un equipo apasionado de desarrolladores dedicados a construir el
            futuro digital, donde cada línea de código es una oportunidad para
            transformar ideas en realidad. Nuestro equipo de desarrolladores
            trabaja incansablemente para construir soluciones digitales sólidas
            y vanguardistas.
          </p>
          <NavLink
            to="/deps/arcDes"
            className="flex space-x-2 p-2 px-10 bg-morado w-fit text-blanco font-bold text-xl"
            onMouseEnter={() => setDevIsHovered(true)}
            onMouseLeave={() => setDevIsHovered(false)}
          >
            <p>Saber más</p>
            <i className="bi bi-arrow-right"></i>
          </NavLink>
        </div>

        <div className="card-inicio-dep">
          <div className="p-3">
            <img src={controller} />
          </div>
          <p
            className="text-3xl font-bold px-3 text-blanco"
            style={{
              textShadow: isGamHovered
                ? "0 0 13px rgba(219, 39, 119, 0.9)"
                : "none",
            }}
          >
            Arcenix Games
          </p>
          <p className="text-gray-400 text-sm px-3 pb-10 pt-2">
            Equipo de ingenieros y desarrolladores apasionados por los juegos,
            comprometidos con proporcionar la base tecnológica que hace posible
            la magia del juego en línea. Desde servidores escalables hasta
            arquitecturas de red eficientes, estamos aquí para impulsar tu
            universo virtual y volverlo realidad.
          </p>
          <NavLink
            to="/deps/arcGames"
            className="flex space-x-2 p-2 px-10 bg-morado w-fit text-blanco font-bold text-xl"
            onMouseEnter={() => setGamIsHovered(true)}
            onMouseLeave={() => setGamIsHovered(false)}
          >
            <p>Saber más</p>
            <i className="bi bi-arrow-right"></i>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export { DepHome };

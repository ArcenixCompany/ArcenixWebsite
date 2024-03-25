// import back1 from "../views/img/backText.jpg";
import { useEffect } from "react";
import pluma from "../views/svg/pluma.svg";
import monitor from "../views/svg/monitor.svg";
import controller from "../views/svg/controller.svg";
import { NavLink } from "react-router-dom";
import "../styles/custom.css";
import { useState } from "react";
import bgHome from "../views/img/bg-home.png";
import bgmen from "../views/img/bg-men-work.png";

const Inicio = () => {
  const [isDevHovered, setDevIsHovered] = useState(false);
  const [isStuHovered, setStuIsHovered] = useState(false);
  const [isGamHovered, setGamIsHovered] = useState(false);

  const SMedia = [
    {
      src: "instagram",
      path: "https://www.instagram.com/arcenixgame/",
    },
    {
      src: "linkedin",
      path: "https://www.linkedin.com/in/arcenix-company-5808b12b4/",
    },
    {
      src: "tiktok",
      path: "https://www.tiktok.com/@arcenixcompany",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div
        className="bg-cover bg-center flex w-full py-32"
        style={{ backgroundImage: `url(${bgHome})` }}
      >
        <div className="w-full flex flex-col lg:flex-row justify-center items-center">
          <div className="w-[100%] lg:w-[50%] flex flex-col justify-between items-end">
            <div className="w-[85%] lg:w-[70%] flex flex-col justify-center items-center">
              <h1
                className="text-5xl dark:text-txt2 text-start ps-0 lg:px-8 py-4 tracking-tight font-bold uppercase"
                style={{ fontFamily: "'Helvetica Neue', sans-serif" }}
              >
                Arcenix <span className="text-blanco">Company</span>
              </h1>
              <p className="text-blanco ps-0 pe-8 lg:px-8 py-2 m-1">
                ¿Estás buscando optimizar tus procesos con soluciones
                tecnológicas? ¿Necesitas mejorar la eficiencia de tu empresa
                pero no sabes por dónde empezar?,¿Tenes ganas de crear
                servidores personalizados con la maxima eficiencia posible?
                Soluciones a estas cuestiones y muchas mas Arcenix te las puede
                dar, nosotros te ayudamos.
              </p>
              <h3 className="text-blanco font-bold ps-0 lg:px-8 py-2 m-1">
                Servicios de diseño | desarrollo web | Gaming | desarrollo de
                software
              </h3>
              <div className="ps-0 lg:px-8 py-2 m-1 space-x-3">
                <NavLink to="/about" className="boton m-1">
                  Quiero saber más
                </NavLink>
                <NavLink to="/contact" className="boton m-1">
                  Contactanos
                </NavLink>
              </div>
            </div>
          </div>

          <div className="w-[100%] sm:w-[50%] h-full flex flex-col justify-center items-center pt-10">
            <div className="w-full h-full flex flex-col justify-end items-center">
              <div className="flex flex-col">
                <h3 className="text-blanco font-bold text-xl">
                  Siguenos en nuestras redes
                </h3>
                <div className="flex justify-around">
                  {SMedia.map((a, b) => (
                    <li
                      key={b}
                      className={`text-bg1 dark:text-txt1 text-sm flex items-center gap-x-4 cursor-pointer p-2 rounded-md ${
                        a.gap ? "mt-9" : "mt-2"
                      } ${!open && "justify-center"}`}
                    >
                      <a
                        href={a.path}
                        className="space-x-3 bg-blanco w-10 h-10 flex justify-center items-center rounded-full hover:bg-morado transition-all"
                        target="_blank"
                      >
                        <i
                          className={`bi bi-${a.src} text-morado2 text-xl`}
                        ></i>
                      </a>
                    </li>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-cover bg-center flex flex-col justify-center items-start w-full py-52 px-10 sm:px-24"
        style={{ backgroundImage: `url(${bgmen})` }}
      >
        <h2 className="text-blanco text-3xl p-4 font-bold">
          Hay que comenzar a trabajar juntos
        </h2>
        <div className="p-4">
          <NavLink
            to="/contact"
            className="text-blanco bg-morado2 p-5 font-bold hover:bg-morado transition-all"
          >
            Contactarnos
          </NavLink>
        </div>
      </div>

      <div className="mt-14">
        <p className="text-bg1 dark:text-blanco text-[35px] font-bold text-center uppercase">
          Patrocinador
        </p>
      </div>

      <div className="flex flex-col lg:flex-row w-full items-center justify-around pb-10">
        <img
          src={
            "https://upload.wikimedia.org/wikipedia/commons/6/6f/9zteam_logo.png"
          }
          alt="Logo 9z"
          style={{ filter: "drop-shadow(0 0 10px rgba(0, 0, 0, 0.7))" }}
        />
      </div>
    </div>
  );
};

export { Inicio };

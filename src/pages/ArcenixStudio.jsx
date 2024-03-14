import React, { useEffect } from "react";
import { NavbarDeps } from "../components/NavbarDeps";
import { GiPencilRuler } from "react-icons/gi";
import { ImFilm } from "react-icons/im";
import { GiSoundWaves } from "react-icons/gi";
import { BsPatchCheck } from "react-icons/bs";
import { NavLink } from "react-router-dom";

import bgHome from "../views/img/bg-home.png";
import pc from "../views/svg/desktop-pc.svg";
import aguA from "../views/img/agustin_abarca.jpg";
import fraA from "../views/img/franco_alvarez.jpg";

const ArcenixStudio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div>
        <NavbarDeps />
      </div>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div
          className="bg-cover bg-center flex w-full py-32"
          style={{ backgroundImage: `url(${bgHome})` }}
        >
          <div className="w-[70%] flex flex-col px-40 py-12">
            <h1
              className="text-5xl dark:text-txt2 text-start mt-10 mb-6 tracking-tight font-bold uppercase"
              style={{ fontFamily: "'Helvetica Neue', sans-serif" }}
            >
              Arcenix <span className="text-indigo-500">Studio</span>
            </h1>
            <p className="text-xl text-bg2 dark:text-txt2 tracking-tight text-justify pr-16">
              Somos un equipo diverso de diseñadores gráficos, creadores de
              contenido audiovisual, y expertos en sonido, unidos por el deseo
              de dar vida a tus ideas de manera visualmente impactante y
              acústicamente cautivadora
            </p>
          </div>
          <div className="w-[30%] p-10">
            <img src={pc} className="w-full" />
          </div>
        </div>

        <div className="bg-darkAzul p-10 flex flex-col justify-center items-center">
          <div className="w-[70%] min-h-[200px] p-5 my-5">
            <div className="flex">
              <div className="w-[99%] p-5">
                <h2 className="text-blanco font-bold text-end px-2 pt-4">
                  ¿Que nos distingue?
                </h2>
                <p className="text-gray-400 text-2xl text-end px-2">
                  “La creatividad es nuestra moneda y la innovación nuestro
                  idioma. Desde diseños gráficos estéticamente atractivos hasta
                  producciones audiovisuales de alta calidad, nos destacamos al
                  fusionar arte y tecnología con un toque distintivo”
                </p>
              </div>

              <div className="w-[1%] min-h-[200px] bg-gradient-to-b from-orange-600 to-violet-950"></div>
            </div>
          </div>

          <div className="w-[70%] min-h-[200px] p-5 my-5">
            <div className="flex">
              <div className="w-[1%] min-h-[200px] bg-gradient-to-b from-orange-600 to-violet-950"></div>
              <div className="w-[99%] p-5">
                <h2 className="text-blanco font-bold px-2 pt-4">
                  Nuestra Filosofía
                </h2>
                <p className="text-gray-400 text-2xl px-2">
                  “Creemos en la poderosa conexión entre lo visual y lo
                  auditivo. Cada diseño, cada fotograma, y cada nota musical son
                  cuidadosamente seleccionados para contar una historia única y
                  dejar una impresión duradera”
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blanco w-full bg-gradient-to-b from-morado2 to-black p-5 min-h-screen flex flex-col justify-center items-center">
          <h2 className="text-blanco text-4xl text-center p-5">Servicios</h2>
          <div className="flex justify-center">
            <div className="p-10 border-r-2 border-blanco">
              <GiPencilRuler className="text-[70px] text-blanco" />

              <h3 className="text-blanco text-2xl py-3">
                Diseño Gráfico Impactante
              </h3>
              <p className="text-blanco opacity-50 text-xl">
                Logotipos, banners, y elementos visuales que destacan.
              </p>
            </div>
            <div className="p-10 border-r-2 border-blanco">
              <ImFilm className="text-[70px] text-blanco" />

              <h3 className="text-blanco text-2xl py-3">
                Produccion Audiovisual
              </h3>
              <p className="text-blanco opacity-50 text-xl">
                Videos promocionales, animaciones, y contenido multimedia.
              </p>
            </div>
            <div className="p-10">
              <GiSoundWaves className="text-[70px] text-blanco" />

              <h3 className="text-blanco text-2xl py-3">
                Composicion y diseño sonoro
              </h3>
              <p className="text-blanco opacity-50 text-xl">
                Creación de ambientes auditivos envolventes
              </p>
            </div>
          </div>
          <div className="w-[75%] m-auto p-5">
            <h2 className="text-blanco text-3xl text-center p-3">
              ¿Por qué Elegirnos?
            </h2>
            <div className="flex space-x-3 p-5">
              <BsPatchCheck className="text-4xl text-blanco" />
              <p className="text-blanco p-2 text-xl opacity-65">
                Colaboración Creativa: Trabajamos mano a mano contigo para
                capturar tu visión y plasmarla de manera auténtica.
              </p>
            </div>
            <div className="flex space-x-3 p-5">
              <BsPatchCheck className="text-4xl text-blanco" />
              <p className="text-blanco p-2 text-xl opacity-65">
                Estándares de Calidad: Cada píxel y cada nota son afinados para
                alcanzar la excelencia.
              </p>
            </div>
            <div className="flex space-x-3 p-5">
              <BsPatchCheck className="text-4xl text-blanco" />
              <p className="text-blanco p-2 text-xl opacity-65">
                Adaptabilidad: Desde proyectos pequeños hasta campañas a gran
                escala, estamos preparados para cualquier desafío creativo.
              </p>
            </div>
          </div>
          <div className="w-[75%] flex flex-col justify-center items-center p-5">
            <h2 className="text-blanco text-4xl font-bold text-center p-5">
              Estamos listos para comenzar
            </h2>
            <div className="py-10">
              <NavLink
                to="/contact"
                className="bg-morado2 p-6 text-blanco text-2xl hover:bg-morado transition-all"
              >
                Empecemos
              </NavLink>
            </div>
          </div>

          <section className="w-full p-2 bg-d2 flex flex-wrap gap-10 justify-center">
            <div className="bg-morado2 h-fit group flex flex-col justify-center items-center text-center rounded-xl shadow-xl z-10 mt-4">
              <div className="relative overflow-hidden rounded-t-xl py-6">
                <div className="rounded-full border-white border-2 p-1 mx-10">
                  <div className="rounded-full w-[125px] h-[125px] overflow-hidden">
                    <img
                      className="w-full"
                      src={
                        `${aguA}`
                      }
                      alt="foto"
                    />
                  </div>
                </div>
                <h2 className="text-xl text-blanco font-bold p-2 mt-4 uppercase">
                  Agustin Alvarez
                </h2>
                <p className="text-lg text-blanco font-thin tracking-tight leading-none uppercase opacity-40">
                  DISEÑADOR<br></br>GRAFICO
                </p>
              </div>
              <div className="bg-white w-full flex justify-center space-x-5 py-4 rounded-b-lg">
                <div className="bg-morado2 rounded-full w-9 h-9 flex items-center justify-center">
                  <a href="" target="_blank">
                    <i className="bi bi-instagram text-white"></i>
                  </a>
                </div>

                <div className="bg-morado2 rounded-full w-9 h-9 flex items-center justify-center">
                  <a href="" target="_blank">
                    <i className="bi bi-linkedin text-white"></i>
                  </a>
                </div>

                <div className="bg-morado2 rounded-full w-9 h-9 flex items-center justify-center">
                  <a href="">
                    <i className="bi bi-envelope-fill text-white"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-morado2 h-fit group flex flex-col justify-center items-center text-center rounded-xl shadow-xl z-10 mt-4">
              <div className="relative overflow-hidden rounded-t-xl py-6">
                <div className="rounded-full border-white border-2 p-1 mx-10">
                  <div className="rounded-full w-[125px] h-[125px] overflow-hidden">
                    <img
                      className="w-full"
                      src={
                        `${fraA}`
                      }
                      alt="foto"
                    />
                  </div>
                </div>
                <h2 className="text-xl text-blanco font-bold p-2 mt-4 uppercase">
                  Franco Alvarez
                </h2>
                <p className="text-lg text-blanco font-thin tracking-tight leading-none uppercase opacity-40">
                  EDITOR<br></br>MULTIMEDIA
                </p>
              </div>
              <div className="bg-white w-full flex justify-center space-x-5 py-4 rounded-b-lg">
                <div className="bg-morado2 rounded-full w-9 h-9 flex items-center justify-center">
                  <a href="" target="_blank">
                    <i className="bi bi-instagram text-white"></i>
                  </a>
                </div>

                <div className="bg-morado2 rounded-full w-9 h-9 flex items-center justify-center">
                  <a href="" target="_blank">
                    <i className="bi bi-linkedin text-white"></i>
                  </a>
                </div>

                <div className="bg-morado2 rounded-full w-9 h-9 flex items-center justify-center">
                  <a href="">
                    <i className="bi bi-envelope-fill text-white"></i>
                  </a>
                </div>
              </div>
            </div>

          </section>
          
        </div>
      </div>
    </div>
  );
};

export { ArcenixStudio };

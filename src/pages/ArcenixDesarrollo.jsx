import React, { useEffect } from "react";
import { NavbarDeps } from "../components/NavbarDeps";
import bgHome from "../views/img/bg-home.png";
import pc from "../views/svg/desktop-pc.svg";
import { MdOutlinePhonelink } from "react-icons/md";
import { MdDeveloperBoard } from "react-icons/md";
import { TbApi } from "react-icons/tb";
import { BsPatchCheck } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const ArcenixDesarrollo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div>
        <NavbarDeps />
      </div>
      <div className="min-h-screen d-block justify-center items-center">
        <div
          className="bg-cover bg-center flex w-full py-32"
          style={{ backgroundImage: `url(${bgHome})` }}
        >
          <div className="w-[70%] flex flex-col px-40 py-12">
            <h1
              className="text-5xl dark:text-txt2 text-start mt-10 mb-6 tracking-tight font-bold uppercase"
              style={{ fontFamily: "'Helvetica Neue', sans-serif" }}
            >
              Arcenix <span className="text-green-600">Desarrollo</span>
            </h1>
            <p className="text-xl text-bg2 dark:text-txt2 tracking-tight text-justify pr-16">
              Ingenieros, programadores y apasionados por la tecnología,
              fusionando habilidades técnicas con una visión clara: hacer
              realidad tus ideas a través del desarrollo de software sólido y
              escalable.
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
                  “La búsqueda incansable de la excelencia y la capacidad de
                  enfrentar desafíos tecnológicos nos destacan. Desde
                  aplicaciones móviles hasta sistemas complejos, nuestro equipo
                  está equipado para transformar conceptos en experiencias
                  digitales impactantes”
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
                  “Creemos en la potencia de la tecnología para cambiar el
                  mundo. Cada línea de código que escribimos es un paso hacia la
                  creación de soluciones robustas y eficientes que impulsen el
                  progreso”
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blanco w-full bg-gradient-to-b from-morado2 to-black p-5 min-h-screen flex flex-col justify-center items-center">
          <h2 className="text-blanco text-4xl text-center p-5">Servicios</h2>
          <div className="flex justify-center">
            <div className="p-10 border-r-2 border-blanco">
              <MdOutlinePhonelink className="text-[70px] text-blanco" />

              <h3 className="text-blanco text-2xl py-3">
                Desarrollo Web y Móvil
              </h3>
              <p className="text-blanco opacity-50 text-xl">
                Creación de plataformas interactivas y experiencias móviles de
                vanguardia
              </p>
            </div>
            <div className="p-10 border-r-2 border-blanco">
              <MdDeveloperBoard className="text-[70px] text-blanco" />

              <h3 className="text-blanco text-2xl py-3">
                Arquitectura de Software
              </h3>
              <p className="text-blanco opacity-50 text-xl">
                Diseño de sistemas escalables y flexibles para enfrentar
                desafíos tecnológicos
              </p>
            </div>
            <div className="p-10">
              <TbApi className="text-[70px] text-blanco" />
              <h3 className="text-blanco text-2xl py-3">Integración de API</h3>
              <p className="text-blanco opacity-50 text-xl">
                Conectamos tus aplicaciones con el mundo, permitiendo una
                experiencia completa
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
                Experiencia Comprobada: Años de experiencia en el desarrollo
                exitoso de proyectos diversos.
              </p>
            </div>
            <div className="flex space-x-3 p-5">
              <BsPatchCheck className="text-4xl text-blanco" />
              <p className="text-blanco p-2 text-xl opacity-65">
                Enfoque Colaborativo: Trabajamos estrechamente contigo para
                entender tus metas y convertirlas en soluciones tangibles.
              </p>
            </div>
            <div className="flex space-x-3 p-5">
              <BsPatchCheck className="text-4xl text-blanco" />
              <p className="text-blanco p-2 text-xl opacity-65">
                Adaptabilidad Tecnológica: Estamos siempre actualizados con las
                últimas tendencias para brindar soluciones modernas y
                eficientes.
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
        </div>

        <section className="w-full p-2 bg-d2 flex flex-wrap gap-10 justify-center">
          <div className="bg-morado2 h-fit group flex flex-col justify-center items-center text-center rounded-xl shadow-xl z-10 mt-4">
            <div className="relative overflow-hidden rounded-t-xl py-6">
              <div className="rounded-full border-white border-2 p-1 mx-10">
                <div className="rounded-full w-[125px] h-[125px] overflow-hidden">
                  <img
                    className="w-full"
                    src={
                      "https://hips.hearstapps.com/ellees.h-cdn.co/assets/15/37/1024x1332/1024x1332-por-ti-rostros-activos-personas-luchadoras-12718597-1-esl-es-rostros-activos-personas-luchadoras-jpg.jpg?resize=980:*"
                    }
                    alt="foto"
                  />
                </div>
              </div>
              <h2 className="text-xl text-blanco font-bold p-2 mt-4 uppercase">
                Luciana
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
                      "https://hips.hearstapps.com/ellees.h-cdn.co/assets/15/37/1024x1332/1024x1332-por-ti-rostros-activos-personas-luchadoras-12718597-1-esl-es-rostros-activos-personas-luchadoras-jpg.jpg?resize=980:*"
                    }
                    alt="foto"
                  />
                </div>
              </div>
              <h2 className="text-xl text-blanco font-bold p-2 mt-4 uppercase">
                Veronica
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

          <div className="bg-morado2 h-fit group flex flex-col justify-center items-center text-center rounded-xl shadow-xl z-10 my-4">
            <div className="relative overflow-hidden rounded-t-xl py-6">
              <div className="rounded-full border-white border-2 p-1 mx-10">
                <div className="rounded-full w-[125px] h-[125px] overflow-hidden">
                  <img
                    className="w-full"
                    src={
                      "https://hips.hearstapps.com/ellees.h-cdn.co/assets/15/37/1024x1332/1024x1332-por-ti-rostros-activos-personas-luchadoras-12718597-1-esl-es-rostros-activos-personas-luchadoras-jpg.jpg?resize=980:*"
                    }
                    alt="foto"
                  />
                </div>
              </div>
              <h2 className="text-xl text-blanco font-bold p-2 mt-4 uppercase">
                Martina
              </h2>
              <p className="text-lg text-blanco font-thin tracking-tight leading-none uppercase opacity-40 px-4 text-wrap">
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
  );
};

export { ArcenixDesarrollo };

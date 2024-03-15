import React, { useEffect } from "react";
import { AiFillDatabase } from "react-icons/ai";
import { IoIosSpeedometer } from "react-icons/io";
import { BsFillShieldLockFill } from "react-icons/bs";
import { BsPatchCheck } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import imgGta from "../views/img/gta5.jpeg";
import imgMine from "../views/img/minecraft.jpeg";

import bgHome from "../views/img/bg-home.png";
import pc from "../views/svg/desktop-pc.svg";

const ArcenixGames = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <div>
<<<<<<< HEAD
      <div className="min-h-screen d-block justify-center items-center">
        <div
          className="bg-cover bg-center md:flex w-full py-32 px-10 md:px-0"
          style={{ backgroundImage: `url(${bgHome})` }}
        >
          <div className="w-full md:w-[70%] flex flex-col md:px-40 md:py-12">
=======
      <div>
        <NavbarDeps />
      </div>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div
          className="bg-cover bg-center w-full flex flex-col-reverse lg:flex-row py-32"
          style={{ backgroundImage: `url(${bgHome})` }}
        >
          <div className="w-[100%] lg:w-[70%] flex flex-col px-10 lg:px-40 py-12">
>>>>>>> 8cdd5dd919b4a35e893ec322c64f90738b893995
            <h1
              className="text-5xl dark:text-txt2 text-center lg:text-start mt-10 mb-6 tracking-tight font-bold uppercase"
              style={{ fontFamily: "'Helvetica Neue', sans-serif" }}
            >
              Arcenix <span className="text-pink-600">Games</span>
            </h1>
<<<<<<< HEAD
            <p className="text-xl text-bg2 dark:text-txt2 tracking-tight text-justify md:pr-16">
=======
            <p className="text-xl text-bg2 dark:text-txt2 tracking-tight text-justify lg:pr-16">
>>>>>>> 8cdd5dd919b4a35e893ec322c64f90738b893995
              Bienvenido al núcleo innovador de la diversión digital, donde la
              excelencia técnica se encuentra con la pasión por los juegos.
              Nuestro equipo de desarrollo de servidores de videojuegos está
              dedicado a crear infraestructuras robustas que transforman cada
              una experiencia inolvidable.
            </p>
          </div>
<<<<<<< HEAD
          <div className="w-full md:w-[30%] p-10">
=======
          <div className="w-[100%] lg:w-[30%] px-10 lg:p-10">
>>>>>>> 8cdd5dd919b4a35e893ec322c64f90738b893995
            <img src={pc} className="w-full" />
          </div>
        </div>

        <div>
          <h2 className="text-blanco text-5xl p-5 text-center">
            Nuestros Servidores
          </h2>
          <div className="md:flex justify-evenly">

            <NavLink to="/" className=" flex justify-evenly items-center">
              <div
                style={{ backgroundImage: `url(${imgGta})` }}
                className=" w-[300px] h-[400px] hover:w-[310px] hover:h-[410px] transition-all duration-300 rounded-md flex justify-center items-end shadow-xl bg-cover bg-center"
              ></div>
            </NavLink>

            <NavLink to="/" className=" flex min-h-[600px] justify-evenly items-center">
              <div
                style={{ backgroundImage: `url(${imgMine})` }}
                className=" w-[300px] h-[400px] hover:w-[310px] hover:h-[410px] transition-all duration-300 rounded-md flex justify-center items-end shadow-xl bg-cover bg-center"
              ></div>
            </NavLink>

          </div>
        </div>

        <div className="bg-darkAzul p-10 flex flex-col justify-center items-center">
          <div className="w-[100%] sm:w-[70%] min-h-[200px] p-5 my-5">
            <div className="flex">
              <div className="w-[99%] p-5">
                <h2 className="text-blanco font-bold text-end px-2 pt-4">
                  ¿Que nos distingue?
                </h2>
                <p className="text-gray-400 text-2xl text-end px-2">
                  “La velocidad, la estabilidad y la adaptabilidad son nuestro
                  sello distintivo. Diseñamos y desarrollamos servidores que no
                  sólo soportan la carga de jugadores ávidos, sino que también
                  mejoran la conectividad y la interacción en tiempo real”
                </p>
              </div>

              <div className="w-[1%] min-h-[200px] bg-gradient-to-b from-orange-600 to-violet-950"></div>
            </div>
          </div>

          <div className="w-[100%] sm:w-[70%] min-h-[200px] p-5 my-5">
            <div className="flex">
              <div className="w-[1%] min-h-[200px] bg-gradient-to-b from-orange-600 to-violet-950"></div>
              <div className="w-[99%] p-5">
                <h2 className="text-blanco font-bold px-2 pt-4">
                  Nuestra Filosofía
                </h2>
                <p className="text-gray-400 text-2xl px-2">
                  “Creemos en la creación de mundos virtuales donde la
                  tecnología desaparece, dejando espacio para la inmersión total
                  del jugador. Cada línea de código está dedicada a maximizar el
                  rendimiento y la diversión”
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blanco w-full bg-gradient-to-b from-morado2 to-black p-5 min-h-screen flex flex-col justify-center items-center">
          <h2 className="text-blanco text-4xl text-center p-5 my-5">Servicios</h2>
          <div className="flex flex-col lg:flex-row justify-center mb-5">
            <div className="lg:w-1/3 p-10 border-r-2 border-blanco">
              <AiFillDatabase className="text-[70px] text-blanco" />

              <h3 className="text-blanco text-2xl py-3">
                Desarrollo de Servidores Multijugador
              </h3>
              <p className="text-blanco opacity-50 text-xl">
                Infraestructuras que permiten juegos en línea sin problemas
              </p>
            </div>
            <div className="lg:w-1/3 p-10 border-r-2 border-blanco">
              <IoIosSpeedometer className="text-[70px] text-blanco" />

              <h3 className="text-blanco text-2xl py-3">
                Optimización de Latencia
              </h3>
              <p className="text-blanco opacity-50 text-xl">
                Reducción al mínimo de los tiempos de respuesta para una
                experiencia de juego fluida
              </p>
            </div>
            <div className="lg:w-1/3 p-10 border-r-2 lg:border-r-0 border-blanco">
              <BsFillShieldLockFill className="text-[70px] text-blanco" />
              <h3 className="text-blanco text-2xl py-3">Seguridad de Datos</h3>
              <p className="text-blanco opacity-50 text-xl">
                Protegemos la integridad y privacidad de la información del
                jugador
              </p>
            </div>
          </div>
          <div className="w-[100%] sm:w-[75%] m-auto p-5">
            <h2 className="text-blanco text-3xl text-center p-3">
              ¿Por qué Elegirnos?
            </h2>
            <div className="flex space-x-3 p-5">
              <BsPatchCheck className="text-4xl text-blanco" />
              <p className="text-blanco p-2 text-xl opacity-65">
                Experiencia en la Industria: Años de experiencia en el
                desarrollo de servidores para juegos populares
              </p>
            </div>
            <div className="flex space-x-3 p-5">
              <BsPatchCheck className="text-4xl text-blanco" />
              <p className="text-blanco p-2 text-xl opacity-65">
                Adaptabilidad: Nos ajustamos a las necesidades específicas de tu
                juego, ya sea un MMO, un battle royale o cualquier otra
                categoría
              </p>
            </div>
            <div className="flex space-x-3 p-5">
              <BsPatchCheck className="text-4xl text-blanco" />
              <p className="text-blanco p-2 text-xl opacity-65">
                Soporte Continuo: Estamos comprometidos a mantener y mejorar
                constantemente nuestros servidores para garantizar un
                rendimiento óptimo
              </p>
            </div>
          </div>
          <div className="w-[100%] sm:w-[75%] flex flex-col justify-center items-center p-5">
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
<<<<<<< HEAD
=======

          <section className="w-full p-2 mb-10 bg-d2 flex flex-wrap gap-10 justify-center">
            <div className="bg-morado2 h-fit group flex flex-col justify-center items-center text-center rounded-xl shadow-xl z-10 mt-4">
              <div className="relative overflow-hidden rounded-t-xl py-6">
                <div className="rounded-full border-white border-2 p-1 mx-10">
                  <div className="rounded-full w-[125px] h-[125px] overflow-hidden">
                    <img
                      className="w-full"
                      src={
                        `${eliM}`
                      }
                      alt="foto"
                    />
                  </div>
                </div>
                <h2 className="text-xl text-blanco font-bold p-2 mt-4 uppercase">
                  Eliel Mato
                </h2>
                <p className="text-lg text-blanco font-thin tracking-tight leading-none uppercase opacity-40">
                  DESARROLLADOR<br></br>MINECRAFT
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
                        `${nahM}`                      }
                      alt="foto"
                    />
                  </div>
                </div>
                <h2 className="text-xl text-blanco font-bold p-2 mt-4 uppercase">
                  Nahuel Medina
                </h2>
                <p className="text-lg text-blanco font-thin tracking-tight leading-none uppercase opacity-40">
                  STAFF<br></br>ADMINISTRADOR
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

>>>>>>> 8cdd5dd919b4a35e893ec322c64f90738b893995
        </div>
      </div>
    </div>
  );
};

export { ArcenixGames };

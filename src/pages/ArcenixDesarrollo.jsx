import React, { useEffect } from "react";
import { MdOutlinePhonelink } from "react-icons/md";
import { MdDeveloperBoard } from "react-icons/md";
import { DiDatabase } from "react-icons/di";
import { BsPatchCheck } from "react-icons/bs";
import { DiGitBranch } from "react-icons/di";
import { FaShoppingBasket } from "react-icons/fa";
import { FaMobileScreenButton } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { NavbarDeps } from "../components/NavbarDeps";

import bgHome from "../views/img/bg-home.png";

import develop from "../views/svg/undraw_programming_re_kg9v.svg";
//import pc from "../views/svg/desktop-pc.svg";

import lauZ from "../views/img/lautaro_zalazar.png";
import danH from "../views/img/daniel_herrera.jpg";
import matA from "../views/img/matias_aguirre.jpg";
import valR from "../views/img/valentino_rivas.jpg";
import eliM from "../views/img/eliel_mato.jpg";
import nahM from "../views/img/nahuel_medina.jpg";

const ArcenixDesarrollo = () => {
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
          className="bg-cover bg-center w-full flex flex-col-reverse lg:flex-row py-32"
          style={{ backgroundImage: `url(${bgHome})` }}
        >
          <div className="w-[100%] lg:w-[70%] flex flex-col px-10 lg:px-40 py-12">
            <h1
              className="text-5xl text-blanco text-center lg:text-start mt-10 mb-6 tracking-tight font-bold uppercase"
              style={{ fontFamily: "'Helvetica Neue', sans-serif" }}
            >
              Arcenix <span className="text-green-600">Desarrollo</span>
            </h1>
            <p className="text-xl text-bg2 dark:text-txt2 tracking-tight text-justify lg:pr-16">
              Ingenieros, programadores y apasionados por la tecnología,
              fusionando habilidades técnicas con una visión clara: hacer
              realidad tus ideas a través del desarrollo de software sólido y
              escalable.
            </p>
          </div>
          <div className="w-[100%] lg:w-[30%] px-10 lg:p-10">
            <img src={develop} className="w-full" />
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

          <div className="w-[100%] sm:w-[70%] min-h-[200px] p-5 my-5">
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
          <h2 className="text-blanco text-4xl text-center p-5 mb-3">
            Servicios
          </h2>
          <div className="flex flex-wrap justify-center">
            <div className="lg:w-1/3 p-10 border-r-2 border-blanco">
              <MdOutlinePhonelink className="text-[70px] text-blanco" />
              <h3 className="text-blanco text-2xl py-3">
                Desarrollo de Software a Medida
              </h3>
              <p className="text-blanco opacity-50 text-xl">
                Desde aplicaciones empresariales hasta soluciones web
                personalizadas, creamos software que se adapta a sus necesidades
                específicas.
              </p>
            </div>
            <div className="lg:w-1/3 p-10 border-r-2 border-blanco">
              <FaShoppingBasket className="text-[70px] text-blanco" />
              <h3 className="text-blanco text-2xl py-3">
                Desarrollo de E-commerce
              </h3>
              <p className="text-blanco opacity-50 text-xl">
                Potencie su presencia en línea con plataformas de comercio
                electrónico robustas y seguras que garanticen una experiencia de
                compra sin problemas.
              </p>
            </div>
            <div className="lg:w-1/3 p-10 border-r-2 lg:border-r-0 border-blanco">
              <DiDatabase className="text-[70px] text-blanco" />
              <h3 className="text-blanco text-2xl py-3">
                Desarrollo de Servidores Personalizados
              </h3>
              <p className="text-blanco opacity-50 text-xl">
                Diseñamos y desarrollamos servidores a medida para adaptarse
                perfectamente a las demandas específicas de su aplicación o
                plataforma.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-center mb-5">
            <div className="lg:w-1/3 p-10 pt-0 border-r-2 border-blanco">
              <DiGitBranch className="text-[70px] text-blanco" />
              <h3 className="text-blanco text-2xl py-3">
                Consultoría Tecnológica
              </h3>
              <p className="text-blanco opacity-50 text-xl">
                Nuestro equipo de expertos en tecnología ofrece asesoramiento
                estratégico para optimizar sus procesos y maximizar el
                rendimiento de su infraestructura tecnológica.
              </p>
            </div>
            <div className="lg:w-1/3 p-10 pt-0 border-r-2 border-blanco">
              <MdDeveloperBoard className="text-[70px] text-blanco" />
              <h3 className="text-blanco text-2xl py-3">
                Servicios de Hosting de Alto Rendimiento
              </h3>
              <p className="text-blanco opacity-50 text-xl">
                Servicios de hosting que garantizan un rendimiento inigualable,
                con un tiempo de actividad excepcional y una seguridad robusta.
              </p>
            </div>
            <div className="lg:w-1/3 p-10 pt-0 border-r-2 lg:border-r-0 border-blanco">
              <FaMobileScreenButton className="text-[70px] text-blanco" />
              <h3 className="text-blanco text-2xl py-3">
                Aplicaciones Móviles Avanzadas
              </h3>
              <p className="text-blanco opacity-50 text-xl">
                Diseñamos y desarrollamos aplicaciones móviles intuitivas y
                potentes para iOS y Android.
              </p>
            </div>
          </div>

          {/* Desarrollo de Software a Medida: 
                Desde aplicaciones empresariales hasta soluciones web personalizadas, creamos software que se adapta a sus necesidades específicas.
              Aplicaciones Móviles Avanzadas: 
                Diseñamos y desarrollamos aplicaciones móviles intuitivas y potentes para iOS y Android.
              Consultoría Tecnológica: 
                Nuestro equipo de expertos en tecnología ofrece asesoramiento estratégico para optimizar sus procesos y maximizar el rendimiento de su infraestructura tecnológica.
              Desarrollo de E-commerce: 
                Potencie su presencia en línea con plataformas de comercio electrónico robustas y seguras que garanticen una experiencia de compra sin problemas.
              Desarrollo de Servidores Personalizados: 
                Diseñamos y desarrollamos servidores a medida para adaptarse perfectamente a las demandas específicas de su aplicación o plataforma.
              Servicios de Hosting de Alto Rendimiento: 
                Servicios de hosting que garantizan un rendimiento inigualable, con un tiempo de actividad excepcional y una seguridad robusta. */}

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

          <div>
            <h2 className="text-blanco text-4xl p-5 text-center">
              Nuestro equipo de trabajo
            </h2>
          </div>
          <section className="w-full p-2 mb-10 bg-d2 flex flex-wrap gap-10 justify-center">
            <div className="bg-morado2 h-fit group flex flex-col justify-center items-center text-center rounded-xl shadow-xl z-10 mt-4">
              <div className="relative overflow-hidden rounded-t-xl py-6">
                <div className="rounded-full border-white border-2 p-1 mx-10">
                  <div className="rounded-full w-[125px] h-[125px] overflow-hidden">
                    <img className="w-full" src={`${lauZ}`} alt="foto" />
                  </div>
                </div>
                <h2 className="text-xl text-blanco font-bold p-2 mt-4 uppercase">
                  Lautaro Zalazar
                </h2>
                <p className="text-lg text-blanco font-thin tracking-tight leading-none uppercase opacity-40">
                  DESARROLLADOR<br></br>FULLSTACK
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
                    <img className="w-full" src={`${valR}`} alt="foto" />
                  </div>
                </div>
                <h2 className="text-xl text-blanco font-bold p-2 mt-4 uppercase">
                  Valentino Rivas
                </h2>
                <p className="text-lg text-blanco font-thin tracking-tight leading-none uppercase opacity-40">
                  DESARROLLADOR<br></br>BACKEND
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
                    <img className="w-full" src={`${danH}`} alt="foto" />
                  </div>
                </div>
                <h2 className="text-xl text-blanco font-bold p-2 mt-4 uppercase">
                  Daniel Herrera
                </h2>
                <p className="text-lg text-blanco font-thin tracking-tight leading-none uppercase opacity-40 px-4 text-wrap">
                  DESARROLLADOR<br></br>FULLSTACK
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
                    <img className="w-full" src={`${matA}`} alt="foto" />
                  </div>
                </div>
                <h2 className="text-xl text-blanco font-bold p-2 mt-4 uppercase">
                  Matias Aguirre
                </h2>
                <p className="text-lg text-blanco font-thin tracking-tight leading-none uppercase opacity-40 px-4 text-wrap">
                  DISEÑADOR<br></br>UX / UI
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
                    <img className="w-full" src={`${eliM}`} alt="foto" />
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
                    <img className="w-full" src={`${nahM}`} alt="foto" />
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
        </div>
      </div>
    </div>
  );
};

export { ArcenixDesarrollo };

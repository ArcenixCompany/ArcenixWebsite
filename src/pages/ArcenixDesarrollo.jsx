import React, { useEffect } from "react";
import { NavbarDeps } from "../components/NavbarDeps";
import { Carousel } from "../components/Carousel";

const ArcenixDesarrollo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let slides = ["https://www.itl.cat/pngfile/big/327-3274977_software-development.jpg",
                "https://www.eweek.com/wp-content/uploads/2021/04/circuit-board.jpg",
                "https://www.247digitize.com/wp-content/uploads/2023/03/blog-image-on-data-management.jpg",];
  return (
    <div>
      <div>
        <NavbarDeps />
      </div>
      <div className='min-h-screen d-block justify-center items-center'>
        <div className="relative w-100">
          <Carousel slides={slides} />
        </div>

        <h1 className='text-5xl dark:text-txt2 text-center mt-10 mb-6 tracking-wider uppercase font-bold'
          style={{ fontFamily: "'Helvetica Neue', sans-serif" }}
        >Arcenix <span className='text-emerald-600'>Develop</span></h1>

        <p className="text-bg2 dark:text-txt2 text-justify px-12 py-5">
          El corazón de innovación tecnológica de Arcenix Company. Conformado por un equipo
          apasionado de desarrolladores dedicados a construir el futuro digital, donde cada línea de
          código es una oportunidad para transformar ideas en realidad. Nuestro equipo de
          desarrolladores trabaja incansablemente para construir soluciones digitales sólidas y
          vanguardistas.
        </p>

        <div className="bg-txt1 dark:bg-bg1 dark:bg-opacity-75 my-5 px-12 h-[200px] flex flex-col justify-center">
          <h2 className="text-2xl text-center text-bg1 dark:text-emerald-600">¿Quienes somos?</h2>
          <p className="text-bg2 dark:text-txt2 text-justify py-2">
              Ingenieros, programadores y apasionados por la tecnología, fusionando habilidades
              técnicas con una visión clara: hacer realidad tus ideas a través del desarrollo de software
              sólido y escalable. 
          </p>
        </div>

        <section className="w-full p-2 bg-d2 flex flex-wrap gap-10 justify-center">
          <div className="bg-purple-950 h-fit group flex flex-col justify-center items-center text-center rounded-xl z-10 mt-4">
            <div className="relative overflow-hidden rounded-t-xl py-6">
              <div className="rounded-full border-white border-2 p-1 mx-10">
                <div className="rounded-full w-[125px] h-[125px] overflow-hidden">
                  <img className="w-full" src={"https://hips.hearstapps.com/ellees.h-cdn.co/assets/15/37/1024x1332/1024x1332-por-ti-rostros-activos-personas-luchadoras-12718597-1-esl-es-rostros-activos-personas-luchadoras-jpg.jpg?resize=980:*"} alt="foto" />
                </div>
              </div>
              <h2 className="text-xl text-blanco font-bold p-2 mt-4 uppercase"
                style={{ transform: "scaleY(1.2)", display: "inline-block" }}
              >Luciana</h2>
              <p className="text-lg text-blanco font-thin tracking-tight uppercase opacity-40">
                PROGRAMADOR<br></br>BACK-END</p>
            </div>
            <div className="bg-white w-full flex justify-center space-x-5 py-4 rounded-b-lg">
              <div className="bg-purple-950 rounded-full w-9 h-9 flex items-center justify-center">
                <a
                  href=""
                  target="_blank"
                >
                  <i className="bi bi-instagram text-white"></i>
                </a>
              </div>

              <div className="bg-purple-950 rounded-full w-9 h-9 flex items-center justify-center">
                <a
                  href=""
                  target="_blank"
                >
                  <i className="bi bi-linkedin text-white"></i>
                </a>
              </div>

              <div className="bg-purple-950 rounded-full w-9 h-9 flex items-center justify-center">
                <a href="">
                  <i className="bi bi-twitter-x text-white"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-purple-950 h-fit group flex flex-col justify-center items-center text-center rounded-xl z-10 mt-4">
            <div className="relative overflow-hidden rounded-t-xl py-6">
              <div className="rounded-full border-white border-2 p-1 mx-10">
                <div className="rounded-full w-[125px] h-[125px] overflow-hidden">
                  <img className="w-full" src={"https://hips.hearstapps.com/ellees.h-cdn.co/assets/15/37/1024x1332/1024x1332-por-ti-rostros-activos-personas-luchadoras-12718597-1-esl-es-rostros-activos-personas-luchadoras-jpg.jpg?resize=980:*"} alt="foto" />
                </div>
              </div>
              <h2 className="text-xl text-blanco font-bold p-2 mt-4 uppercase"
                style={{ transform: "scaleY(1.2)", display: "inline-block" }}
              >Veronica</h2>
              <p className="text-lg text-blanco font-thin tracking-tight uppercase opacity-40"
              >PROGRAMADOR<br></br>BACK-END</p>
            </div>
            <div className="bg-white w-full flex justify-center space-x-5 py-4 rounded-b-lg">
              <div className="bg-purple-950 rounded-full w-9 h-9 flex items-center justify-center">
                <a
                  href=""
                  target="_blank"
                >
                  <i className="bi bi-instagram text-white"></i>
                </a>
              </div>

              <div className="bg-purple-950 rounded-full w-9 h-9 flex items-center justify-center">
                <a
                  href=""
                  target="_blank"
                >
                  <i className="bi bi-linkedin text-white"></i>
                </a>
              </div>

              <div className="bg-purple-950 rounded-full w-9 h-9 flex items-center justify-center">
                <a href="">
                  <i className="bi bi-twitter-x text-white"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-purple-950 h-fit group flex flex-col justify-center items-center text-center rounded-xl z-10 my-4">
            <div className="relative overflow-hidden rounded-t-xl py-6">
              <div className="rounded-full border-white border-2 p-1 mx-10">
                <div className="rounded-full w-[125px] h-[125px] overflow-hidden">
                  <img className="w-full" src={"https://hips.hearstapps.com/ellees.h-cdn.co/assets/15/37/1024x1332/1024x1332-por-ti-rostros-activos-personas-luchadoras-12718597-1-esl-es-rostros-activos-personas-luchadoras-jpg.jpg?resize=980:*"} alt="foto" />
                </div>
              </div>
              <h2 className="text-xl text-blanco font-bold p-2 mt-4 uppercase"
                style={{ transform: "scaleY(1.2)", display: "inline-block" }}
              >Martina</h2>
              <p className="text-lg text-blanco font-thin tracking-tight uppercase opacity-40 px-4 text-wrap"
              >PROGRAMADOR<br></br>FRONT-END</p>
            </div>
            <div className="bg-white w-full flex justify-center space-x-5 py-4 rounded-b-lg">
              <div className="bg-purple-950 rounded-full w-9 h-9 flex items-center justify-center">
                <a
                  href=""
                  target="_blank"
                >
                  <i className="bi bi-instagram text-white"></i>
                </a>
              </div>

              <div className="bg-purple-950 rounded-full w-9 h-9 flex items-center justify-center">
                <a
                  href=""
                  target="_blank"
                >
                  <i className="bi bi-linkedin text-white"></i>
                </a>
              </div>

              <div className="bg-purple-950 rounded-full w-9 h-9 flex items-center justify-center">
                <a href="">
                  <i className="bi bi-twitter-x text-white"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-txt1 dark:bg-bg1 dark:bg-opacity-75 my-5 px-12 h-[200px] flex flex-col justify-center">
          <h2 className="text-2xl text-center text-bg1 dark:text-emerald-600">¿Qué nos distingue?</h2>
          <p className="text-bg2 dark:text-txt2 text-justify py-2">
              La búsqueda incansable de la excelencia y la capacidad de enfrentar desafíos
              tecnológicos nos destacan. Desde aplicaciones móviles hasta sistemas complejos,
              nuestro equipo está equipado para transformar conceptos en experiencias digitales
              impactantes.
          </p>
        </div>

        <div className="bg-txt1 dark:bg-bg1 dark:bg-opacity-75 my-5 px-12 h-[200px] flex flex-col justify-center">
          <h2 className="text-2xl text-center text-bg1 dark:text-emerald-600">Nuestra Filosofía</h2>
          <p className="text-bg2 dark:text-txt2 text-justify py-2">
              Creemos en la potencia de la tecnología para cambiar el mundo. Cada línea de código
              que escribimos es un paso hacia la creación de soluciones robustas y eficientes que
              impulsen el progreso.
          </p>
        </div>

        <div className="bg-txt1 dark:bg-bg1 dark:bg-opacity-75 my-5 p-12 flex flex-col justify-center">
          <h2 className="text-2xl mb-5 text-center text-bg1 dark:text-emerald-600">Servicios Destacados</h2>
          <p className="text-bg2 dark:text-txt2 text-justify py-2">
            <ul className="ml-8" style={{ listStyleType: 'circle' }}>
              <li><b>Desarrollo Web y Móvil:</b> Creación de plataformas interactivas y experiencias móviles de
                vanguardia.</li>
              <li><b>Arquitectura de Software:</b> Diseño de sistemas escalables y flexibles para enfrentar
                desafíos tecnológicos.</li>
              <li><b>Integración de API:</b> Conectamos tus aplicaciones con el mundo, permitiendo una
                experiencia completa.</li>
            </ul>
          </p>
        </div>

        <div className="bg-txt1 dark:bg-bg1 dark:bg-opacity-75 my-5 p-12 flex flex-col justify-center">
          <h2 className="text-2xl mb-5 text-center text-bg1 dark:text-emerald-600">¿Por qué elegirnos?</h2>
          <p className="text-bg2 dark:text-txt2 text-justify py-2">
            <ul className="ml-8" style={{ listStyleType: 'circle' }}>
              <li><b>Experiencia Comprobada:</b> Años de experiencia en el desarrollo exitoso de proyectos
                diversos.</li>
              <li><b>Enfoque Colaborativo:</b> Trabajamos estrechamente contigo para entender tus metas y
                convertirlas en soluciones tangibles.</li>
              <li><b>Adaptabilidad Tecnológica:</b> Estamos siempre actualizados con las últimas tendencias
                para brindar soluciones modernas y eficientes.</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export { ArcenixDesarrollo };

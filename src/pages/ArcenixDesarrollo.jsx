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

        <h1 className='text-4xl dark:text-txt2 text-center mt-10'>Arcenix <span className='text-emerald-600'>Develop</span></h1>

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

import { useEffect } from "react";
import maxfoto from "../views/img/max.png";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-gradient-to-r from-gris to-blanco dark:bg-gradient-to-r dark:from-morado2 dark:to-darkAzul dark:text-txt1 w-full flex flex-col min-h-screen">
      <div className="w-full flex justify-center items-center">
        <h1 className="text-bg1 dark:text-txt1 text-2xl underline-offset-8 underline font-bold shadow-xl shadow-d1">
          Arcenix Company
        </h1>
      </div>
      <div className="flex flex-col p-10 ">
        <div className="p-4 rounded-md flex flex-col justify-center">
          <h2 className="text-bg1 dark:text-txt1 underline-offset-8 underline font-bold shadow-xl shadow-d1 w-fit">
            ¿QUIENES SOMOS?
          </h2>
          <p className="text-bg1 dark:text-txt2 text-justify my-6">
            Somos una empresa en continuo desarrollo y crecimiento, compuesta
            por un equipo selecto de profesionales dedicados al diseño y
            desarrollo de servidores de videojuegos; así como a la creación de
            productos en el ámbito del diseño digital y el desarrollo web.
          </p>
        </div>
      </div>
      <section className="w-full p-2 bg-d2 flex flex-wrap gap-10 justify-center">
        <div className="w-72 h-fit group flex flex-col justify-center items-center bg-bg1 rounded-xl z-10 mt-4">
          <div className="relative overflow-hidden rounded-t-xl">
            <img src={maxfoto} alt="maxfoto" />
            <div className="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className=" w-full flex justify-center space-x-5">
                <div className="bg-bg1 rounded-full w-9 h-9 flex items-center justify-center">
                  <a
                    href="https://www.instagram.com/maimuus?igsh=c2cwMXB1cnBsMHVm"
                    target="_blank"
                  >
                    <i className="bi bi-instagram text-white"></i>
                  </a>
                </div>

                <div className="bg-bg1 rounded-full w-9 h-9 flex items-center justify-center">
                  <a href="#">
                    <i className="bi bi-twitter-x text-white"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <h2 className="mt-3 text-xl text-blanco">Maimus</h2>
          <p className="text-lg text-blanco">Maximiliano Solis</p>
          <p className="text-xl mt-2 text-blanco font-bold p-2">Owner</p>
        </div>
      </section>
    </div>
  );
};

export { About };

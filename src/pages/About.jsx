import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-txt2 dark:bg-gradient-to-br from-morado2 to-darkAzul dark:text-txt1 w-full flex flex-col min-h-screen">
      <div className="w-full flex justify-center items-center">
        <h1 className="text-bg1 dark:text-txt1 text-2xl underline-offset-8 underline font-bold shadow-xl shadow-d1">Arcenix Company</h1>
      </div>
      <div className="flex flex-col p-10 ">
        <div className="p-4 rounded-md flex flex-col justify-center">
          <h2 className="text-bg1 dark:text-txt1 underline-offset-8 underline font-bold shadow-xl shadow-d1 w-fit">¿QUIENES SOMOS?</h2>
          <p className="text-bg1 dark:text-txt2 text-justify my-6">
            Somos una empresa en continuo desarrollo y crecimiento, compuesta
            por un equipo selecto de profesionales dedicados al diseño y
            desarrollo de servidores de videojuegos; así como a la creación de
            productos en el ámbito del diseño digital y el desarrollo web.
          </p>
        </div>
      </div>
    </div>
  );
};

export { About };

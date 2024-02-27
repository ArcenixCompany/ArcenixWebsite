const About = () => {
  return (
    <div className="bg-txt2 dark:bg-bg2 dark:text-txt1 h-screen w-full flex flex-col ">
      <div className="w-full h-[200px] flex justify-center items-center">
        <h1 className="text-bg1 dark:text-txt1 text-2xl">NOSOTROS</h1>
      </div>
      <div className="flex flex-col p-10 ">
        <div className="bg-txt1 dark:bg-bg1 p-4 rounded-md h-[200px] flex flex-col justify-center">
          <h2 className="text-bg1 dark:text-txt1">¿QUIENES SOMOS?</h2>
          <p className="text-bg2 dark:text-txt2 text-justify py-2">
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

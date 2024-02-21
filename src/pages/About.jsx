const About = () => {
  return (
    <div className="bg-background2 h-screen w-full flex flex-col ">
      <div className="w-full h-[200px] flex justify-center items-center">
        <h1 className="text-text1 text-2xl">NOSOTROS</h1>
      </div>
      <div className="flex flex-col p-10 ">
        <div className="bg-background1 p-4 rounded-md h-[200px] flex flex-col justify-center">
          <h2 className="text-text2">¿QUIENES SOMOS?</h2>
          <p className="text-text1 text-justify py-2">
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

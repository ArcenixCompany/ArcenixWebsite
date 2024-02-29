import React, { useEffect } from "react";
import { NavbarDeps } from "../components/NavbarDeps";

const ArcenixGames = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div>
        <NavbarDeps />
      </div>
      <div className='min-h-screen d-block justify-center items-center'>
        <h1 className='text-4xl text-center mt-10'>Arcenix <span className='text-pink-600'>Gaming</span></h1>

        <p className="text-bg2 dark:text-txt2 text-justify px-12 py-5">
          Bienvenido al núcleo innovador de la diversión digital, donde la excelencia técnica se
          encuentra con la pasión por los juegos. Nuestro equipo de desarrollo de servidores de
          videojuegos está dedicado a crear infraestructuras robustas que transforman cada una
          experiencia inolvidable.
        </p>

        <div className="bg-txt1 dark:bg-bg1 dark:bg-opacity-75 my-5 px-12 h-[200px] flex flex-col justify-center">
          <h2 className="text-2xl text-center text-bg1 dark:text-pink-600">¿Quienes somos?</h2>
          <p className="text-bg2 dark:text-txt2 text-justify py-2">
            Somos un equipo de ingenieros y desarrolladores apasionados por los juegos, comprometidos con
            proporcionar la base tecnológica que hace posible la magia del juego en línea. Desde
            servidores escalables hasta arquitecturas de red eficientes, estamos aquí para impulsar tu
            universo virtual y volverlo realidad.
          </p>
        </div>

        <div className="bg-txt1 dark:bg-bg1 dark:bg-opacity-75 my-5 px-12 h-[200px] flex flex-col justify-center">
          <h2 className="text-2xl text-center text-bg1 dark:text-pink-600">¿Qué nos distingue?</h2>
          <p className="text-bg2 dark:text-txt2 text-justify py-2">
            La velocidad, la estabilidad y la adaptabilidad son nuestro sello distintivo.
            Diseñamos y desarrollamos servidores que no sólo soportan la carga de jugadores
            ávidos, sino que también mejoran la conectividad y la interacción en tiempo real.
          </p>
        </div>

        <div className="bg-txt1 dark:bg-bg1 dark:bg-opacity-75 my-5 px-12 h-[200px] flex flex-col justify-center">
          <h2 className="text-2xl text-center text-bg1 dark:text-pink-600">Nuestra Filosofía</h2>
          <p className="text-bg2 dark:text-txt2 text-justify py-2">
            Creemos en la creación de mundos virtuales donde la tecnología desaparece, dejando
            espacio para la inmersión total del jugador. Cada línea de código está dedicada a
            maximizar el rendimiento y la diversión.
          </p>
        </div>

        <div className="bg-txt1 dark:bg-bg1 dark:bg-opacity-75 my-5 p-12 flex flex-col justify-center">
          <h2 className="text-2xl mb-5c text-center text-bg1 dark:text-pink-600">Servicios Destacados</h2>
          <p className="text-bg2 dark:text-txt2 text-justify py-2">
            <ul className="ml-8" style={{ listStyleType: 'circle' }}>
              <li><b>Desarrollo de Servidores Multijugador:</b> Infraestructuras que permiten juegos en línea sin
                problemas.</li>
              <li><b>Optimización de Latencia:</b> Reducción al mínimo de los tiempos de respuesta para una
                experiencia de juego fluida.</li>
              <li><b>Seguridad de Datos:</b> Protegemos la integridad y privacidad de la información del jugador.</li>
            </ul>
          </p>
        </div>

        <div className="bg-txt1 dark:bg-bg1 dark:bg-opacity-75 my-5 p-12 flex flex-col justify-center">
          <h2 className="text-2xl mb-5 text-center text-bg1 dark:text-pink-600">¿Por qué elegirnos?</h2>
          <p className="text-bg2 dark:text-txt2 text-justify py-2">
            <ul className="ml-8" style={{ listStyleType: 'circle' }}>
              <li><b>Experiencia en la Industria:</b> Años de experiencia en el desarrollo de servidores para
                juegos populares.</li>
              <li><b>Adaptabilidad:</b> Nos ajustamos a las necesidades específicas de tu juego, ya sea un MMO,
                un Battle Royale o cualquier otra categoría.</li>
              <li><b>Soporte Continuo:</b> Estamos comprometidos a mantener y mejorar constantemente
                nuestros servidores para garantizar un rendimiento óptimo.</li>
            </ul>
          </p>
          <p className="text-bg2 dark:text-txt2 text-justify py-4">
            Descubre cómo podemos llevar la experiencia de juego de tus jugadores a un nuevo
            nivel con servidores diseñados para la excelencia. Estamos aquí para construir el puente
            tecnológico entre tus ideas y la diversión sin límites.
          </p>
        </div>
      </div>
    </div>
  );
};

export { ArcenixGames };

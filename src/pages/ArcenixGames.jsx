import React, { useEffect } from "react";
import { NavbarDeps } from "../components/NavbarDeps";
import { Carousel } from "../components/Carousel";

const ArcenixGames = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let slides = ["https://media.wired.com/photos/627da1085d49787abdf713b4/master/pass/Pakistani-Gamers-Want-a-Seat-at-the-Table-Culture-shutterstock_1949862841.jpg",
                "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/09/mesa-gaming-2823889.jpg?tf=3840x",
                "https://wallpapercave.com/wp/wp6001987.jpg",];
  return (
    <div>
      <div>
        <NavbarDeps />
      </div>
      <div className='min-h-screen d-block justify-center items-center'>
        <div className="relative w-100">
          <Carousel slides={slides} />
        </div>

        <h1 className='text-5xl dark:text-txt2 text-center mt-10 mb-6 tracking-wider font-bold uppercase'
          style={{ fontFamily: "'Helvetica Neue', sans-serif" }}
        >Arcenix <span className='text-pink-600'>Gaming</span></h1>
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
                STAFF</p>
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
              >MODERADOR</p>
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
              >MODERADOR</p>
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

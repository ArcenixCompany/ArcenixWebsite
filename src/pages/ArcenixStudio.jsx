import React, { useEffect } from "react";
import { NavbarDeps } from "../components/NavbarDeps";
import { Carousel } from "../components/Carousel";

const ArcenixStudio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let slides = ["https://eikonos.com/wp-content/uploads/2015/03/edicion-de-video.png",
                "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2022/01/adobre-premiere-pro-cc-2601969.jpg?tf=3840x",
                "https://shorthand.com/the-craft/video-editing-tools/assets/aDZ7Sx6TXn/shorthand-the-craft-video-editing-tools-subhead-1-2560x1440.webp",];
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
        >Arcenix <span className='text-indigo-500'>Studio</span></h1>

        <p className="text-bg2 dark:text-txt2 text-justify px-12 py-5">
          Bienvenido al corazón creativo de nuestra empresa, donde cada pixel 
          cuenta una historia y cada sonido evoca emociones. Nuestro equipo
          de diseño gráfico y audiovisual está formado por mentes innovadoras y apasionadas que
          transforman ideas en experiencias visuales cautivadoras.
        </p>

        <div className="bg-txt1 dark:bg-bg1 dark:bg-opacity-75 my-5 px-12 h-[200px] flex flex-col justify-center">
          <h2 className="text-2xl text-center text-bg1 dark:text-indigo-500">¿Quienes somos?</h2>
          <p className="text-bg2 dark:text-txt2 text-justify py-2">
            Somos un equipo diverso de diseñadores gráficos, creadores de contenido
            audiovisual, y expertos en sonido, unidos por el deseo de dar vida a tus ideas de manera
            visualmente impactante y acústicamente cautivadora.
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
                DISEÑADOR<br></br>GRAFICO</p>
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
                >DISEÑADOR<br></br>GRAFICO</p>
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
                >EDITOR<br></br>MULTIMEDIA</p>
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
          <h2 className="text-2xl text-center text-bg1 dark:text-indigo-500">¿Qué nos distingue?</h2>
          <p className="text-bg2 dark:text-txt2 text-justify py-2">
            La creatividad es nuestra moneda y la innovación nuestro idioma. Desde diseños
            gráficos estéticamente atractivos hasta producciones audiovisuales de alta calidad, nos
            destacamos al fusionar arte y tecnología con un toque distintivo.
          </p>
        </div>

        <div className="bg-txt1 dark:bg-bg1 dark:bg-opacity-75 my-5 px-12 h-[200px] flex flex-col justify-center">
          <h2 className="text-2xl text-center text-bg1 dark:text-indigo-500">Nuestra Filosofía</h2>
          <p className="text-bg2 dark:text-txt2 text-justify py-2">
            Creemos en la poderosa conexión entre lo visual y lo auditivo. Cada diseño, cada
            fotograma, y cada nota musical son cuidadosamente seleccionados para contar una
            historia única y dejar una impresión duradera.
          </p>
        </div>

        <div className="bg-txt1 dark:bg-bg1 dark:bg-opacity-75 my-5 p-12 flex flex-col justify-center">
          <h2 className="text-2xl mb-5 text-center text-bg1 dark:text-indigo-500">Servicios Destacados</h2>
          <p className="text-bg2 dark:text-txt2 text-justify py-2">
            <ul className="ml-8" style={{ listStyleType: 'circle' }}>
              <li><b>Diseño Gráfico Impactante:</b> Logotipos, banners, y elementos visuales que destacan.</li>
              <li><b>Producción Audiovisual:</b> Videos promocionales, animaciones, y contenido multimedia.</li>
              <li><b>Composición y Diseño Sonoro:</b> Creación de ambientes auditivos envolventes.</li>
            </ul>
          </p>
        </div>

        <div className="bg-txt1 dark:bg-bg1 dark:bg-opacity-75 my-5 p-12 flex flex-col justify-center">
          <h2 className="text-2xl mb-5 text-center text-bg1 dark:text-indigo-500">¿Por qué elegirnos?</h2>
          <p className="text-bg2 dark:text-txt2 text-justify py-2">
            <ul className="ml-8" style={{ listStyleType: 'circle' }}>
              <li><b>Colaboración Creativa:</b> Trabajamos mano a mano contigo para capturar tu visión y
                plasmarla de manera auténtica.</li>
              <li><b>Estándares de Calidad:</b> Cada píxel y cada nota son afinados para alcanzar la 
                excelencia.</li>
              <li><b>Adaptabilidad:</b> Desde proyectos pequeños hasta campañas a gran escala, estamos
                preparados para cualquier desafío creativo.</li>
            </ul>
          </p>  
        </div>
      </div>
    </div>
  );
};

export { ArcenixStudio };
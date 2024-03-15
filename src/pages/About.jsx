// Basicos
import { useEffect } from "react";
import bgHome from "../views/img/bg-home.png";
import Elipse1 from "../views/svg/Ellipse14.svg";
import Elipse2 from "../views/svg/Ellipse15.svg";
import Elipse3 from "../views/svg/Ellipse16.svg";
// Herramienta para la linea temporal
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaCircle } from "react-icons/fa";
// Iconos para redes
import ReactIco from "../views/svg/devicon_react-wordmark.svg";
import RubyIco from "../views/svg/devicon_ruby-wordmark.svg";
import CssIco from "../views/svg/logos_css-3.svg";
import ExpressIco from "../views/svg/logos_express.svg";
import FigmaIco from "../views/svg/logos_figma.svg";
import GitIco from "../views/svg/logos_git.svg";
import HtmlIco from "../views/svg/logos_html-5.svg";
import NextIco from "../views/svg/logos_nextjs.svg";
import NodeJsIco from "../views/svg/logos_nodejs.svg";
import TailwindIco from "../views/svg/logos_tailwindcss.svg";
import IllustratorIco from "../views/svg/skill-icons_illustrator.svg";
import PhotoshopIco from "../views/svg/skill-icons_photoshop.svg";
import JSIco from "../views/svg/vscode-icons_file-type-js-official.svg";
import ViteIco from "../views/svg/vscode-icons_file-type-vite.svg";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen w-full">
      {/* Inicio */}
      <div
        className="bg-cover bg-center flex w-full p-10 py-10 sm:py-40"
        style={{ backgroundImage: `url(${bgHome})` }}
      >
        <div className="flex flex-col justify-center items-center w-full">
          <h1 className="text-blanco text-5xl p-5 lg:py-16 sm:p-5 text-center">Sobre Nosotros</h1>
          <p className="text-blanco opacity-80 text-2xl p-2 sm:p-5 text-center w-[90%] sm:w-[70%]">
            Somos una empresa de desarrollo de software en argentina con
            relevancia en la escena mundial, constituida por profesionales y
            amantes de los videojuegos.
          </p>
          <p className="text-blanco opacity-80 text-2xl p-2 sm:p-5 text-center w-[90%] sm:w-[70%]">
            Ofrecemos una amplia gama de servicios personalizados y soluciones
            tecnológicas para satisfacer la demanda del mundo digital.
          </p>
        </div>
      </div>
      {/* Nuestros Origenes */}
      <div
        className="bg-darkAzul bg-no-repeat bg-left-top py-[50px] sm:py-[200px]"
        style={{
          backgroundImage: `url(${Elipse1}),url(${Elipse2}),url(${Elipse3})`,
          backgroundPosition: "left bottom, left center, right top",
        }}
      >
        <h2 className="text-blanco text-4xl p-5 text-center py-10">
          Nuestros Origenes
        </h2>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work text-blanco"
            contentStyle={{ background: "rgba(21, 26, 30, 0)", color: "#F0F0F0" }}
            contentArrowStyle={{ borderRight: "7px solid  #151a1e" }}
            date="2020 - 2022"
            iconStyle={{ background: "#fff", color: "#fff" }}
            icon={<FaCircle />}
          >
            <p>
              Nuestro fundador y dueño de Arcenix Company Maximiliano Daniel
              Solis, junto con un grupo de personas, cansados de no tener
              experiencias gratificantes en varios servidores y productos 
              decidieron poner manos a la obra en la travesía de desarrollar,
              diseñar y crear productos a la medida de sus expectativas, fue ahí
              cuando se inició un servidor de Minecraft, el cual tenía una
              premisa muy simple: innovar, sin demasiadas expectativas pero con
              ambición
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work text-blanco"
            contentStyle={{ background: "rgba(21, 26, 30, 0)", color: "#F0F0F0" }}
            contentArrowStyle={{ borderRight: "7px solid  #151a1e" }}
            date="Febrero - 2023"
            iconStyle={{ background: "#fff", color: "#fff" }}
            icon={<FaCircle />}
          >
            <p>
              El trabajo realizado tuvo mucho éxito y repercusión, llegó a ojos
              correcto lo que nos llevó a trabajar con empresas como Mercado
              Libre Mexico y Grupo super en ¡Hola, llegué a Minecraft!
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgba(21, 26, 30, 0)", color: "#F0F0F0" }}
            contentArrowStyle={{ borderRight: "7px solid  #151a1e" }}
            date="Junio - 2023"
            iconStyle={{ background: "#fff", color: "#fff" }}
            icon={<FaCircle />}
          >
            <p>
              Nuestro fundador crea Arcenix Company, agrupa especialistas y
              profesionales de diversas áreas y crea lo que somos actualmente
              una empresa destinada al desarrollo de software y muchos otros
              servicios
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      {/* Herramientas que utilizamos */}
      <div className="flex flex-col justify-center items-center w-full min-h-screen">
        <h1 className="text-blanco text-center text-5xl p-4">
          Herramientas que utilizamos
        </h1>
        <div className="flex flex-col justify-center items-center">
          <div className="w-full sm:w-1/2 px-4 sm:px-0">
            <h2 className="text-blanco text-center text-2xl p-4">Herramientas de diseño</h2>
            <div>
              <ul className="flex justify-center items-center space-x-4 flex-wrap gap-5">
                <li className="btnSkills">
                  <img src={PhotoshopIco} className="w-full h-full" />
                </li>
                <li className="btnSkills">
                  <img src={IllustratorIco} className="w-full h-full " />
                </li>
                <li className="btnSkills">
                  <img src={FigmaIco} className="w-full h-full " />
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full sm:w-1/2 px-4 sm:px-0">
            <h2 className="text-blanco text-center text-2xl p-4">Herramientas de desarrollo web</h2>
            <div>
              <ul className="flex justify-between items-center flex-wrap gap-5 p-10">
                <li className="btnSkills">
                  <img src={CssIco} className="w-full h-full"/>
                </li>
                <li className="btnSkills">
                  <img src={HtmlIco} className="w-full h-full" />
                </li>
                <li className="btnSkills">
                  <img src={JSIco} className="w-full h-full" />
                </li>
                <li className="btnSkills">
                  <img src={ReactIco} className="w-full h-full" />
                </li>
                <li className="btnSkills">
                  <img src={NodeJsIco} className="w-full h-full" />
                </li>
                <li className="btnSkills">
                  <img src={NextIco} className="w-full h-full" />
                </li>
                <li className="btnSkills">
                  <img src={RubyIco} className="w-full h-full" />
                </li>
                <li className="btnSkills">
                  <img src={ViteIco} className="w-full h-full" />
                </li>
                <li className="btnSkills">
                  <img src={GitIco} className="w-full h-full" />
                </li>
                <li className="btnSkills">
                  <img src={ExpressIco} className="w-full h-full" />
                </li>
                <li className="btnSkills">
                  <img src={TailwindIco} className="w-full h-full" />
                </li>
              </ul>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export { About };

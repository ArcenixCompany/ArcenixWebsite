import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Inicio } from "./pages/Inicio";
import { NotFound } from "./pages/NotFound.jsx";
import { Contacto } from "./pages/Contacto.jsx";
import { About } from "./pages/About.jsx";
import { Footer } from "./components/Footer.jsx";
import { Departamentos } from "./pages/Departamentos.jsx";
import { ArcenixDesarrollo } from "./pages/ArcenixDesarrollo.jsx";
import { ArcenixGames } from "./pages/ArcenixGames.jsx";
import { ArcenixStudio } from "./pages/ArcenixStudio.jsx";
import { SideBar } from "./components/SideBar.jsx";
import { ResponsiveBar } from "./components/ResponsiveBar.jsx";
import { DepHome } from "./components/DepHome.jsx";

function App() {
  return (
    <>
      <Router>
        <head>
          <link href="https://fonts.cdnfonts.com/css/helvetica-neue-55" rel="stylesheet" />
        </head>

        <div className="flex ">
          <div className="z-50 flex-none bg-gradient-to-br from-morado2 to-darkAzul fixed top-0 left-0 h-full hidden sm:block">
            <SideBar />
          </div>
          <div className="flex-auto sm:ml-20 bg-gradient-to-br from-morado2 to-darkAzul overflow-y-auto">
            {/* Contenido principal con margen izquierdo */}
            <div className="sm:hidden">
              <ResponsiveBar />
            </div>
            <div className="mt-24 sm:mt-0 bg-gradient-to-br from-morado2 to-darkAzul">
              <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contacto />} />
                {/* Rutas de departamentos */}
                <Route path="/deps" element={<Departamentos />}>
                  <Route path="/deps/" element={<DepHome />} />
                  <Route path="arcDes" element={<ArcenixDesarrollo />} />
                  <Route path="arcGames" element={<ArcenixGames />} />
                  <Route path="arcStudio" element={<ArcenixStudio />} />
                </Route>

                <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer />
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Inicio } from "./pages/Inicio";
import { NotFound } from "./pages/NotFound.jsx";
import { Equipos } from "./pages/Equipos.jsx";
import { Contacto } from "./pages/Contacto.jsx";
import { About } from "./pages/About.jsx";
import { Footer } from "./components/Footer.jsx";
import { Departamentos } from "./pages/Departamentos.jsx";
import { ArcenixDesarrollo } from "./pages/ArcenixDesarrollo.jsx";
import { ArcenixGames } from "./pages/ArcenixGames.jsx";
import { ArcenixStudio } from "./pages/ArcenixStudio.jsx";
import { SideBar } from "./components/SideBar.jsx";

function App() {
  return (
    <>
      <Router>
        <div className="flex">
          <div className="flex-none bg-gray-300 fixed top-0 left-0 h-full">
            <SideBar/>
          </div>
          <div className="flex-auto ml-20 bg-txt2 dark:bg-bg2 overflow-y-auto">
            {/* Contenido principal con margen izquierdo */}
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/about" element={<About />} />
              <Route path="/equipos" element={<Equipos />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/deps" element={<Departamentos />}>
                <Route path="arcDes" element={<ArcenixDesarrollo />} />
                <Route path="arcGames" element={<ArcenixGames />} />
                <Route path="arcStudio" element={<ArcenixStudio />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;

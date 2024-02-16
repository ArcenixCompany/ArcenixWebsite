import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Inicio } from "./pages/Inicio";
import { BarraLateral } from "./components/BarraLateral.jsx";
import { NotFound } from "./pages/NotFound.jsx";
import { Notificaciones } from "./pages/Notificaciones.jsx";
import { Perfil } from "./pages/Perfil.jsx";
import { Cartera } from "./pages/Cartera.jsx";
import { Foro } from "./pages/Foro.jsx";
import { Mercado } from "./pages/Mercado.jsx";
import { Normativa } from "./pages/Normativa.jsx";
import { Conectar } from "./pages/Conectar.jsx";
import { Login } from "./pages/Login.jsx";

function App() {
  return (
    <>
      <Router>
        <div>
          <div className="flex h-screen w-[15%] fixed top-0 left-0 overflow-y-auto">
            <BarraLateral />
          </div>
          <div className="flex-l w-[85%] ml-[15%] bg-background2">
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/notificaciones" element={<Notificaciones />} />
              <Route path="/cartera" element={<Cartera />} />
              <Route path="/foro" element={<Foro />} />
              <Route path="/mercado" element={<Mercado />} />
              <Route path="/normativa" element={<Normativa />} />
              <Route path="/conectar" element={<Conectar />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topo from "./components/Topo";
import Rodape from "./components/Rodape";
import Home from "./pages/Home";
import Sabores from "./pages/sabores";
import Sobre from "./pages/sobre";
import NotFound from "./pages/NotFound"; // Importa o componente 404
import "./index.css";

export default function App() {
    return (
        <Router>
            <Topo />
            <main className="conteudo-principal">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sabores" element={<Sabores />} />
                    <Route path="/sobre" element={<Sobre />} />
                    {/* Add rota para capturar URLs inválidas */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <Rodape />
        </Router>
    );
}

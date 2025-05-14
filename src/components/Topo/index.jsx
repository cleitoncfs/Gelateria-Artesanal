import { Link } from "react-router-dom";
import estilos from "./Topo.module.css";
import Logo from "/logo.png"; // Caminho simplificado

export default function Topo() {
    return (
        <header className={estilos.topo_container}>
            <div>
                <img className={estilos.img} src={Logo} alt="logomarca" />
                <nav>
                    <Link className={estilos.link_topo} to="/">
                        Home
                    </Link>
                    <Link className={estilos.link_topo} to="/sabores">
                        Sabores
                    </Link>
                    <Link className={estilos.link_topo} to="/sobre">
                        Sobre
                    </Link>
                </nav>
            </div>
        </header>
    );
}

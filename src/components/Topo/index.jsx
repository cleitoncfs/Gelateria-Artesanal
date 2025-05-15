import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import estilos from "./Topo.module.css";
import Logo from "/logo.png";

export default function Topo() {
    const [menuAberto, setMenuAberto] = useState(false);
    const location = useLocation();

    // Fecha o menu sempre que a rota mudar
    useEffect(() => {
        setMenuAberto(false);
    }, [location.pathname]);

    return (
        <header className={estilos.topo_container}>
            <div className={estilos.wrapper}>
                {/* Esquerda: Logo */}
                <img
                    className={estilos.img}
                    src={Logo}
                    alt="Logomarca da Gelateria Artesanal"
                />

                {/* Direita: Botão e/ou navegação */}
                <div className={estilos.menu_area}>
                    {/* Navegação */}
                    <nav
                        className={`${estilos.navegacao} ${
                            menuAberto ? estilos.menu_ativo : ""
                        }`}
                        aria-label="Navegação principal"
                    >
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

                    {/* Botão hambúrguer */}
                    <button
                        className={`${estilos.menu_botao} ${
                            menuAberto ? estilos.aberto : ""
                        }`}
                        onClick={() => setMenuAberto(!menuAberto)}
                        aria-label="Abrir ou fechar menu"
                    >
                        <span className={estilos.hamburguer}></span>
                        <span className={estilos.hamburguer}></span>
                        <span className={estilos.hamburguer}></span>
                    </button>
                </div>
            </div>
        </header>
    );
}

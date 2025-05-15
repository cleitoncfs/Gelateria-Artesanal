import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import estilos from "./Topo.module.css";
import Logo from "/logo.png";
import { DarkModeToggle } from "../DarkModeToggle/DarkModeToggle";

export default function Topo() {
    const [menuAberto, setMenuAberto] = useState(false);
    const location = useLocation();

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

                <nav
                    className={`${estilos.navegacao} ${
                        menuAberto ? estilos.menu_ativo : ""
                    }`}
                >
                    <div className={estilos.darkModeWrapper}>
                        <DarkModeToggle />
                    </div>

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
        </header>
    );
}

import { FaExternalLinkAlt } from "react-icons/fa";
import estilos from "./Rodape.module.css";
import Logo from "/logo.png"; // Mantendo o caminho original que já funcionava

export default function Rodape() {
    return (
        <footer className={estilos.container_rodape}>
            <div className={estilos.container_informacoes}>
                <img className={estilos.img} src={Logo} alt="logomarca" />
                <div>
                    <h3>ENDEREÇO</h3>
                    <p>Av. Bernardino de Campos, 98</p>
                    <p>São Paulo, SP 12345-678</p>
                </div>
                <div>
                    <h3>CONTATO</h3>
                    <p>info@meusite.com</p>
                    <p>Tel: (11) 3456-7890</p>
                </div>
                <div>
                    <h3>HORÁRIOS</h3>
                    <p>ABERTO TODOS OS DIAS</p>
                    <p>10:00 - 22:00</p>
                </div>
            </div>
            <div className={estilos.container_direito_autoral}>
                <p>
                    © {new Date().getFullYear()} Gelateria Artesanal - Todos os
                    direitos reservados
                </p>
                <p>
                    Desenvolvido por{" "}
                    <a
                        href="https://portfolio-cleiton.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={estilos.link_externo}
                    >
                        Cleiton Santos{" "}
                        <FaExternalLinkAlt className={estilos.icone} />
                    </a>
                </p>
            </div>
        </footer>
    );
}

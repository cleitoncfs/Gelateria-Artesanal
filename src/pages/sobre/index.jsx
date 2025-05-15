import estilos from "./sobre.module.css";

import image1 from "/sobre-image.jpg";
import image2 from "/sorveteria.jpg";

export default function Sobre() {
    return (
        <main className={estilos.container_principal}>
            <section className={estilos.banner}>
                <h1>A GELATERIA</h1>
            </section>

            <section className={estilos.sobre_conteudo}>
                <div className={estilos.texto}>
                    <h2>Sobre Nós</h2>
                    <span>Nós simplesmente amamos sorvete!</span>
                    <p>
                        Somos apaixonados pelo que fazemos. Colocamos amor em
                        cada sorvete produzido, buscando sempre oferecer o
                        melhor para nossos clientes.
                    </p>
                    <p>
                        Desde 2009, trabalhamos com as melhores matérias-primas,
                        atendendo tanto o varejo quanto o atacado. Você pode
                        saborear nossos sorvetes na loja ou levá-los para casa.
                        Também realizamos eventos como aniversários, formaturas
                        e festas corporativas.
                    </p>
                </div>
            </section>

            <section className={estilos.imagens}>
                <img src={image1} alt="Pessoas comendo sorvete" />
                <img src={image2} alt="Loja da sorveteria" />
            </section>
        </main>
    );
}

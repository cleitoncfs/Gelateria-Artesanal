import estilos from "./Home.module.css";
import image1 from "../assets/banner-sabores.jpg";
import image2 from "../assets/eventos-image.jpg";
import image3 from "../assets/sobre-image.jpg";

export default function Home() {
    return (
        <main className="conteudo-principal">
            <section
                className={estilos.secao_banner}
                aria-labelledby="titulo-banner"
            >
                <div className={estilos.texto_banner}>
                    <h1 id="titulo-banner">SORVETE ARTESANAL</h1>
                </div>
            </section>

            <section
                className={estilos.secao_nossos_sabores}
                aria-labelledby="titulo-sabores"
            >
                <img
                    className={estilos.img_card}
                    src={image1}
                    alt="Variedade de sorvetes artesanais em potes coloridos"
                />
                <div className={estilos.container_texto}>
                    <h2 id="titulo-sabores">NOSSOS SABORES</h2>
                    <span>Novos e deliciosos!</span>
                    <p>
                        Sorvete bom é aquele feito com os melhores ingredientes!
                        Aqui na gelateria todos os nossos produtos são naturais,
                        à base de frutas e sem nenhum conservante! Também temos
                        opções sem lactose e sem açúcar. Venha conhecer e
                        perceber que tem como o sorvete ser delicioso e saudável
                        ao mesmo tempo!
                    </p>
                </div>
            </section>

            <section
                className={estilos.secao_nossos_eventos}
                aria-labelledby="titulo-eventos"
            >
                <div className={estilos.container_texto}>
                    <h2 id="titulo-eventos">NOSSOS EVENTOS</h2>
                    <span>Delícias com sorvete!</span>
                    <p>
                        Mais do que uma sorveteria, uma extensão da sua casa!
                        Estamos aqui prontinhos para te atender e oferecer os
                        melhores eventos com os melhores sorvetes da sua vida!
                        Venha nos conhecer e passar um tempo com a gente.
                    </p>
                </div>
                <img
                    className={estilos.img_card}
                    src={image2}
                    alt="Mesa decorada com sorvetes e doces para eventos"
                />
            </section>

            <section
                className={estilos.secao_sobre_nos}
                aria-labelledby="titulo-sobre"
            >
                <img
                    className={estilos.img_card}
                    src={image3}
                    alt="Família feliz comendo sorvete artesanal"
                />
                <div className={estilos.container_texto}>
                    <h2 id="titulo-sobre">SOBRE NÓS</h2>
                    <span>Alegria em cada casquinha!</span>
                    <p>
                        Venha tomar o melhor sorvete da região aqui com a gente!
                        Nós estamos há anos no mercado produzindo o que tem de
                        melhor para o nosso cliente e você não pode ficar fora
                        dessa. Venha nos fazer uma visita e aproveite o melhor
                        atendimento e o melhor sorvete da cidade.
                    </p>
                </div>
            </section>
        </main>
    );
}

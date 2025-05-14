import estilos from "./sabores.module.css";

const sabores = [
    {
        img: "/sabor-oreo.png",
        nome: "Sorvete de Oreo",
        desc: "Delicioso sorvete sabor Oreo. Uma explosão de sabor.",
    },
    {
        img: "/sabor-pistache.png",
        nome: "Sorvete Pistache",
        desc: "Cremoso sorvete sabor pistache com pedacinhos de semente.",
    },
    // Adicione os outros sabores aqui...
];

export default function Sabores() {
    return (
        <main className={estilos.container_principal}>
            {/* ... resto do código ... */}
            <div className={estilos.container_sorvetes}>
                {sabores.map((sabor, index) => (
                    <div key={index}>
                        <img
                            className={estilos.img_sorvete}
                            src={sabor.img}
                            alt={sabor.nome}
                        />
                        <h3>{sabor.nome}</h3>
                        <p>{sabor.desc}</p>
                    </div>
                ))}
            </div>
        </main>
    );
}

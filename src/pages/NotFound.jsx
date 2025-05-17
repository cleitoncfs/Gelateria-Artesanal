// src/pages/NotFound.jsx (com toggle)
import { useEffect } from "react";
import styles from "./NotFound.module.css";

export default function NotFound() {
    useEffect(() => {
        if (localStorage.getItem("darkMode") === "true") {
            document.body.classList.add(styles.dark);
        }
    }, []);

    const toggleTheme = () => {
        document.body.classList.toggle(styles.dark);
        localStorage.setItem(
            "darkMode",
            document.body.classList.contains(styles.dark)
        );
    };

    return (
        <div className={styles.container}>
            <button onClick={toggleTheme} className={styles.btn}>
                Alternar Tema
            </button>
            <div className={styles.icecream}>🍦</div>
            <h1 className={styles.title}>Oops! Página Derretida</h1>
            <p className={styles.description}>
                Parece que o sorvete que você está procurando derreteu antes de
                chegar aqui. Não se preocupe, temos muitos outros sabores
                incríveis esperando por você!
            </p>
            <a href="/" className={styles.btn}>
                Voltar para a Página Principal
            </a>
        </div>
    );
}

import { useState, useEffect } from "react";
import "./DarkModeToggle.css";

export const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.body.classList.toggle("dark-mode", darkMode);
        localStorage.setItem("darkMode", darkMode);
    }, [darkMode]);

    return (
        <button
            className="dark-mode-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label={darkMode ? "Ativar modo claro" : "Ativar modo escuro"}
        >
            {darkMode ? (
                <span className="sun-icon">☀️</span>
            ) : (
                <span className="moon-icon">🌙</span>
            )}
        </button>
    );
};

import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import "./DarkModeToggle.css";

export const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(() => {
        const saved = localStorage.getItem("darkMode");
        return saved === "true";
    });

    useEffect(() => {
        // Adiciona/remove a classe 'dark' no html element
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("darkMode", darkMode);
    }, [darkMode]);

    return (
        <button
            className="dark-mode-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label={
                darkMode
                    ? "Alternar para modo claro"
                    : "Alternar para modo escuro"
            }
        >
            <div className={`toggle-track ${darkMode ? "dark" : "light"}`}>
                <div className="toggle-thumb">
                    {darkMode ? (
                        <FiSun className="icon sun" />
                    ) : (
                        <FiMoon className="icon moon" />
                    )}
                </div>
            </div>
        </button>
    );
};

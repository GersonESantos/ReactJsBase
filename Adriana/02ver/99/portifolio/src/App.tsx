import { useState, useEffect } from 'react';
import './App.css';
import Hero from './pages/Home/sections/Hero/Hero';


const App: React.FC = () => {
    // 1. Estado para o tema atual
    const [theme, setTheme] = useState<string>(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme || 'light';
    });

    // 2. Efeito para aplicar o tema e salvar no localStorage
    useEffect(() => {
        document.documentElement.classList.remove('light-theme', 'dark-theme', 'expressive-theme');
        document.documentElement.classList.add(`${theme}-theme`);
        localStorage.setItem('theme', theme);
    }, [theme]);

    // 3. Função para lidar com a mudança de tema pelo select
    const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setTheme(event.target.value);
    };

    return (
        <div className="app-container">
            <header className="app-header">
                <div className="theme-selector-container">
                    <label htmlFor="theme-select" className="theme-label">Tema:</label>
                    <select id="theme-select" value={theme} onChange={handleThemeChange} className="theme-select">
                        <option value="light">Claro ☀️</option>
                        <option value="dark">Escuro 🌙</option>
                        <option value="expressive">Expressivo ✨</option>
                    </select>
                </div>
            </header>

            <div className="content-container">
                <Hero theme={theme} />
                
                <div className="extra-links">
                    <p>Explore meu portfólio! <a href="#">Veja meus projetos</a></p>
                    <p><a href="#">Entre em contato</a></p>
                </div>
            </div>
        </div>
    );
};

export default App;
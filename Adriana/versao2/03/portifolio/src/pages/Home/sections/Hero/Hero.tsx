import { styled } from "@mui/material"
import { useState, useEffect } from 'react';
import './App.css';
import UserProfileCard from './UserProfileCard'; // Importar o UserProfileCard
const Hero = () => {  

    const StyledHero = styled("div")(() => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "black",
    }));

    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme || 'light';
      });   

  const [currentUser, setCurrentUser] = useState(null); // Estado para o usuário logado
 

  // 2. Efeito para aplicar o tema e salvar no localStorage
  useEffect(() => {
    // Remove classes de tema anteriores para evitar conflitos
    document.documentElement.classList.remove('light-theme', 'dark-theme', 'expressive-theme');
    // Adiciona a classe do tema atual ao elemento <html>
    document.documentElement.classList.add(`${theme}-theme`);
    // Salva a preferência do tema no localStorage
    localStorage.setItem('theme', theme);
  }, [theme]); // Este efeito roda sempre que o estado 'theme' mudar

  // 3. Função para lidar com a mudança de tema pelo select
  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };
  const handleLogout = () => {
    setCurrentUser(null);
    // Adicione aqui qualquer outra lógica de limpeza de sessão, se necessário
    // Por exemplo, limpar tokens do localStorage, etc.
  };

  return (
    <>





    
        <StyledHero>
            <h1 style={{ color: "white" }}>Welcome to My Portfolio</h1>
        </StyledHero>
        
    </>
  )
}

export default Hero

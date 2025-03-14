// src/components/Rodape.js
import React from 'react';

const Rodape = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <img 
            src="https://gersonesantos.github.io/pisico/imagens/logo.png" 
            alt="logo rodapé" 
            className="img-fluid" 
            width="100px" 
          />
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <p>Siga-me:</p>
          <ul>
            <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Seu Nome. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Rodape;
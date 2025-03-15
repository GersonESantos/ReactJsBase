// src/components/TopBar.js
import React from 'react';


const Topo = () => {
  return (
    <header>

        <div className="header-container">
            <div className="logo"><img src="https://gersonesantos.github.io/pisico/imagens/logo.png" alt="logo" class="img-fluid me-3" width="130px" /></div>
            <div className="empty-space"></div>
            <nav>
                <ul>
                <li><a href="#services">Serviços</a></li>
                <li><a href="#testimonials">Depoimentos</a></li>
                <li><a href="#about">Sobre</a></li>
                <li><a href="#contact">Contato</a></li>
            </ul>
        </nav>
        </div>
    </header>
  );
};

export default Topo;

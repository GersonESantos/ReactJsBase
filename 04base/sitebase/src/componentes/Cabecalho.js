// src/componentes/Cabecalho.js
import React from 'react';

const Cabecalho = () => {
  return (
    <header className="bg-primary text-white py-5">
      <div className="container text-center">
        <h1 className="display-4">Gerson Eustáquio dos Santos</h1>
        <p className="lead">Analista de Sistemas | Soluções em Tecnologia</p>
        <a href="#contato" className="btn btn-light btn-lg mt-3">Entre em Contato</a>
      </div>
    </header>
  );
};

export default Cabecalho;
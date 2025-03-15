// src/componentes/Contato.js
import React from 'react';

const Contato = () => {
  return (
    <section id="contato" className="bg-primary text-white py-5">
      <div className="container text-center">
        <h2 className="mb-4">Contato</h2>
        <p className="lead">Precisa de uma solução tecnológica? Entre em contato comigo!</p>
        <p>Email: gerson.eustaquio@example.com</p>
        <p>Telefone: (11) 98765-4321</p>
        <p>
          WhatsApp:{' '}
          <a href="https://wa.me/5511987654321" className="text-white" target="_blank" rel="noopener noreferrer">
            (11) 98765-4321
          </a>
        </p>
        <div className="mt-3">
          <a href="mailto:gerson.eustaquio@example.com" className="btn btn-outline-light mx-2">Enviar Email</a>
          <a href="https://wa.me/5511987654321" className="btn btn-outline-light mx-2" target="_blank" rel="noopener noreferrer">
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contato;
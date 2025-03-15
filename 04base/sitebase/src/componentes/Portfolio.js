// src/componentes/Portfolio.js
import React from 'react';

const Portfolio = () => {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Portfólio</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Projeto 1</h5>
                <p className="card-text">Sistema de gestão para pequenas empresas.</p>
                <button className="btn btn-outline-primary">Saiba Mais</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Projeto 2</h5>
                <p className="card-text">Aplicativo web para controle de estoque.</p>
                <button className="btn btn-outline-primary">Saiba Mais</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Projeto 3</h5>
                <p className="card-text">Automação de relatórios empresariais.</p>
                <button className="btn btn-outline-primary">Saiba Mais</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
// src/componentes/Servicos.js
import React from 'react';

const Servicos = () => {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-4">Serviços</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <h5 className="card-title">Desenvolvimento de Software</h5>
                <p className="card-text">Criação de sistemas personalizados para atender às suas necessidades.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <h5 className="card-title">Consultoria em TI</h5>
                <p className="card-text">Orientação estratégica para melhorar sua infraestrutura tecnológica.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <h5 className="card-title">Análise de Sistemas</h5>
                <p className="card-text">Mapeamento e otimização de processos para maior eficiência.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicos;
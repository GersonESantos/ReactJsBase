import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container my-5">
      <h1 className="display-4 text-center">Meu Site com Bootstrap</h1>
      <p className="lead text-center">Um projeto React estilizado com Bootstrap 5.3.3</p>
      
      {/* Exemplo de botão */}
      <div className="text-center mb-4">
        <button className="btn btn-primary btn-lg">Clique Aqui</button>
      </div>
      
      {/* Exemplo de card */}
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Projeto 1</h5>
              <p className="card-text">Descrição de um projeto fictício.</p>
              <a href="#" className="btn btn-outline-primary">Saiba Mais</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Projeto 2</h5>
              <p className="card-text">Outro exemplo de projeto.</p>
              <a href="#" className="btn btn-outline-primary">Saiba Mais</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Projeto 3</h5>
              <p className="card-text">Mais um exemplo para teste.</p>
              <a href="#" className="btn btn-outline-primary">Saiba Mais</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
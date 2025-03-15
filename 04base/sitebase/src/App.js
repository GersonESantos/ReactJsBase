// src/App.js
import React from 'react';
import './App.css';
import Cabecalho from './componentes/Cabecalho';
import SobreMim from './componentes/SobreMim';
import Servicos from './componentes/Servicos';
import Portfolio from './componentes/Portfolio';
import Contato from './componentes/Contato';
import Rodape from './componentes/Rodape';
import Topo from './componentes/Topo';
function App() {
  return (
    <>
      <Topo />
      <Cabecalho />
      <SobreMim />
      <Servicos />
      <Portfolio />
      <Contato />
      <Rodape />
    </>
  );
}

export default App;
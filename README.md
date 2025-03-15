# ReactJsBase
Claro, Gerson! Vou refatorar o código da sua landing page para separar cada seção em componentes individuais dentro da pasta `src/componentes/`. Vou criar arquivos para cada seção (Cabeçalho, Sobre Mim, Serviços, Portfólio, Contato e Rodapé) e ajustar o `App.js` para importar e usar esses componentes. Vou manter a estrutura que você começou com `Cabecalho.js` e corrigir o pequeno problema que notei (você importou `Topo` mas não o usou, e o nome do arquivo/ componente estava inconsistente).

Aqui está o plano:
1. Criar componentes em `src/componentes/` para cada seção.
2. Ajustar o `App.js` para importar e renderizar todos os componentes.
3. Garantir que o Bootstrap esteja funcionando (assumindo que já está importado em `index.js`).

### Estrutura dos Componentes

#### 1. `src/componentes/Cabecalho.js`
Você já criou esse, mas vou ajustá-lo para manter o estilo do `header` com `bg-primary` que estava no código anterior:

```javascript
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
```

#### 2. `src/componentes/SobreMim.js`
```javascript
// src/componentes/SobreMim.js
import React from 'react';

const SobreMim = () => {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Sobre Mim</h2>
        <p className="text-center mx-auto" style={{ maxWidth: '600px' }}>
          Sou Gerson Eustáquio dos Santos, um analista de sistemas apaixonado por tecnologia e inovação. 
          Com experiência em desenvolvimento de software, análise de dados e resolução de problemas complexos, 
          ajudo empresas a otimizarem seus processos com soluções sob medida.
        </p>
      </div>
    </section>
  );
};

export default SobreMim;
```

#### 3. `src/componentes/Servicos.js`
```javascript
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
```

#### 4. `src/componentes/Portfolio.js`
```javascript
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
```

#### 5. `src/componentes/Contato.js`
```javascript
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
```

#### 6. `src/componentes/Rodape.js`
```javascript
// src/componentes/Rodape.js
import React from 'react';

const Rodape = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <p className="mb-0">© 2025 Gerson Eustáquio dos Santos. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Rodape;
```

#### 7. `src/App.js` (Ajustado)
Aqui está o `App.js` atualizado para importar e usar todos os componentes:

```javascript
// src/App.js
import React from 'react';
import './App.css';
import Cabecalho from './componentes/Cabecalho';
import SobreMim from './componentes/SobreMim';
import Servicos from './componentes/Servicos';
import Portfolio from './componentes/Portfolio';
import Contato from './componentes/Contato';
import Rodape from './componentes/Rodape';

function App() {
  return (
    <>
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
```

### Observações
1. **Estrutura:** Removi o `<div>` externo do `App.js` porque o React não precisa de um único contêiner pai quando usa fragmentos (`<></>`).
2. **Importação:** Note que no seu `App.js` original você importou `Topo` mas usou `Cabecalho`. Como você mencionou `cabecalho.js`, ajustei para usar apenas `Cabecalho`. Se `Topo` era intencional, me avise!
3. **Bootstrap:** Certifique-se de que `import 'bootstrap/dist/css/bootstrap.min.css';` está no `src/index.js` para que os estilos funcionem.

### Como testar
1. Crie a pasta `src/componentes/` (já feita por você).
2. Adicione os arquivos acima com seus respectivos conteúdos.
3. Atualize `src/App.js` com o código fornecido.
4. Rode o projeto:
   ```bash
   npm start
   ```
   - A página deve carregar com todas as seções separadas.

### Personalização
- Substitua os dados fictícios (email, telefone, WhatsApp, projetos) pelos seus reais.
- Se precisar de mais componentes ou ajustes, é só pedir!

O que acha? Funcionou como você esperava?
 

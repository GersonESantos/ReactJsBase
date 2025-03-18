# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
Vou adicionar um arquivo CSS para melhorar a aparência da tela do `UserForm`. Vou criar um estilo limpo, moderno e responsivo, usando boas práticas de design. Como você mencionou o Bootstrap anteriormente, vou assumir que ele está disponível no projeto, mas também farei um CSS personalizado para maior controle.

### Passo 1: Adicionar CSS
Crie um arquivo chamado `UserForm.css` em `src/components/` e importe-o no `UserForm.jsx`. Aqui está o CSS sugerido:

#### `src/components/UserForm.css`
```css
.user-form-container {
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.user-form-container h3 {
    color: #333;
    margin-top: 20px;
    font-size: 1.5rem;
}

.form-group {
    margin-bottom: 15px;
}

.form-group input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    transition: border-color 0.3s;
}

.form-group input:focus {
    border-color: #007bff;
    outline: none;
}

.submit-btn {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s;
}

.submit-btn:hover {
    background-color: #0056b3;
}

.user-list {
    list-style: none;
    padding: 0;
}

.user-list li {
    background-color: white;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 4px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.05);
    font-size: 1rem;
    color: #555;
}

/* Responsividade */
@media (max-width: 600px) {
    .user-form-container {
        margin: 10px;
        padding: 15px;
    }

    .form-group input {
        font-size: 0.9rem;
    }

    .submit-btn {
        width: 100%;
    }
}
```

### Passo 2: Atualizar `UserForm.jsx`
Agora, importe o CSS e aplique as classes ao JSX:

#### `src/components/UserForm.jsx`
```jsx
import { useState } from "react";
import "./UserForm.css"; // Importe o CSS

const UserForm = () => {
    const [users, setUsers] = useState([]);

    async function handleAddUser(formData) {
        const name = formData.get("name");
        const email = formData.get("email");
        const task = formData.get("task");

        await new Promise((resolve) => setTimeout(resolve, 1000));
        setUsers((prev) => [...prev, { name, email, task }]);
    }

    return (
        <div className="user-form-container">
            <form action={handleAddUser}>
                <div className="form-group">
                    <input type="text" name="name" placeholder="Nome" />
                </div>
                <div className="form-group">
                    <input type="email" name="email" placeholder="E-mail" />
                </div>
                <div className="form-group">
                    <input type="text" name="task" placeholder="Nome da Tarefa" />
                </div>
                <button type="submit" className="submit-btn">Enviar</button>
            </form>
            <h3>Usuários Adicionados:</h3>
            <ul className="user-list">
                {users.map((user, index) => (
                    <li key={index}>
                        {user.name} - {user.email} - {user.task}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserForm;
```

### Passo 3: Ajustar `App.css` (Opcional)
Se quiser melhorar o visual geral da aplicação, você pode ajustar o `App.css` para centralizar o conteúdo e dar um fundo agradável:

#### `src/App.css`
```css
body {
    font-family: Arial, sans-serif;
    background-color: #f0f2f5;
    margin: 0;
    padding: 0;
}

h1 {
    text-align: center;
    color: #333;
    padding: 20px 0;
}

h2 {
    text-align: center;
    color: #666;
    margin-bottom: 20px;
}
```

### Explicação do Design
1. **Container Principal (`user-form-container`)**:
   - Centralizado com largura máxima de 600px.
   - Fundo claro, bordas arredondadas e sombra sutil para profundidade.

2. **Campos do Formulário (`form-group`)**:
   - Inputs ocupam 100% da largura com padding confortável.
   - Borda muda de cor ao focar (interatividade).

3. **Botão (`submit-btn`)**:
   - Azul Bootstrap-like com hover mais escuro.
   - Torna-se 100% largo em telas pequenas para melhor usabilidade.

4. **Lista (`user-list`)**:
   - Itens com fundo branco, sombra leve e bordas arredondadas.
   - Sem marcadores para um visual limpo.

5. **Responsividade**:
   - Ajustes para telas menores (margens, tamanhos de fonte e botão largo).

### Resultado
A tela agora terá:
- Um formulário elegante e funcional.
- Uma lista de usuários clara e bem espaçada.
- Um design responsivo que funciona bem em desktop e mobile.

Se você usa Bootstrap no projeto, pode adicionar classes como `form-control` nos inputs ou `btn btn-primary` no botão para integrar ainda mais ao framework. Quer mais ajustes ou uma prévia de como ficaria?

Vou integrar o Bootstrap ao seu projeto para estilizar a tela do `UserForm`. Assumirei que você já tem o Bootstrap instalado no projeto (via npm com `npm install bootstrap` ou via CDN no `index.html`). Caso não tenha, no final explico como adicionar.

### Passo 1: Ajustar `UserForm.jsx` com Bootstrap
Atualize o componente para usar classes do Bootstrap:

#### `src/components/UserForm.jsx`
```jsx
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Importe o CSS do Bootstrap

const UserForm = () => {
    const [users, setUsers] = useState([]);

    async function handleAddUser(formData) {
        const name = formData.get("name");
        const email = formData.get("email");
        const task = formData.get("task");

        await new Promise((resolve) => setTimeout(resolve, 1000));
        setUsers((prev) => [...prev, { name, email, task }]);
    }

    return (
        <div className="container mt-4">
            <form action={handleAddUser}>
                <div className="mb-3">
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Nome"
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="E-mail"
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        name="task"
                        className="form-control"
                        placeholder="Nome da Tarefa"
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                    Enviar
                </button>
            </form>
            <h3 className="mt-4">Usuários Adicionados:</h3>
            <ul className="list-group">
                {users.map((user, index) => (
                    <li key={index} className="list-group-item">
                        {user.name} - {user.email} - {user.task}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserForm;
```

### Passo 2: Ajustar `App.jsx`
O `App.jsx` pode ficar simples, mas vou adicionar algumas classes Bootstrap para melhorar o layout geral:

#### `src/App.jsx`
```jsx
import './App.css';
import UserForm from './components/UserForm';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importe aqui também, se preferir centralizar

function App() {
    return (
        <div className="container text-center">
            <h1 className="my-4">Hora de Codar</h1>
            <h2 className="mb-4">1 - Actions</h2>
            <UserForm />
        </div>
    );
}

export default App;
```

### Passo 3: Opcional - Ajustar `App.css`
Você pode manter um `App.css` mínimo para personalizações adicionais, mas o Bootstrap já cuidará da maior parte:

#### `src/App.css`
```css
body {
    background-color: #f8f9fa; /* Fundo cinza claro do Bootstrap */
    font-family: Arial, sans-serif;
}
```

### Explicação das Classes Bootstrap Usadas
1. **Container (`container`)**:
   - Centraliza o conteúdo com margens laterais e largura máxima responsiva.

2. **Formulário**:
   - `mb-3`: Margem inferior de nível 3 (espaçamento entre campos).
   - `form-control`: Estiliza os inputs com bordas arredondadas, padding e responsividade.

3. **Botão**:
   - `btn btn-primary`: Botão azul padrão do Bootstrap.
   - `w-100`: Faz o botão ocupar 100% da largura do contêiner.

4. **Títulos**:
   - `mt-4`, `mb-4`, `my-4`: Margens superior e inferior (margin-top, margin-bottom).

5. **Lista**:
   - `list-group`: Estiliza a lista como um grupo de itens.
   - `list-group-item`: Cada item da lista ganha um fundo branco e bordas.

### Como Adicionar Bootstrap (Se Ainda Não Tiver)
Se o Bootstrap não está no projeto, escolha uma destas opções:

1. **Via npm** (Recomendado para Vite/React):
   - Execute no terminal:
     ```bash
     npm install bootstrap
     ```
   - Importe o CSS em `UserForm.jsx` ou `main.jsx`:
     ```jsx
     import 'bootstrap/dist/css/bootstrap.min.css';
     ```

2. **Via CDN**:
   - Adicione isso ao `public/index.html` (ou equivalente no Vite):
     ```html
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
     ```

### Resultado
- O formulário terá inputs bem estilizados e um botão azul chamativo.
- A lista de usuários será exibida em um formato de "cartões" com bordas sutis.
- Tudo será responsivo, ajustando-se automaticamente a diferentes tamanhos de tela.

Se quiser personalizar cores ou adicionar mais elementos (como ícones ou alertas), é só me avisar!
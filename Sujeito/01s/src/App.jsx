import './App.css'

function App() {
  
  function handleAddUser(formData) {
    const nome = formData.get('nome');
    console.log(nome);
    const sobrenome = formData.get('sobrenome');
    console.log(sobrenome);
    const email = formData.get('email');
    console.log(email);
    const senha = formData.get('senha');
    console.log(senha);
    const confirmaSenha = formData.get('confirmaSenha');
    console.log(confirmaSenha);
  }
  return <>

      <form action={handleAddUser} method="post">
        <input type="text" name="nome" id="nome" />
        <input type="text" name="sobrenome" id="sobrenome" />
        <input type="text" name="email" id="email" />
        <input type="text" name="senha" id="senha" />
        <input type="text" name="confirmaSenha" id="confirmaSenha" />
        <button type="submit">Enviar</button>
      </form>
      
    </> 
};

export default App;

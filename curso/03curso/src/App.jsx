import { useState} from "react";
function App() {
  const [message, setMessage] = useState("Ola Mundo");
  
  return (
    <div>
      <h1>React Basico</h1>
      <p>{message}</p>
      <button 
        onClick={() => {
        setMessage ("Mensagem alterada");
        
      }}
      >
        Mudar Messagem 
      </button>
    </div>
  );
}
export default App;
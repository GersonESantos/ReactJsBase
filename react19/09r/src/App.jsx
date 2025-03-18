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
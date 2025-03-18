import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const UserForm = () => {
    const [users, setUsers] = useState([]);

    async function handleAddUser(formData) {
        const name = formData.get("name");
        const email = formData.get("email");

        // Simula uma chamada de API com delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setUsers((prev) => [...prev, { name, email }]);
    }

    return (
        <div className="container mt-5">
            <h1 className="h3 mb-3 fw-normal text-center">Adicionar Usuário</h1>
            <form action={handleAddUser} className="w-50 mx-auto">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nome</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        placeholder="Digite seu nome"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">E-mail</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        placeholder="nome@exemplo.com"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                    Enviar
                </button>
            </form>

            <h3 className="mt-5">Usuários Adicionados:</h3>
            <ul className="list-group">
                {users.map((user, index) => (
                    <li key={index} className="list-group-item">
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserForm;
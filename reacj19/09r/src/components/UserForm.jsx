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
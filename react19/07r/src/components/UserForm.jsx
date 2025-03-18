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
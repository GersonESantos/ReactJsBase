import { useState } from "react";

const UserForm = () => {
    const [users, setUsers] = useState([]);

    async function handleAddUser(formData) {
        const name = formData.get("name");
        const email = formData.get("email");
        const task = formData.get("task"); // Novo campo: Nome da Tarefa

        // Simula uma chamada de API com delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setUsers((prev) => [...prev, { name, email, task }]); // Adiciona a tarefa ao estado
    }

    return (
        <div>
            <form action={handleAddUser}>
                <div>
                    <input type="text" name="name" placeholder="Nome" />
                </div>
                <div>
                    <input type="email" name="email" placeholder="E-mail" />
                </div>
                <div>
                    <input type="text" name="task" placeholder="Nome da Tarefa" /> {/* Novo campo */}
                </div>
                <button type="submit">Enviar</button>
            </form>
            <h3>Usuários Adicionados:</h3>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        {user.name} - {user.email} - {user.task} {/* Exibe a tarefa */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserForm;
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const UserForm = () => {
    const [user, setUser] = useState(null); // Estado para armazenar o usuário completo
    const [tasks, setTasks] = useState([]); // Estado para armazenar as tarefas
    const [inputEmail, setInputEmail] = useState(""); // Estado para o email digitado

    // Buscar o usuário e suas tarefas com base no email
    useEffect(() => {
        if (inputEmail) {
            fetchUserByEmail();
        } else {
            setUser(null);
            setTasks([]);
        }
    }, [inputEmail]);

    const fetchUserByEmail = async () => {
        try {
            const response = await fetch(`http://localhost:3000/login?email=${encodeURIComponent(inputEmail)}`);
            const data = await response.json();
            if (data && data.length > 0 && data[0].username) {
                setUser(data[0]);
                fetchTasks(data[0].id);
            } else {
                setUser(null);
                setTasks([]);
            }
        } catch (error) {
            console.error("Erro ao buscar usuário:", error);
            setUser(null);
            setTasks([]);
        }
    };

    const fetchTasks = async (userId) => {
        try {
            const response = await fetch(`http://localhost:3000/user/${userId}/tasks/`);
            const data = await response.json();
            setTasks(data);
        } catch (error) {
            console.error("Erro ao buscar tarefas:", error);
            setTasks([]);
        }
    };

    const handleEmailChange = (event) => {
        setInputEmail(event.target.value);
    };

    const handleDeleteTask = async (taskId) => {
        try {
            const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
                method: "DELETE",
            });
            if (response.ok) {
                // Remove a tarefa da lista localmente após exclusão bem-sucedida
                setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
            } else {
                console.error("Erro ao excluir tarefa:", response.statusText);
            }
        } catch (error) {
            console.error("Erro ao excluir tarefa:", error);
        }
    };

    return (
        <div className="container mt-4">
            <div className="mb-3">
                <label htmlFor="userEmail" className="form-label">
                    Digite o E-mail do Usuário:
                </label>
                <input
                    type="email"
                    id="userEmail"
                    className="form-control"
                    value={inputEmail}
                    onChange={handleEmailChange}
                    placeholder="Ex: gerson@example.com"
                />
            </div>
            <h3>Nome do Usuário:</h3>
            <p>{user ? user.username : "Digite um email para buscar"}</p>

            <h3>Tarefas do Usuário:</h3>
            {user ? (
                tasks.length > 0 ? (
                    <div
                        style={{
                            maxHeight: "200px",
                            overflowY: "auto",
                            border: "1px solid #ddd",
                            borderRadius: "4px",
                        }}
                    >
                        <ul className="list-group">
                            {tasks.map((task) => (
                                <li
                                    key={task.id}
                                    className="list-group-item d-flex justify-content-between align-items-center"
                                >
                                    {task.task_description}
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => handleDeleteTask(task.id)}
                                    >
                                        Excluir
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <p>Nenhuma tarefa encontrada para este usuário.</p>
                )
            ) : (
                <p>Selecione um usuário para ver as tarefas.</p>
            )}
        </div>
    );
};

export default UserForm;
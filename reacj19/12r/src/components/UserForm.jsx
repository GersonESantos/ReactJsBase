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
            setUser(null); // Limpa o usuário se o email estiver vazio
            setTasks([]);  // Limpa as tarefas
        }
    }, [inputEmail]);

    const fetchUserByEmail = async () => {
        try {
            const response = await fetch(`http://localhost:3000/login?email=${encodeURIComponent(inputEmail)}`);
            const data = await response.json();
            if (data && data.length > 0 && data[0].username) {
                setUser(data[0]); // Armazena o usuário completo
                fetchTasks(data[0].id); // Busca as tarefas usando o ID do usuário
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
            setTasks(data); // Armazena as tarefas retornadas
        } catch (error) {
            console.error("Erro ao buscar tarefas:", error);
            setTasks([]);
        }
    };

    const handleEmailChange = (event) => {
        setInputEmail(event.target.value); // Atualiza o email conforme o usuário digita
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
                            maxHeight: "200px", // Altura máxima do contêiner
                            overflowY: "auto",  // Rolagem vertical quando ultrapassar a altura
                            border: "1px solid #ddd", // Borda sutil para destacar
                            borderRadius: "4px", // Bordas arredondadas
                        }}
                    >
                        <ul className="list-group">
                            {tasks.map((task) => (
                                <li key={task.id} className="list-group-item">
                                    {task.task_description}
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
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const UserForm = () => {
    const [user, setUser] = useState(null);
    const [tasks, setTasks] = useState([]);
    const [inputEmail, setInputEmail] = useState("");
    const [selectedTask, setSelectedTask] = useState(null);
    const [showModal, setShowModal] = useState(false);

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
                setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
            } else {
                console.error("Erro ao excluir tarefa:", response.statusText);
            }
        } catch (error) {
            console.error("Erro ao excluir tarefa:", error);
        }
    };

    const handleEditTask = (task) => {
        setSelectedTask({ ...task });
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
        setSelectedTask(null);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSelectedTask((prev) => ({ ...prev, [name]: value }));
    };

    const handleSaveChanges = () => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === selectedTask.id ? { ...selectedTask } : task
            )
        );
        handleModalClose();
    };

    // Função para formatar apenas a data (sem hora)
    const formatDateOnly = (date) => {
        return date ? date.split("T")[0] : ""; // Remove a parte do horário
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
                            maxHeight: "300px",
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
                                    <span>
                                        {task.task_description}{" "}
                                        {task.due_date ? `- Due: ${formatDateOnly(task.due_date)}` : ""}{" "}
                                        {task.status ? `- Status: ${task.status}` : ""}{" "}
                                        {task.created_at ? `- Criada: ${formatDateOnly(task.created_at)}` : ""}{" "}
                                        {task.completion_at
                                            ? `- Concluída: ${formatDateOnly(task.completion_at)}`
                                            : ""}{" "}
                                        {task.updated_at ? `- Atualizada: ${formatDateOnly(task.updated_at)}` : ""}
                                    </span>
                                    <div>
                                        <button
                                            className="btn btn-primary btn-sm me-2"
                                            onClick={() => handleEditTask(task)}
                                        >
                                            Editar
                                        </button>
                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => handleDeleteTask(task.id)}
                                        >
                                            Excluir
                                        </button>
                                    </div>
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

            {/* Modal de Edição */}
            {selectedTask && (
                <div
                    className={`modal fade ${showModal ? "show d-block" : ""}`}
                    tabIndex="-1"
                    style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Editar Tarefa</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={handleModalClose}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label htmlFor="taskDescription" className="form-label">
                                        Descrição da Tarefa
                                    </label>
                                    <input
                                        type="text"
                                        id="taskDescription"
                                        name="task_description"
                                        className="form-control"
                                        value={selectedTask.task_description || ""}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="dueDate" className="form-label">
                                        Data Prevista
                                    </label>
                                    <input
                                        type="date"
                                        id="dueDate"
                                        name="due_date"
                                        className="form-control"
                                        value={formatDateOnly(selectedTask.due_date) || ""}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="status" className="form-label">
                                        Status
                                    </label>
                                    <input
                                        type="text"
                                        id="status"
                                        name="status"
                                        className="form-control"
                                        value={selectedTask.status || ""}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="createdAt" className="form-label">
                                        Data de Criação
                                    </label>
                                    <input
                                        type="date"
                                        id="createdAt"
                                        name="created_at"
                                        className="form-control"
                                        value={formatDateOnly(selectedTask.created_at) || ""}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="completionAt" className="form-label">
                                        Data de Conclusão
                                    </label>
                                    <input
                                        type="date"
                                        id="completionAt"
                                        name="completion_at"
                                        className="form-control"
                                        value={formatDateOnly(selectedTask.completion_at) || ""}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="updatedAt" className="form-label">
                                        Data de Atualização
                                    </label>
                                    <input
                                        type="date"
                                        id="updatedAt"
                                        name="updated_at"
                                        className="form-control"
                                        value={formatDateOnly(selectedTask.updated_at) || ""}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={handleModalClose}
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={handleSaveChanges}
                                >
                                    Salvar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserForm;
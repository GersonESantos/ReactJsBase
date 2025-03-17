import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const UserForm = () => {
    const [user, setUser] = useState(null);
    const [tasks, setTasks] = useState([]);
    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState(""); // Novo estado para senha
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Controla login
    const [selectedTask, setSelectedTask] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [theme, setTheme] = useState("light"); // Tema inicial

    useEffect(() => {
        if (isAuthenticated && inputEmail) {
            fetchUserByEmail();
        }
    }, [isAuthenticated, inputEmail]);

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

    const handlePasswordChange = (event) => {
        setInputPassword(event.target.value);
    };

    const handleLogin = (event) => {
        event.preventDefault();
        // Simulação de autenticação (ajuste conforme o back-end)
        // Aqui, apenas verifica se o email existe; idealmente, o back-end deve verificar a senha
        fetchUserByEmail().then(() => {
            if (user) {
                setIsAuthenticated(true);
            } else {
                alert("Email ou senha inválidos!");
            }
        });
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

    const formatDateOnly = (date) => {
        return date ? date.split("T")[0] : "";
    };

    const handleThemeChange = (newTheme) => {
        if (newTheme === "auto") {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setTheme(prefersDark ? "dark" : "light");
        } else {
            setTheme(newTheme);
        }
    };

    // Aplica o tema ao documento
    useEffect(() => {
        document.documentElement.setAttribute("data-bs-theme", theme);
    }, [theme]);

    if (!isAuthenticated) {
        return (
            <div className="d-flex align-items-center justify-content-center min-vh-100 py-4 bg-body-tertiary">
                <main className="form-signin w-100 m-auto" style={{ maxWidth: "330px" }}>
                    <form onSubmit={handleLogin}>
                        <h1 className="h3 mb-3 fw-normal text-center">Por favor, faça login</h1>

                        <div className="form-floating">
                            <input
                                type="email"
                                className="form-control"
                                id="floatingInput"
                                placeholder="nome@exemplo.com"
                                value={inputEmail}
                                onChange={handleEmailChange}
                                required
                            />
                            <label htmlFor="floatingInput">Endereço de e-mail</label>
                        </div>
                        <div className="form-floating">
                            <input
                                type="password"
                                className="form-control"
                                id="floatingPassword"
                                placeholder="Senha"
                                value={inputPassword}
                                onChange={handlePasswordChange}
                                required
                            />
                            <label htmlFor="floatingPassword">Senha</label>
                        </div>

                        <div className="form-check text-start my-3">
                            <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Lembrar-me
                            </label>
                        </div>
                        <button className="btn btn-primary w-100 py-2" type="submit">
                            Entrar
                        </button>
                        <p className="mt-5 mb-3 text-body-secondary text-center">© 2025</p>
                    </form>
                </main>

                {/* Dropdown de Tema */}
                <div className="theme-toggle dropdown" style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 1000 }}>
                    <button
                        className="btn btn-secondary theme-btn dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style={{ fontSize: "1.2rem", width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center" }}
                    >
                        {theme === "dark" ? "🌙" : "☀️"}
                    </button>
                    <ul className="dropdown-menu">
                        <li>
                            <a className="dropdown-item" href="#" onClick={() => handleThemeChange("light")}>
                                ☀️ Light
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#" onClick={() => handleThemeChange("dark")}>
                                🌙 Dark
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#" onClick={() => handleThemeChange("auto")}>
                                Auto
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }

    // UserForm original após login
    return (
        <div className="container mt-4">
            <div className="mb-3 d-flex align-items-center">
                <label htmlFor="userEmail" className="form-label me-2 mb-0">
                    Digite o E-mail do Usuário:
                </label>
                <input
                    type="email"
                    id="userEmail"
                    className="form-control"
                    value={inputEmail}
                    onChange={handleEmailChange}
                    placeholder="Ex: gerson@example.com"
                    style={{ maxWidth: "300px" }}
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

            {/* Dropdown de Tema na tela principal */}
            <div className="theme-toggle dropdown" style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 1000 }}>
                <button
                    className="btn btn-secondary theme-btn dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ fontSize: "1.2rem", width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                    {theme === "dark" ? "🌙" : "☀️"}
                </button>
                <ul className="dropdown-menu">
                    <li>
                        <a className="dropdown-item" href="#" onClick={() => handleThemeChange("light")}>
                            ☀️ Light
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#" onClick={() => handleThemeChange("dark")}>
                            🌙 Dark
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#" onClick={() => handleThemeChange("auto")}>
                            Auto
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default UserForm;
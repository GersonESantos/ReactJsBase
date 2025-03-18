import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const UserForm = () => {
    const [user, setUser] = useState(null);
    const [tasks, setTasks] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [theme, setTheme] = useState("light");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (isAuthenticated && user) {
            fetchTasks(user.id);
        }
    }, [isAuthenticated, user]);

    const fetchTasks = async (userId) => {
        try {
            const response = await fetch(`http://localhost:3000/user/${userId}/tasks/`);
            if (!response.ok) throw new Error("Erro ao buscar tarefas");
            const data = await response.json();
            setTasks(data);
        } catch (error) {
            console.error("Erro ao buscar tarefas:", error);
            setTasks([]);
        }
    };

    async function handleLogin(e) {
        e.preventDefault();
        try {
            const url = `http://localhost:3000/login?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;
            console.log("Requisição enviada:", url);
            const response = await fetch(url);
            console.log("Status da resposta:", response.status); // Log para depuração

            if (response.ok) { // Status 200-299
                const data = await response.json();
                console.log("Resposta do servidor:", data);
                if (data.length > 0) {
                    setUser(data[0]);
                    setIsAuthenticated(true);
                    setEmail("");
                    setPassword("");
                    setError("");
                } else {
                    setError("Nenhum usuário encontrado.");
                }
            } else if (response.status === 401) { // Status 401 - Credenciais inválidas
                setError("Email ou senha inválidos!");
            } else { // Outros erros HTTP
                setError(`Erro inesperado: ${response.status}`);
            }
        } catch (error) { // Erro de rede ou servidor offline
            console.error("Erro ao fazer login:", error);
            setError("Erro ao conectar ao servidor! Verifique se o servidor está rodando.");
        }
    }

    const updateThemeIcon = (newTheme) => {
        return newTheme === "dark" ? "🌙" : "☀️";
    };

    const handleThemeChange = (selectedTheme) => {
        if (selectedTheme === "auto") {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setTheme(prefersDark ? "dark" : "light");
        } else {
            setTheme(selectedTheme);
        }
    };

    useEffect(() => {
        document.documentElement.setAttribute("data-bs-theme", theme);
    }, [theme]);

    useEffect(() => {
        const currentTheme = document.documentElement.getAttribute("data-bs-theme") || "light";
        if (currentTheme === "auto") {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setTheme(prefersDark ? "dark" : "light");
        } else {
            setTheme(currentTheme);
        }
    }, []);

    if (!isAuthenticated) {
        return (
            <div className="d-flex align-items-center py-4 bg-body-tertiary min-vh-100">
                <main className="form-signin w-100 m-auto" style={{ maxWidth: "330px", padding: "1rem" }}>
                    <form onSubmit={handleLogin}>
                        <h1 className="h3 mb-3 fw-normal text-center">Faça login</h1>
                        <img
                            src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
                            alt=""
                            className="mb-4 d-block mx-auto"
                            height="54"
                            width="72"
                        />

                        <div className="form-floating mb-3">
                            <input
                                type="email"
                                className="form-control"
                                id="floatingInput"
                                name="email"
                                placeholder="nome@exemplo.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <label htmlFor="floatingInput">Endereço de e-mail</label>
                        </div>
                        <div className="form-floating position-relative mb-3">
                            <input
                                type={passwordVisible ? "text" : "password"}
                                className="form-control pe-5"
                                id="floatingPassword"
                                name="password"
                                placeholder="Senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <label htmlFor="floatingPassword">Senha</label>
                            <button
                                type="button"
                                className="btn btn-outline-secondary position-absolute end-0 top-50 translate-middle-y"
                                style={{ border: "none", background: "transparent" }}
                                onMouseDown={() => setPasswordVisible(true)}
                                onMouseUp={() => setPasswordVisible(false)}
                                onMouseLeave={() => setPasswordVisible(false)}
                            >
                                <span className="eye-icon">{passwordVisible ? "👁️‍🗨️" : "👁️"}</span>
                            </button>
                        </div>

                        <div className="form-check text-start my-3">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="flexCheckDefault"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Lembrar-me
                            </label>
                        </div>
                        <button className="btn btn-primary w-100 py-2" type="submit">
                            Entrar
                        </button>
                        {error && <p className="mt-3 text-danger text-center">{error}</p>}
                        <p className="mt-5 mb-3 text-body-secondary text-center">© 2025</p>
                    </form>
                </main>

                <div className="theme-toggle dropdown" style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 1000 }}>
                    <button
                        className="btn btn-secondary theme-btn dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style={{ fontSize: "1.2rem", padding: "0.5rem", width: "60px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center" }}
                    >
                        {updateThemeIcon(theme)}
                    </button>
                    <ul className="dropdown-menu">
                        <li>
                            <a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); handleThemeChange("light"); }}>
                                ☀️ Light
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); handleThemeChange("dark"); }}>
                                🌙 Dark
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); handleThemeChange("auto"); }}>
                                Auto
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }

    return (
        <div className="container mt-4">
            <h3>Bem-vindo, {user.username}!</h3>
            <h4>Tarefas do Usuário:</h4>
            {tasks.length > 0 ? (
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
                                    {task.due_date ? `- Due: ${task.due_date.split("T")[0]}` : ""}
                                    {task.status ? ` - Status: ${task.status}` : ""}
                                    {task.created_at ? ` - Criada: ${task.created_at.split("T")[0]}` : ""}
                                    {task.completion_at ? ` - Concluída: ${task.completion_at.split("T")[0]}` : ""}
                                    {task.updated_at ? ` - Atualizada: ${task.updated_at.split("T")[0]}` : ""}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>Nenhuma tarefa encontrada para este usuário.</p>
            )}

            <div className="theme-toggle dropdown" style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 1000 }}>
                <button
                    className="btn btn-secondary theme-btn dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ fontSize: "1.2rem", padding: "0.5rem", width: "60px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                    {updateThemeIcon(theme)}
                </button>
                <ul className="dropdown-menu">
                    <li>
                        <a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); handleThemeChange("light"); }}>
                            ☀️ Light
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); handleThemeChange("dark"); }}>
                            🌙 Dark
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); handleThemeChange("auto"); }}>
                            Auto
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default UserForm;
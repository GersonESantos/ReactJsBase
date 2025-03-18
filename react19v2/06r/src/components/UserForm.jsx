import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const UserForm = () => {
    const [users, setUsers] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [theme, setTheme] = useState("light");
    const [passwordVisible, setPasswordVisible] = useState(false);

    // Função para lidar com o envio do formulário
    async function handleAddUser(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get("email");

        // Simula uma chamada de API com delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setUsers((prev) => [...prev, { email }]);
        setEmail(""); // Limpa o campo de e-mail
        setPassword(""); // Limpa o campo de senha
    }

    // Função para atualizar o ícone do tema
    const updateThemeIcon = (newTheme) => {
        return newTheme === "dark" ? "🌙" : "☀️";
    };

    // Função para alternar o tema
    const handleThemeChange = (selectedTheme) => {
        if (selectedTheme === "auto") {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setTheme(prefersDark ? "dark" : "light");
        } else {
            setTheme(selectedTheme);
        }
    };

    // Aplicar o tema ao carregar o componente
    useEffect(() => {
        document.documentElement.setAttribute("data-bs-theme", theme);
    }, [theme]);

    // Configuração inicial do tema
    useEffect(() => {
        const currentTheme = document.documentElement.getAttribute("data-bs-theme") || "light";
        if (currentTheme === "auto") {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setTheme(prefersDark ? "dark" : "light");
        } else {
            setTheme(currentTheme);
        }
    }, []);

    return (
        <div className="d-flex align-items-center py-4 bg-body-tertiary min-vh-100">
            <main className="form-signin w-100 m-auto" style={{ maxWidth: "330px", padding: "1rem" }}>
                <form onSubmit={handleAddUser}>
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
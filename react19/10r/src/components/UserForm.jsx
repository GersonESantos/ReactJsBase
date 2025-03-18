import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const UserForm = () => {
    const [userName, setUserName] = useState(""); // Estado para armazenar o nome do usuário
    const [inputEmail, setInputEmail] = useState(""); // Estado para o email digitado

    // Buscar o nome do usuário com base no email ao mudar o input
    useEffect(() => {
        if (inputEmail) {
            fetchUserByEmail();
        } else {
            setUserName(""); // Limpa o nome se o email estiver vazio
        }
    }, [inputEmail]); // Executa sempre que inputEmail mudar

    const fetchUserByEmail = async () => {
        try {
            const response = await fetch(`http://localhost:3000/login?email=${encodeURIComponent(inputEmail)}`);
            const data = await response.json();
            if (data && data.length > 0 && data[0].username) {
                setUserName(data[0].username); // Acessa o username do primeiro elemento do array
            } else {
                setUserName("Usuário não encontrado");
            }
        } catch (error) {
            console.error("Erro ao buscar usuário:", error);
            setUserName("Erro ao carregar");
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
            <p>{userName || "Digite um email para buscar"}</p> {/* Exibe instrução inicial */}
        </div>
    );
};

export default UserForm;
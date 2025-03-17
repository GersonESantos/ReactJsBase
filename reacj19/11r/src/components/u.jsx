import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const UserForm = () => {
    const [userName, setUserName] = useState(""); // Estado para armazenar o nome do usuário

    // Buscar o nome do usuário com ID 1 ao carregar o componente
    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = async () => {
        try {
            const response = await fetch("http://localhost:3000/user/1"); // Chama a rota GET /user/1
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

    return (
        <div className="container mt-4">
            <h3>Nome do Usuário (ID 1):</h3>
            <p>{userName}</p> {/* Exibe o nome do usuário */}
        </div>
    );
};

export default UserForm;
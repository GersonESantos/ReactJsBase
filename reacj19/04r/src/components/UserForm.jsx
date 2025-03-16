import { useState }  from "react";

const UserForm = () => {
    const [users, setUsers] = useState([]);

    async function handleAddUser(formData) {
        console.log("enviou o formulário");
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
            <button type="submit">Enviar</button>
        </form>
        <h3>Usuários Adicionados:</h3>
        <ul>
            {users.map((user, index) => (
                <li key={index}>
                    {user.name} - {user.email}
                </li>
            ))}
        </ul>
    </div>
);
};
export default UserForm;


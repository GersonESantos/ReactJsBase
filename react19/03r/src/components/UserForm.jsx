import { useState }  from "react";

const UserForm = () => {
    const [users, setUsers] = useState([]);

    async function handleAddUser(formData) {
        console.log("enviou o formulário");
    }

    return (
        <div>
        <form action={handleAddUser}>
        <button type="submit">Enviar</button>
        </form>
        </div>
    );
};
export default UserForm;


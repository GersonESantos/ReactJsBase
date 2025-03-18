import { useState }  from "react";

const UserForm = () => {
    const [users, setUsers] = useState([]);

    async function handleAddUser(formData) {
        const name = formData.get("name");
    const email = formData.get("email");

    // Simula uma chamada de API com delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setUsers((prev) => [...prev, { name, email }]);      
    }

    return (
    <div>
        <h2>Usuários</h2>
    </div>
);
};
export default UserForm;


import { useState }  from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const UserForm = () => {
    const [users, setUsers] = useState([]);

    async function handleAddUser(formData) {
        
    const email = formData.get("email");

    // Simula uma chamada de API com delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setUsers((prev) => [...prev, {  email }]);      
    }

    return (
    <div>
        <h2>Usuários</h2>
    </div>
);
};
export default UserForm;


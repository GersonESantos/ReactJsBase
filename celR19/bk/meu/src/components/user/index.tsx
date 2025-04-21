import { ReactNode } from "react";

interface UserProps {
  name: string
     age: number;
    email: string;
    address: string;
    phone: string;
    occupa: string;
    hobbies: string[];
    bio: string;
    profilePicture: string;
    socialMedia: {
      facebook: string;
      twitter: string;
      instagram: string;
      linkedin: string;
    };
    preferences: {
      theme: string;
      children: ReactNode
    }
}
const User = ({name,age,email,address,phone}: UserProps ) => {
  return (
    <div>
    <p>Usuario: {name}</p>
    <p>Idade {age}</p>
    <p>Email: {email}</p>
    <p>Endereco: {address}</p>
    <p>Telefone: {phone}</p>
    <p>Ocupacao: {"aa"}</p>
    <p>Hobbies: {}</p>


    </div>
  );
}
export default User;
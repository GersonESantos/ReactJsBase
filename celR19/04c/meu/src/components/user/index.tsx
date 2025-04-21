import { ReactNode } from "react";

interface UserProps {
  name: string;
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
    children: ReactNode;
  };
}

const User = ({
  name,
  age,
  email,
  address,
  phone,
  occupa,
  hobbies,
  socialMedia,
}: UserProps) => {
  return (
    <div>
      <p>Usuario: {name}</p>
      <p>Idade: {age}</p>
      <p>Email: {email}</p>
      <p>Endereco: {address}</p>
      <p>Telefone: {phone}</p>
      <p>Ocupacao: {occupa}</p>
      <p>Hobbies: {hobbies.join(", ")}</p>
      <p>Social Media:</p>
      <ul>
        <li>Facebook: {socialMedia.facebook}</li>
        <li>Twitter: {socialMedia.twitter}</li>
        <li>Instagram: {socialMedia.instagram}</li>
        <li>LinkedIn: {socialMedia.linkedin}</li>
      </ul>
    </div>
  );
};

export default User;
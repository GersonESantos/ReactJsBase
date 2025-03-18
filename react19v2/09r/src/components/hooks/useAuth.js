import { useState } from 'react';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const url = `http://localhost:3000/login?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;
      const response = await fetch(url);

      if (response.ok) {
        const data = await response.json();
        if (data.length > 0) {
          setUser(data[0]);
          setIsAuthenticated(true);
          setEmail('');
          setPassword('');
          setError('');
        } else {
          setError('Nenhum usuário encontrado.');
        }
      } else if (response.status === 401) {
        setError('Email ou senha inválidos!');
      } else {
        setError(`Erro inesperado: ${response.status}`);
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setError('Erro ao conectar ao servidor! Verifique se o servidor está rodando.');
    }
  };

  return { user, isAuthenticated, error, handleLogin, setEmail, setPassword, email, password };
};
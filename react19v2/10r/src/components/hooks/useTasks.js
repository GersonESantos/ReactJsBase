import { useState, useEffect } from 'react';

export const useTasks = (user, isAuthenticated) => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async (userId) => {
    try {
      const response = await fetch(`http://localhost:3000/user/${userId}/tasks/`);
      if (!response.ok) throw new Error('Erro ao buscar tarefas');
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Erro ao buscar tarefas:', error);
      setTasks([]);
    }
  };

  useEffect(() => {
    if (isAuthenticated && user) {
      fetchTasks(user.id);
    }
  }, [isAuthenticated, user]);

  return { tasks, fetchTasks };
};
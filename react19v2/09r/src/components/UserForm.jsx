import { useAuth } from './hooks/useAuth';
import { useTasks } from './hooks/useTasks';
import { useTheme } from './hooks/useTheme';
import LoginForm from './LoginForm';
import TaskList from './TaskList';
import ThemeToggle from './ThemeToggle';
import 'bootstrap/dist/css/bootstrap.min.css';
import './UserForm.css';

const UserForm = () => {
  const { user, isAuthenticated, error, handleLogin, setEmail, setPassword, email, password } = useAuth();
  const { tasks, fetchTasks } = useTasks(user, isAuthenticated);
  const { theme, handleThemeChange, updateThemeIcon } = useTheme();

  return (
    <>
      {!isAuthenticated ? (
        <LoginForm
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          handleLogin={handleLogin}
          error={error}
        />
      ) : (
        <TaskList user={user} tasks={tasks} />
      )}
      <ThemeToggle theme={theme} handleThemeChange={handleThemeChange} updateThemeIcon={updateThemeIcon} />
    </>
  );
};

export default UserForm;
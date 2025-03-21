const TaskList = ({ user, tasks }) => {
    return (
      <div className="container mt-4">
        <h3>Bem-vindo, {user.username}!</h3>
        <h4>Tarefas do Usuário:</h4>
        {tasks.length > 0 ? (
          <div
            style={{
              maxHeight: '300px',
              overflowY: 'auto',
              border: '1px solid #ddd',
              borderRadius: '4px',
            }}
          >
            <ul className="list-group">
              {tasks.map((task) => (
                <li
                  key={task.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <span>
                    {task.task_description}{' '}
                    {task.due_date ? `- Due: ${task.due_date.split('T')[0]}` : ''}
                    {task.status ? ` - Status: ${task.status}` : ''}
                    {task.created_at ? ` - Criada: ${task.created_at.split('T')[0]}` : ''}
                    {task.completion_at ? ` - Concluída: ${task.completion_at.split('T')[0]}` : ''}
                    {task.updated_at ? ` - Atualizada: ${task.updated_at.split('T')[0]}` : ''}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Nenhuma tarefa encontrada para este usuário.</p>
        )}
      </div>
    );
  };
  
  export default TaskList;
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function TodoContainer() {
  const containerStyles = {
    padding: '20px',
    borderRadius: '8px',
    margin: '20px',
    // color: preferDarkMode ? 'white' : 'black',
    // backgroundColor: preferDarkMode ? '#1f1f1f' : '#f8f8f8',
    // border: preferDarkMode ? '1px solid #444' : '1px solid #ddd',
  };

  return (
    <div style={containerStyles}>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default TodoContainer;

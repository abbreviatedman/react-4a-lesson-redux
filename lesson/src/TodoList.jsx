import TodoItem from './TodoItem';

function TodoList() {
  function handleRemoveTodo (index) {
    // dispatch here
  };

  function handleRemoveAllTodos () {
    // dispatch here
  };

  function handleToggleOrder() {
    // dispatch here
  }

  // const sortedTodos = preferNewestFirst ? [...todos].reverse() : todos;

  const listStyles = {
    listStyle: 'none',
    padding: 0,
  };

  return (
    <div>
      <ul style={listStyles}>
        {/* {sortedTodos.map((todo, index) => ( */}
        {/*   <TodoItem */}
        {/*     key={index} */}
        {/*     todo={todo} */}
        {/*     onRemove={() => handleRemoveTodo(index)} */}
        {/*   /> */}
        {/* ))} */}
      </ul>
      {/* <p>&nbsp;{taskGoal > 0 && <span>Task Goal: {taskGoal}</span>}</p> */}
      <button onClick={handleRemoveAllTodos}>Delete All Todos</button>
      <button onClick={handleToggleOrder}>
        {/* Order by {preferNewestFirst ? 'Oldest First' : 'Newest First'} */}
      </button>
    </div>
  );
}

export default TodoList;

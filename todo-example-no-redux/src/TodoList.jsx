import React from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const {
    isDarkMode,
    todos,
    deleteTodo,
    toggleTodo,
  } = props;

  const listStyles = {
    listStyle: "none",
    padding: 0,
  };

  return (
    <ul style={listStyles}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          isDarkMode={isDarkMode}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;

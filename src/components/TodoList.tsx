// TodoList.tsx
import React, { useState } from 'react';
import TodoInput from './TodoInput';

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);

  const handleAddTodo = (text: string) => {
    setTodos((prevTodos) => [...prevTodos, text]);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoInput onAddTodo={handleAddTodo} />
      {/* Display your list of todos here */}
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

import React from 'react';
import { useGlobalContext } from './context';

const ToDoList = () => {
  const { todos, removeTodo } = useGlobalContext();

  return (
    <div>
      {todos.map((todo) => {
        const { text, id } = todo;
        return (
          <div key={id}>
            <p>{text}</p>
            <button onClick={() => removeTodo(id)}>Remove</button>
          </div>
        );
      })}
    </div>
  );
};

export default ToDoList;

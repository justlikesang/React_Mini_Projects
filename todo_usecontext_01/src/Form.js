import React, { useState } from 'react';
import { useGlobalContext } from './context';

const Form = () => {
  const { addTodo } = useGlobalContext();

  const [text, setText] = useState('');

  return (
    <div>
      <label htmlFor="text">Task List : </label>
      <input
        id="text"
        type="text"
        placeholder="your todo here"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => addTodo(text)}>Add</button>
    </div>
  );
};

export default Form;

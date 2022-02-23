import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(text === '') {
      return;
    }
    setTodos([...todos, { text, id: new Date().getTime().toString() }]);
    setText('');
  };

  const handleRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <div className="form-container">
        <h4>To Do List</h4>
        <input
          type="text"
          placeholder="add your item"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleSubmit}>Add</button>
      </div>
      {todos.map((todo) => {
        return (
          <div key={todo.id} style={{ marginTop: '1rem' }}>
            <p style={{ display: 'inline', paddingRight: '1rem' }}>
              {todo.text}
            </p>
            <button onClick={() => handleRemove(todo.id)}>Remove</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;

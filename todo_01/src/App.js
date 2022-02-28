import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { id: new Date().getTime().toString(), text }]);
    setText('');
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <section className="section-center">
        <div>
          <form>
            <input
              type="text"
              name="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button onClick={addTodo}>add</button>
          </form>
          <article className='todos'>
            {todos.map((todo) => {
              const { id, text } = todo;
              return (
                <div key={id}>
                  <p>{text}</p>
                  <button onClick={() => removeTodo(id)}>remove</button>
                </div>
              );
            })}
          </article>
        </div>
      </section>
    </div>
  );
}

export default App;

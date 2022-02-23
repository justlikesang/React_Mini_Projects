import React, { useState } from 'react';
import './App.css';

function App() {
  let initialState = {
    name: '',
    email: '',
    date: '',
    password: '',
  };

  const [formData, setFormData] = useState(initialState);
  const [form, setForm] = useState({ name: '', password: '' });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => {
      return { ...formData, [name]: value };
    });
    console.log(formData);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData(initialState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((form) => {
      return {
        ...form,
        [name]: value,
      };
    });
    console.log(form);
  };

  return (
    <div className="App">
      <h2>Forms Exercise</h2>
      <form onSubmit={onSubmit}>
        <article className="form-row-container">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={onChange}
          />
        </article>
        <article className="form-row-container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={onChange}
          />
        </article>
        <article className="form-row-container">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={onChange}
          />
        </article>
        <article className="form-row-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={onChange}
          />
        </article>
        <button type="submit">Submit</button>
      </form>

      <form onSubmit={handleSubmit}>
        <div className="form-row-container">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-row-container">
          <input
            type="text"
            name="password"
            value={form.password}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

import React, { useState } from 'react';

function App() {
  const initialState = {
    name: '',
    birthday: '',
    age: '',
    email: '',
  };
  const [formData, setFormData] = useState(initialState);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => {
      return {
        ...formData,
        [name]: value,
      };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setFormData(initialState);
  };

  return (
    <div className="App">
      <form onSubmit={onSubmit} className="form">
        <div>
          <div>
            <label htmlFor="1" className="form-label">
              Name:
            </label>
            <input
              id="1"
              type="text"
              name="name"
              value={formData.name}
              onChange={onChange}
            />
          </div>
          <div>
            <label htmlFor="1" className="form-label">
              Birthday:
            </label>
            <input
              type="date"
              name="birthday"
              value={formData.birthday}
              onChange={onChange}
            />
          </div>
          <div>
            <label htmlFor="1" className="form-label">
              Age:
            </label>
            <input
              type="text"
              name="age"
              value={formData.age}
              onChange={onChange}
            />
          </div>
          <div>
            <label htmlFor="1" className="form-label">
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={onChange}
            />
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;

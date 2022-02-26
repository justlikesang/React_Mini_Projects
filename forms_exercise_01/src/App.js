import React, { useState } from 'react';

const initialState = {
  name: '',
  birthday: '',
  email: '',
  password: '',
};

function App() {
  const [formData, setFormData] = useState(initialState);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((oldFormData) => {
      return {
        ...oldFormData,
        [name]: value,
      };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // would send axios.post to an end point
    // and shape the data necessary to send off
    // await axios.post(`${ENDPOINT}/api`, json data)
    setFormData(initialState);
    console.log(formData);
  };

  const checkValidity = () => {
    if(formData.name && formData.birthday && formData.email && formData.password) {
      return false;
    }
    return true;
  }

  return (
    <section>
      <article className="form-container">
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={onChange}
            />
          </div>
          <div>
            <label htmlFor="birthday">Birthday: </label>
            <input
              id="birthday"
              type="date"
              name="birthday"
              value={formData.brithday}
              onChange={onChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={onChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={onChange}
            />
          </div>
          <button type="submit" disabled={checkValidity()}>Submit</button>
        </form>
      </article>
    </section>
  );
}

export default App;

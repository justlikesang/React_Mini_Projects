import React, { useState } from 'react';

const initialState = {
  name: '',
  age: '',
  birthday: '',
};

function App() {
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
    console.log(formData);
    setFormData(initialState);
  };

  return (
    <section>
      <article className="form-section">
        <form onSubmit={onSubmit} className="form">
          <div className='form-content'>
            <div>
              <label htmlFor="name">Name :</label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                name="name"
                value={formData.name}
                onChange={onChange}
              />
            </div>
            <div>
              <label htmlFor="age">Age :</label>
              <input
                id="age"
                type="text"
                placeholder="Your age"
                name="age"
                value={formData.age}
                onChange={onChange}
              />
            </div>
            <div>
              <label htmlFor="birthday">Birthday :</label>
              <input
                id="birthday"
                type="date"
                placeholder="Your birthdate"
                name="birthday"
                value={formData.birthday}
                onChange={onChange}
              />
            </div>
            <button className="btn">Submit</button>
          </div>
        </form>
      </article>
    </section>
  );
}

export default App;

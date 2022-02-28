import React, { useState } from 'react';

const fields = [
  {
    id: 0,
    type: 'text',
    name: 'name',
    label: 'Name',
  },
  {
    id: 1,
    type: 'email',
    name: 'email',
    label: 'Email',
  },
  {
    id: 2,
    type: 'date',
    name: 'birthday',
    label: 'Date',
  },
  {
    id: 3,
    type: 'password',
    name: 'password',
    label: 'Password',
  },
];

function App() {
  const initialState = { name: '', email: '', birthday: '', password: '' };
  const [formData, setFormData] = useState(initialState);
  const [page, setPage] = useState(0);
  const [success, setSuccess] = useState(false);
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => {
      return {
        ...formData,
        [name]: value,
      };
    });
  };

  const handlePage = (e) => {
    e.preventDefault();
    if (page === fields.length - 1) {
      setSuccess(true);
    } else {
      setPage(page + 1);
    }
    console.log(formData);
  };

  return (
    <section className="App">
      <article className="section">
        {success ? (
          <div>
            <h1>Success</h1>
          </div>
        ) : (
          <>
            {page > 0 ? (
              <button className="back-btn" onClick={() => setPage(page - 1)}>
                back
              </button>
            ) : (
              ''
            )}
            <form className="form">
              <label htmlFor={fields[page].id}>{fields[page].label}: </label>
              <input
                id={fields[page].id}
                type={fields[page].type}
                name={fields[page].name}
                value={formData[fields[page].name]}
                onChange={onChange}
              />
              <button className="btn" onClick={handlePage}>
                {page === fields.length - 1 ? 'Submit' : 'Next'}
              </button>
            </form>
          </>
        )}
      </article>
    </section>
  );
}

export default App;

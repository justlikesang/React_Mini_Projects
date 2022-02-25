import React, { useState } from 'react';

const fields = [
  {
    id: 0,
    label: 'Name',
    name: 'name',
    type: 'text',
  },
  {
    id: 1,
    label: 'Email',
    name: 'email',
    type: 'email',
  },
  {
    id: 2,
    label: 'Date',
    name: 'date',
    type: 'date',
  },
  {
    id: 3,
    label: 'Password',
    name: 'password',
    type: 'password',
  },
];

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    password: '',
  });
  const [page, setPage] = useState(0);
  const [lastPage, setLastPage] = useState(false);

  const handlePage = (e) => {
    e.preventDefault();
    if (page === fields.length - 1) {
      setLastPage(true);
    }
    if (page < fields.length - 1) {
      setPage(page + 1);
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => {
      return {
        ...formData,
        [name]: value,
      };
    });
  };

  const prevPage = () => {
    setPage(page - 1);
  }

  return (
    <section>
      <article className="form-container">
        {lastPage ? (
          <h1>Success</h1>
        ) : (
          <>
            {page !== 0 ? <button className="btn" onClick={prevPage}>Back</button> : ''}
            <form>
              <label htmlFor={fields[page].id}>{fields[page].label}</label>
              <input
                id={fields[page].id}
                type={fields[page].type}
                name={fields[page].name}
                value={formData[fields[page].name]}
                onChange={onChange}
              />
              <button type="submit" onClick={handlePage}>
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

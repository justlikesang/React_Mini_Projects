import React, { useState } from 'react';

const fields = [
  {
    id: 'name',
    name: 'name',
    type: 'text',
    label: 'Name',
  },
  {
    id: 'email',
    name: 'email',
    type: 'email',
    label: 'Email',
  },
  {
    id: 'birthdate',
    name: 'birthdate',
    type: 'date',
    label: 'Birthdate',
  },
  {
    id: 'password',
    name: 'password',
    type: 'password',
    label: 'Password',
  },
];

const Form = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    birthdate: '',
    password: '',
  });
  const [page, setPage] = useState(0);
  const [success, setSuccess] = useState(false);
  const [showSurvery, setShowSurvery] = useState(false);
  const lastPage = fields.length - 1;

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormValues((formValues) => {
      return {
        ...formValues,
        [name]: value,
      };
    });
  };

  const nextPage = (e) => {
    e.preventDefault();
    if (page === 1 && formValues.email.includes('@gmail.com')) {
      setShowSurvery(true);
    }
    if (page < fields.length - 1) {
      setPage((oldPage) => oldPage + 1);
    } else {
      setSuccess(true);
    }
  };

  const prevPage = () => {
    if (page > 0) {
      setPage(page - 1);
    } else {
      setPage(0);
    }
  };

  return (
    <>
      {success ? (
        <div>You successfully finished the form</div>
      ) : (
        <>
          {page > 0 && <button onClick={prevPage}>Back</button>}
          <form className="form-content">
            <label htmlFor={fields[page].name}>{fields[page].label}</label>
            <input
              type={fields[page].type}
              name={fields[page].name}
              id={fields[page].id}
              value={formValues[fields[page].name]}
              onChange={onChange}
            />
            <button
              type="submit"
              disabled={!formValues[fields[page].name]}
              onClick={nextPage}
            >
              {page === lastPage ? 'Next' : 'Submit'}
            </button>
          </form>
          {showSurvery ? (
            <div>
              <h4>why do you use gmail?</h4>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
          ) : (
            ''
          )}
        </>
      )}
    </>
  );
};

const Congrats = () => {
  return (
    <div>
      <h1>Congrats you finished</h1>
    </div>
  );
};

export default Form;

/* First iteration from alex using just name state value
const Form = () => {
  const [name, setName] = useState('');
  const [page, setPage] = useState(0);

  const onChange = (e) => {
    setName(e.target.value);
  };

  console.log(name);

  return (
    <form className="form-content">
      <label htmlFor={fields[0].name}>{fields[0].label}</label>
      <input
        type={fields[0].type}
        name={fields[0].name}
        id={fields[0].id}
        value={name}
        onChange={onChange}
      />
      <button type="submit">Next</button>
    </form>
  );
};
*/

/* My first attempt
const Form = () => {
  const [formPage, setFormPage] = useState(0);
  const [formInfo, setFormInfo] = useState(formData);

  const nextPage = () => {
    setFormPage(formPage + 1);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormInfo((data) => {
      if (formPage === formInfo[0].id) {
        return {
          ...data,
          [name]: value,
        };
      }
    });
  };

  return (
    <article className="form-content">
      <form>
        <label htmlFor={formInfo[0].formLabel}>{formInfo[0].formLabel}</label>
        <input
          type="text"
          id={formInfo[0].formLabel}
          name={formInfo[0].name}
          value={formInfo[0].formInput}
          onChange={(e) => onChange(e)}
        />
        <button type="click" onClick={nextPage}>
          Next
        </button>
      </form>
    </article>
  );
};
*/

/*
  I have to dynamically show a structured formdata for label and input for each page
*/

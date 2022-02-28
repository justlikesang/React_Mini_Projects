import React, { useState, useEffect } from 'react';

function App() {
  const [showNumber, setShowNumber] = useState('');

  const handleNumbers = (e) => {
    const value = e.target.getAttribute('data');
    if (showNumber.length > 13) {
      return;
    }
    setShowNumber(showNumber + value);
    console.log(value);
  };

  const organizeNumbers = () => {
    if (showNumber.length === 3) {
      setShowNumber(`(${showNumber})`);
    } else if (showNumber.length === 8) {
      setShowNumber(`(${showNumber.slice(1, 4)})${showNumber.slice(5, 8)}-`);
    } else if (showNumber.length === 13) {
      setShowNumber(
        `(${showNumber.slice(1, 4)})
        ${showNumber.slice(5, 8)}-${showNumber.slice(9, 13)}`
      );
    }
  };

  useEffect(() => {
    organizeNumbers();
  }, [showNumber]);

  return (
    <div className="section">
      <section className="section-center">
        <article className="show-number-container">
          <p>{showNumber}</p>
        </article>
        <article className="number-pad-container">
          <button data={'9'} onClick={handleNumbers} className="btn">
            9
          </button>
          <button data={'8'} onClick={handleNumbers} className="btn">
            8
          </button>
          <button data={'7'} onClick={handleNumbers} className="btn">
            7
          </button>
          <button data={'6'} onClick={handleNumbers} className="btn">
            6
          </button>
          <button data={'5'} onClick={handleNumbers} className="btn">
            5
          </button>
          <button data={'4'} onClick={handleNumbers} className="btn">
            4
          </button>
          <button data={'3'} onClick={handleNumbers} className="btn">
            3
          </button>
          <button data={'2'} onClick={handleNumbers} className="btn">
            2
          </button>
          <button data={'1'} onClick={handleNumbers} className="btn">
            1
          </button>
        </article>
        <article className="zero">
          <button data={'0'} onClick={handleNumbers} className="btn">
            0
          </button>
        </article>
      </section>
    </div>
  );
}

export default App;

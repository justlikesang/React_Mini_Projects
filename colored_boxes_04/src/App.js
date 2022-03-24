import React, { useState } from 'react';

function App() {
  const [boxes, setBoxes] = useState(Array(9).fill(null));

  const changeColor = (boxIdx) => {
    const colors = [
      'blue',
      'red',
      'black',
      'brown',
      'aqua',
      'teal',
      'purple',
      'orange',
      'green',
      'yellow',
      'turquoise',
    ];
    const randomIdx = Math.floor(Math.random() * colors.length);
    setBoxes(
      boxes.map((box, idx) => {
        if (idx === boxIdx) {
          return colors[randomIdx];
        }
        return box;
      })
    );
  };

  return (
    <section>
      <article className="box-section">
        <div className="box-container">
          {boxes.map((box, idx) => {
            return (
              <div
                key={idx}
                className="box"
                style={{ background: `${box}` }}
                onClick={() => changeColor(idx)}
              ></div>
            );
          })}
        </div>
      </article>
    </section>
  );
}

export default App;

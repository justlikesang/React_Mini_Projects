import React, { useState } from 'react';

function App() {
  const [boxes, setBoxes] = useState(Array(9).fill(null));

  const handleColor = (idx) => {
    const colors = [
      'black',
      'red',
      'blue',
      'orange',
      'pink',
      'turquoise',
      'magenta',
      'yellow',
      'navy',
      'teal',
    ];
    const randomIdx = Math.floor(Math.random() * colors.length);
    setBoxes(
      boxes.map((box, index) => {
        if (index === idx) {
          return colors[randomIdx];
        } else {
          return box;
        }
      })
    );
  };

  return (
    <section className="section">
      <article className="box-container">
        {boxes.map((box, idx) => {
          return (
            <div
              key={idx}
              style={{ background: `${box}` }}
              onClick={() => handleColor(idx)}
              className="box"
            ></div>
          );
        })}
      </article>
    </section>
  );
}

export default App;

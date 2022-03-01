import React, { useState } from 'react';

function App() {
  const [boxes, setBoxes] = useState(Array(9).fill(null));

  const handleColors = (idx) => {
    const colors = [
      'black',
      'blue',
      'yellow',
      'orange',
      'turquoise',
      'purple',
      'navy',
      'red',
      'aqua',
    ];
    const randomIdx = Math.floor(Math.random() * colors.length);

    setBoxes(
      boxes.map((box, index) => {
        if (index === idx) {
          return colors[randomIdx];
        }
        return box;
      })
    );
  };

  return (
    <section className="section-box">
      <div className="box-container">
        {boxes.map((box, idx) => {
          return (
            <div
              key={idx}
              style={{ background: `${box}` }}
              className="box"
              onClick={() => handleColors(idx)}
            ></div>
          );
        })}
      </div>
    </section>
  );
}

export default App;

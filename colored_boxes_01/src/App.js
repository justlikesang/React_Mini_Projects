import React, { useState } from 'react';

function App() {
  const [boxes, setBoxes] = useState(Array(9).fill(null));


  const handleColor = (idx) => {
    const colors = [ 'black', 'red', 'yellow', 'orange', 'teal', 'blue', 'purple', 'turquoise', 'navy', 'green'];
    const randomIdx = Math.floor(Math.random() * colors.length);
    setBoxes(boxes => {
      return boxes.map((box, index) => {
        if(index === idx) {
          return colors[randomIdx];
        }
        return box;
      })
    })
  }

  return (
    <section className="section">
      <article className="box-container">
        {boxes.map((box, idx) => {
          return <div className="box" style={{ background: `${box}`}} onClick={() => handleColor(idx)}></div>;
        })}
      </article>
    </section>
  );
}

export default App;

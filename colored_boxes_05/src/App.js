import { useState } from 'react';

function App() {
  const [boxes, setBoxes] = useState(Array(9).fill(null));

  const changeColors = (idx) => {
    const colors = ['black', 'blue', 'red', 'orange', 'yellow', 'teal', 'turquoise', 'purple', 'violet', 'green', 'brown', 'gray'];
    const randomIdx = Math.floor(Math.random() * colors.length);

    setBoxes(boxes.map((box, boxIdx) => {
      if(idx === boxIdx) return colors[randomIdx];
      return box;
    }))

  };

  return (
    <main>
      <div className="box-section">
        <section className="box-container">
          {boxes.map((box, idx) => {
            return (
              <article
                key={idx}
                style={{ background: `${box}` }}
                className="box"
                onClick={() => changeColors(idx)}
              ></article>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default App;

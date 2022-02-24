import React, { useState } from 'react';

const Boxes = () => {
  const [boxes, setBoxes] = useState(Array(9).fill(null));

  const changeColor = (idx) => {
    const colors = [
      'blue',
      'red',
      'black',
      'orange',
      'gray',
      'pink',
      'turquoise',
      'navy',
      'yellow',
      'teal',
      'purple',
      'magenta',
    ];
    const randomIdx = Math.floor(Math.random() * colors.length);
    setBoxes(
      boxes.map((box, index) => {
        if (idx === index) {
          return colors[randomIdx];
        } else {
          return box;
        }
      })
    );
  };

  return (
    <div className="box-container">
      {boxes.map((box, idx) => {
        return (
          <div
            style={{ background: `${box}` }}
            className="box"
            onClick={() => changeColor(idx)}
          ></div>
        );
      })}
    </div>
  );
};

export default Boxes;

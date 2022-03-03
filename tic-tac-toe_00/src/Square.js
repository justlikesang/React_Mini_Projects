import React from 'react';
import Circle from './Circle';
import Cross from './Cross';

const Square = ({ position, value, takeTurn }) => {
  return (
    <div className="square" onClick={() => takeTurn(position)}>
      {value === 'CIRCLE' && <Circle />}
      {value === 'CROSS' && <Cross />}
    </div>
  );
};

export default Square;

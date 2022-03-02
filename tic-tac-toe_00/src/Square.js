import React from 'react';
import Circle from './Circle';
import Cross from './Cross';

const Square = ({ position, value }) => {
  return (
    <div className="square">
      {value === 'CIRCLE' && <Circle />}
      {value === 'CROSS' && <Cross />}
    </div>
  );
};

export default Square;

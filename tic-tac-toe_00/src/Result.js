import React from 'react';

const CIRCLE = 'CIRCLE';
const CROSS = 'CROSS';

const Result = ({ winner }) => {
  return (
    <div className="result-background">
      <div className="result-container">
        {winner === CIRCLE && 'Circle won the game'}
        {winner === CROSS && 'Cross won the game'}
        {winner === 'It is a tie' && 'It is a tie'}
      </div>
      <button>Close</button>
    </div>
  );
};

export default Result;

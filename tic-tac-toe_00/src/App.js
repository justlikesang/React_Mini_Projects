import React, { useState } from 'react';
import Square from './Square';
import Circle from './Circle';
import Cross from './Cross';

const EMPTY = 'EMPTY';
const CIRCLE = 'CIRCLE';
const CROSS = 'CROSS';

function App() {
  const player = '';
  const positions = [
    CROSS,
    EMPTY,
    EMPTY,
    EMPTY,
    CIRCLE,
    EMPTY,
    EMPTY,
    EMPTY,
    EMPTY,
  ];

  return (
    <div className="App">
      <section className="grid">
        <Square position={0} value={positions[0]} />
        <Square position={1} value={positions[1]} />
        <Square position={2} value={positions[2]} />
        <Square position={3} value={positions[3]} />
        <Square position={4} value={positions[4]} />
        <Square position={5} value={positions[5]} />
        <Square position={6} value={positions[6]} />
        <Square position={7} value={positions[7]} />
        <Square position={8} value={positions[8]} />
      </section>
    </div>
  );
}

export default App;

import React from 'react';
import FloorButtons from './FloorButtons';
import { useGlobalContext } from './context';

function App() {
  const {
    elevatorFloor,
    destinationFloor,
    newFloorRequest,
    activateElevator,
    doorOpen,
    moving,
  } = useGlobalContext();

  const inTransit = () => {
    return (
      <>
        <h1>In transit</h1>
        <h1>{elevatorFloor}</h1>
      </>
    );
  };

  return (
    <div>
      <h1>Hello, I'm an elevator</h1>
      {moving ? inTransit() : <h1>I'm at floor {elevatorFloor}</h1>}
      <br />
      <br />
      <br />
      {doorOpen && <h1>door opens!</h1>}
      <br />
      <br />
      <br />

      <h2>You are at floor</h2>
      <h2>{destinationFloor}</h2>
      <div>
        <div>
          <button onClick={activateElevator}>go up</button>
        </div>
        <div>
          <button onClick={activateElevator}>go down</button>
        </div>
      </div>
      <br />
      <br />
      <br />
      <FloorButtons />
    </div>
  );
}

export default App;

import React from 'react';
import { useGlobalContext } from './context';

const FloorButtons = () => {
  const { setDestinationFloor, activateElevator, passengerFloorRequest } = useGlobalContext();
  return (
    <div>
      <button onClick={() => passengerFloorRequest(1)}>1</button>
      <button onClick={() => passengerFloorRequest(2)}>2</button>
      <button onClick={() => passengerFloorRequest(3)}>3</button>
      <button onClick={() => passengerFloorRequest(4)}>4</button>
      <button onClick={() => passengerFloorRequest(5)}>5</button>
    </div>
  );
};

export default FloorButtons;

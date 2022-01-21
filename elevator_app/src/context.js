import React, { useContext, useState, useEffect } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [idle, setIdle] = useState(true);
  const [moving, setMoving] = useState(false);
  const [doorOpen, setDoorOpen] = useState(false);
  const [elevatorFloor, setElevatorFloor] = useState(5);
  const [destinationFloor, setDestinationFloor] = useState(1);
  // when acquiring next floor to go to, simply store the nextD[0] and slice the next to the end
  const [nextDestination, setNextDestination] = useState([]);
  const [waitingLine, setWaitingLine] = useState([]);

  // when moving to a floor, we want to update the floor state after 1 second interval
  const newFloorRequest = () => {
    if (idle) {
      setMoving(true);
    }
  };

  const updateFloor = () => {
    // setIdle(false);
    // setMoving(true);
    if (doorOpen) {
      const door = setTimeout(() => {
        setDoorOpen(false);
      }, 3500);
      return () => clearTimeout(door);
    } else if (moving && !doorOpen) {
      const floor = setTimeout(() => {
        if (elevatorFloor === destinationFloor) {
          if (!doorOpen) {
            const door = setTimeout(() => {
              setDoorOpen(true);
              setMoving(false);
            }, 0);
            return () => clearTimeout(door);
          }

          return () => clearTimeout(floor);
        } else if (elevatorFloor > destinationFloor) {
          setElevatorFloor(elevatorFloor - 1);
        } else if (elevatorFloor < destinationFloor) {
          setElevatorFloor(elevatorFloor + 1);
        }
      }, 1500);
    } else if (nextDestination.length > 0 && moving) {
      setMoving(true);
      const nextFloor = nextDestination[0];
      const newLine = nextDestination.slice(1);
      setDestinationFloor(nextFloor);
      setNextDestination(newLine);
    }
  };

  const passengerFloorRequest = (floor) => {
    if (nextDestination.length === 0) {
      setMoving(true);
      setDestinationFloor(floor);
    } else if (nextDestination.length > 0 && moving) {
      setNextDestination([...nextDestination, floor]);
      // after setting the order of next destination, we have to make the elevator check if there is a next waiting line
    }
  };

  const activateElevator = () => {
    setMoving(true);
  };

  useEffect(() => {
    if (moving && !doorOpen) {
    }
    updateFloor();
  }, [moving, doorOpen, elevatorFloor, destinationFloor, nextDestination]);

  return (
    <AppContext.Provider
      value={{
        idle,
        moving,
        elevatorFloor,
        doorOpen,
        destinationFloor,
        setDestinationFloor,
        newFloorRequest,
        activateElevator,
        passengerFloorRequest,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

/* Elevator's side of perspective
    *When the elevator button is pressed from a floor, the elevator has to move from the current floor to the destination
      -first make the elevator start from the top of the level
      -press the button from the first level to move the elevator to move to the first level
      -door opens and stays out for 3 seconds and closes
      -if passenger(s) chooses their level from inside the elevator
        -proceeds to that level
      
  */

/* Elevator state and UI
    *When the elevator moves each level, it should take about 1 second
      -door should stay open for 3 seconds and close
      -once the door is closed, the elevator starts moving
*/

/* Passengers inside Elevator
    *If a passenger is inside the elevator they will press a button, if no one presses the elevator it doesn't move
      -once the passenger presses the button, it'll go to that destination
      -use setInquiry
*/

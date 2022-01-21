import React, { useContext, useState, useEffect } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [idle, setIdle] = useState(true);
  const [moving, setMoving] = useState(false);
  const [doorOpen, setDoorOpen] = useState(false);
  const [elevatorFloor, setElevatorFloor] = useState(5);
  const [inquiryFloor, setInquiryFloor] = useState(1);
  const [destinationFloor, setDestinationFloor] = useState(null);
  const [waitingLine, setWaitingLine] = useState([]);

  // when moving to a floor, we want to update the floor state after 1 second interval
  const newFloorRequest = () => {
    if (idle) {
      setMoving(true);
    }
  };

  const updateFloor = () => {
    if (moving) {
      const floor = setTimeout(() => {
        if (elevatorFloor === inquiryFloor) {
          if (!doorOpen) {
            const door = setTimeout(() => {
              setDoorOpen(true);
              setMoving(false);
            }, 1500);
            return () => clearTimeout(door);
          }
          if (doorOpen) {
            const door = setTimeout(() => {
              setDoorOpen(false);
            }, 3000);
            return () => clearTimeout(door);
          }
          return () => clearTimeout(floor);
        } else if (elevatorFloor > inquiryFloor) {
          setElevatorFloor(elevatorFloor - 1);
        } else if (elevatorFloor < inquiryFloor) {
          setElevatorFloor(elevatorFloor + 1);
        }
      }, 1500);
    }
  };

  const activateElevator = () => {
    setMoving(true);
  };

  useEffect(() => {
    updateFloor();
  }, [moving, doorOpen, elevatorFloor]);

  return (
    <AppContext.Provider
      value={{
        idle,
        moving,
        elevatorFloor,
        doorOpen,
        inquiryFloor,
        destinationFloor,
        newFloorRequest,
        activateElevator,
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
      -door opens and stays out for 5 seconds and closes
      -if passenger(s) chooses their level from inside the elevator
        -proceeds to that level
      
  */

/* Elevator state and UI
    *When the elevator moves each level, it should take about 1 second
      -door should stay open for 5 seconds and close
      -once the door is closed, the elevator starts moving
  */

import React from 'react';
import { useGlobalContext } from './context';

const ToDoList = () => {
  const value = useGlobalContext();
  return <div>{value}</div>;
};

export default ToDoList;

import React from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
import ToDoList from './todos/ToDoList';

const App = () => {
  return (
    <div>
      <ToDoList />
    </div>
  );
};

export default hot(module)(App);

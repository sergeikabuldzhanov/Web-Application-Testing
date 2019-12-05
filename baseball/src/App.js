import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './components/Display';
import Dashboard from './components/Dashboard';
import useScore from './hooks/useScore';

function App() {
 const [balls, strikes, setScore] = useScore(0, 0)

  return (
    <div className="App">
      <Display balls = {balls} strikes = {strikes}/>
      <Dashboard setScore = {setScore}/>
    </div>
  );
}

export default App;

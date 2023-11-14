// src/App.js
import React from 'react';
import Budget from './components/Budget';
import AllocationList from './components/AllocationList';
import ChangeAllocation from './components/ChangeAllocation';
import './App.css';

function App() {
  return (
    <div className="App">
      <Budget />
      <AllocationList />
      <ChangeAllocation />
    </div>
  );
}

export default App;

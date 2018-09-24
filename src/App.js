import React from 'react';
import './App.css';
import Timers from './components/Timers';

const App = (props) => {
  return (
    <div className="App">
      <h1 className='header-app'>Timers</h1>
      <Timers />
    </div>
  );
}

export default App;

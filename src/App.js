import React from 'react';
import './App.css';
import './components/Wizard';
import Wizard from './components/Wizard';
import Knight from './components/Knight';
import Archer from './components/Archer';
import Brute from './components/Brute';


function App() {
  return (
    <div className="App">
        <h1>Champs de bataille</h1>
      <section>
        <Wizard/>
        <Knight/>
        <Archer/>
        <Brute/>
      </section>
    </div>
  );
}

export default App;

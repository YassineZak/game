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
        <div className="row">
          <div className="col-md-6">
            <h2>Joueur 1</h2>
            <Wizard/>
            <Knight/>
            <Archer/>
            <Brute/>
          </div>
        </div>
      </div>
  );
}

export default App;

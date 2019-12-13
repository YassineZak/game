import React from 'react';
import './App.css';
import Player from './components/Player';


function App() {
  return (
      <div className="App">
        <h1>Champs de bataille</h1>
        <div className="row conteneur">
          <Player player="yassine" />
          <div className="col-md-6 battlefield card card-body bg-light"></div>
          <Player player="yassine" />
        </div>
      </div>
  );
}

export default App;

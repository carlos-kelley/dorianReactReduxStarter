import React from 'react';
import './App.css';
// import our component
import HelloWorld from '../HelloWorld/HelloWorld';

function App() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Dorian React Intro</h1>
        </header>
        <div className="body">
          <p>
            hello world from ReactJS!
          </p>
        </div>
        <HelloWorld />
      </div>
    );
}

export default App;

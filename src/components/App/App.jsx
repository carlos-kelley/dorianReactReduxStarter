import React from 'react';
import './App.css';
// import our component
import HelloWorld from '../HelloWorld/HelloWorld';
import Body from '../Body/Body';
import { useState } from 'react';

function App() {
    const [ appClicks, setAppClicks ] = useState( 0 );
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Dorian React Intro</h1>
          <p>appClicks: { appClicks }</p>
        </header>
        <Body />
        <HelloWorld taco="delicious" setAppClicks={setAppClicks}/>
      </div>
    );
}

export default App;

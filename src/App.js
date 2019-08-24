import React from 'react';
import Calculator from './Calculator.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Welcome to our Website </h1>
      </header>
        <p> Here you can use a calculator. </p>
        <p> (Note, this is not a scientific calculator)</p>
        <Calculator />
    </div>
  );
}

export default App;

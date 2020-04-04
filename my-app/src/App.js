import React from 'react';
import logo from './puppy.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Natalie Evelev
        </p>
        <a
          className="App-link"
          href="https://www.goldenretrieverfoundation.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Donate to Golden Retriever Foundation Today
        </a>
      </header>
    </div>
  );
}

export default App;

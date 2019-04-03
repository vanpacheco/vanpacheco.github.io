import React from 'react';

import './App.css';
import { Typewriter } from './components/Typewriter'; // Why is it not picking up the index?

class App extends React.PureComponent {
  render() {
    const greetings = ['Hello, I am', 'Hola, soy', 'Hallo, Ich bin'];

    return (
      <div className="app">
        <Typewriter>{greetings}</Typewriter>
        <h1>V!</h1>
      </div>
    );
  }
}

export default App;

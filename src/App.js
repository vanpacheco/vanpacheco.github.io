import React from 'react';
import { hot } from 'react-hot-loader';

import './App.css';

class App extends React.PureComponent {
  render() {
    return (
      <div className="app">
        <h1>Hello, this is V!</h1>
      </div>
    );
  }
}

export default hot(module)(App);

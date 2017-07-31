import React, { Component } from 'react';
import Buttons from './Buttons';
import CounterList from './CounterList';

class App extends Component {
  render() {
    return (
      <div>
        App
        <Buttons />
        <CounterList />
      </div>
    );
  }
}

export default App;

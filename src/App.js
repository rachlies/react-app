import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React app</h1>
        <p>It's working!!</p>
          <Person Name = "P1" Age = "25"/>
          <Person Name = "P2" Age = "26">Some text</Person>
      </div>
    );
  }
}

export default App;

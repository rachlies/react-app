import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {

  state = {
    person : [
      {Name : "Roshan", Age : 25},
      {Name : "Priya", Age : 23}
    ]
  };

  render() {
    return (
      <div className="App">
        <h1>React app</h1>
        <p>It's working!!</p>
          <Person Name = {this.state.person[0].Name} Age = {this.state.person[0].Age}/>
          <Person Name = {this.state.person[1].Name} Age = {this.state.person[1].Age}>Some text</Person>
      </div>
    );
  }
}

export default App;

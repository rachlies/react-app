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

  switchButtonHandler = () => {
    // console.log("hellow!");
    this.setState({
      person : [
        {Name : "Priya", Age : 23},
        {Name : "Roshan", Age : 25}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>React app</h1>
        <p>It's working!!</p>
        <button onClick = {this.switchButtonHandler}>Switch Names</button>
        <Person Name = {this.state.person[0].Name} Age = {this.state.person[0].Age}/>
        <Person Name = {this.state.person[1].Name} Age = {this.state.person[1].Age}>Some text</Person>
      </div>
    );
  }
}

export default App;

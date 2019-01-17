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

  switchButtonHandler = (newname) => {
    // console.log("hellow!");
    this.setState({
      person : [
        {Name : "Roshan", Age : 25},
        {Name : newname, Age : 23}
      ]
    })
  }


  nameChangedHandler = (event) => {
    // console.log("hellow!");
    this.setState({
      person : [
        {Name : "Roshan", Age : 25},
        {Name : event.target.value, Age : 23}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>React app</h1>
        <p>It's working!!</p>
        <button onClick = {this.switchButtonHandler.bind(this, "Palak")}>Switch Names</button>
        <Person 
          Name = {this.state.person[0].Name} 
          Age = {this.state.person[0].Age}></Person>
        <Person 
          click = {this.switchButtonHandler.bind(this, "Priya")}
          changed = {this.nameChangedHandler}
          Name = {this.state.person[1].Name} 
          Age = {this.state.person[1].Age}>Some text</Person>
      </div>
    );
  }
}

export default App;

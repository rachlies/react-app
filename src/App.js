import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {

  state = {
    person : [
      {Name : "Roshan", Age : 25},
      {Name : "Priya", Age : 23}
    ],
    showContent : true
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

  toggleHandler = () => {
    const flag = this.state.showContent;
    this.setState({
      showContent : !flag
    })
  }

  render() {

    // const style = {
    //   backgroundColor: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer'
    // };

    return (
      <div className="App">
        <h1>React app</h1>
        <p>It's working!!</p>
        <button 
          // style = {style}
          onClick = {this.toggleHandler}>Switch Names</button>
        { this.state.showContent === true ?
          <div>
            <Person 
              Name = {this.state.person[0].Name} 
              Age = {this.state.person[0].Age}></Person>
            <Person 
              click = {this.switchButtonHandler.bind(this, "Priya")}
              changed = {this.nameChangedHandler}
              Name = {this.state.person[1].Name} 
              Age = {this.state.person[1].Age}>Some text</Person>
          </div> : null
        }  
      </div>
    );
  }
}

export default App;

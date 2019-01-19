import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {

  state = {
    person : [
      {id: 'kdsljf', Name : "Roshan", Age : 25},
      {id: 'ldfkm', Name : "Priya", Age : 23}
    ],
    showContent : true
  };

  // switchButtonHandler = (newname) => {
  
  //   this.setState({
  //     person : [
  //       {Name : "Roshan", Age : 25},
  //       {Name : newname, Age : 23}
  //     ]
  //   })
  // }

  nameChangedHandler = (event) => {
    
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

  deletePersonHandler = (idx) => {
    
    // const person = this.state.person; // non - immutable 
    const person = [...this.state.person]; // immutable way of manipulating the state
    person.splice(idx,1);
    this.setState({
      person: person
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

    let person = null;

    if(this.state.showContent) {
      person = (
        <div>
          {this.state.person.map((p,idx) => {
            return <Person 
                    click = {() => this.deletePersonHandler(idx)}
                    Name = {p.Name}
                    Age = {p.Age}
                    key = {p.id}/>
          })}
        </div>
      )
    }
    return (
      <div className="App">
        <h1>React app</h1>
        <p>It's working!!</p>
        <button 
          // style = {style}
          onClick = {this.toggleHandler}>Switch Names</button>
        {person}  
      </div>
    );
  }
}

export default App;

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

  nameChangedHandler = (event, id) => {
    
    const p_idx = this.state.person.findIndex(p => {
      return p.id === id;
    });

    const p = {...this.state.person[p_idx]};
    p.Name = event.target.value;

    const p1 = [...this.state.person];
    p1[p_idx] = p;

    this.setState({
      person : p1
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

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let person = null;
    let buttonMsg = "Show";
    if(this.state.showContent) {
      
      person = (
        <div>
          {this.state.person.map((p,idx) => {
            return <Person 
                    click = {() => this.deletePersonHandler(idx)}
                    Name = {p.Name}
                    Age = {p.Age}
                    key = {p.id}
                    changed = {(event) => this.nameChangedHandler(event, p.id)}/>
          })}
        </div>
      )
      style.backgroundColor = 'red';
      buttonMsg = "Hide";
    }

    return (
      
      <div className="App">
        <h1>React app</h1>
        <p>It's working!!</p>
        <button 
          style = {style}
          onClick = {this.toggleHandler}>{buttonMsg}</button>
        {person}  
      </div>
    );
  }
}

export default App;

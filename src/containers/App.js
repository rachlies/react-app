import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {

  state = {
    persons : [
      {id: 'kdsljf', Name : "Roshan", Age : 25},
      {id: 'ldfkm', Name : "Priya", Age : 23},
      {id: 'jckn', Name : "Palak", Age : 23}
    ],
    showContent : true
  };

  nameChangedHandler = (event, id) => {
    const p_idx = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const p = {...this.state.persons[p_idx]};
    p.Name = event.target.value;
    const p1 = [...this.state.persons];
    p1[p_idx] = p;
    this.setState({
      persons : p1
    })
  }

  toggleHandler = () => {
    const flag = this.state.showContent;
    this.setState({
      showContent : !flag
    })
  }

  deletePersonHandler = (idx) => {
    // const persons = this.state.persons; // non - immutable 
    const persons = [...this.state.persons]; // immutable way of manipulating the state
    persons.splice(idx,1);
    this.setState({
      persons: persons
    })
  }

  render() {
    let persons = null;
    if(this.state.showContent) {
      persons = (
          <Persons persons = {this.state.persons}
                   clicked = {this.deletePersonHandler}
                   changed = {this.nameChangedHandler}></Persons>
      )
    }
    return (
        <div className={classes.App}>
          <Cockpit persons = {this.state.persons}
                   toggle = {this.toggleHandler}
                   showPersons = {this.state.showContent}></Cockpit>
          {persons}  
        </div>
    );
  }
}

export default App;

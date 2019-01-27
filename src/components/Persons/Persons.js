import React from 'react';
import Person from './Person/Person';

const Persons = (props) => props.persons.map((p,idx) => {
    return <Person 
            click = {() => props.clicked(idx)}
            Name = {p.Name}
            Age = {p.Age}
            key = {p.id}
            changed = {(event) => props.changed(event, p.id)}/>
  })

  export default Persons;
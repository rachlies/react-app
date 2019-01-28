import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
    render () {
        return this.props.persons.map((p,idx) => {
            return <Person 
                    click = {() => this.props.clicked(idx)}
                    Name = {p.Name}
                    Age = {p.Age}
                    key = {p.id}
                    changed = {(event) => this.props.changed(event, p.id)}/>
          })
    }
}

export default Persons;
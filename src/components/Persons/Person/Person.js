import React, {Component} from 'react';
import classes from './Person.css';


class Person extends Component {
    render() {
        return (
            <div className = {classes.Person}>
                <p onClick = {this.props.click}>I'm  {this.props.Name}, {this.props.Age} years old Person!!</p>
                <input onChange = {this.props.changed}></input>
            </div>    
        )
    }
}

export default Person;
import React from 'react';
import classes from './Person.css';

const person = (props) => {

    return (
        <div className = {classes.Person}>
            <p onClick = {props.click}>I'm  {props.Name}, {props.Age} years old Person!!</p>
            <input onChange = {props.changed}></input>
        </div>    
    )
};

export default person;
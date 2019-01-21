import React from 'react';
import './Person.css';

const person = (props) => {

    return (
        <div className = "Person">
            <p onClick = {props.click}>I'm  {props.Name}, {props.Age} years old Person!!</p>
            <input onChange = {props.changed}></input>
        </div>    
    )
};

export default person;
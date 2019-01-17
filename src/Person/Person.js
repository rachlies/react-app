import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className = "Person">
            <p>I'm  {props.Name}, {props.Age} years old Person!!</p>
            <p onClick = {props.click}>{props.children}</p>
            <input onChange = {props.changed} ></input>
        </div>    
    )
};

export default person;
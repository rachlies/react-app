import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };

    return (
        <div className = "Person" style = {style}>
            <p onClick = {props.click}>I'm  {props.Name}, {props.Age} years old Person!!</p>
            <input onChange = {props.changed}></input>
        </div>    
    )
};

export default Radium(person);
import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>I'm  {props.Name}, {props.Age} years old Person!!</p>
            <p onClick = {props.click}>{props.children}</p>
            <input onChange = {props.changed}></input>
        </div>    
    )
};

export default person;
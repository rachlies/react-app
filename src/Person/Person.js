import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>I'm  {props.Name}, {props.Age} years old Person!!</p>
            <p>{props.children}</p>
        </div>    
    )
};

export default person;
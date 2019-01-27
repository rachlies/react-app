import React from 'react';
import classes from './Cockpit.css'

const Cockpit = (props) => {

    let buttoncls = '';
    let buttonMsg = "Show";
    let assignedClasses = [];

    if(props.showPersons) {
        buttonMsg = "Hide";
        buttoncls = classes.Red;    
    }

    if(props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if(props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className = {classes.Cockpit}>
          <p className={assignedClasses.join(' ')}>It's working!!</p>
          <button 
            className = {buttoncls}
            onClick = {props.toggle}>{buttonMsg}</button>
        </div>
    )
}
export default Cockpit;
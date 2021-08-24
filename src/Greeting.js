import React from 'react';

export const Greeting = ({personName, numOfMsgs}) => {
    if(!personName) return null;
    let greeting = (new Date()).getHours() < 12 ? "Good Morning" : "Good Evening";
    // let greetingMessage = greeting + {props.name} + "!";
    // let infoMessage = "You have"+ {props.numOfMsgs}+" new messages";

    return   (
        <>
        <h3> {greeting} {personName}! </h3> 
        {numOfMsgs === 0 ? null : <p> You have {numOfMsgs} new messages </p>}
        </>
    )

}

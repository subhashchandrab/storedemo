import React, {useEffect} from 'react';
import { DangerButton } from './Button';
//useEffect is used to perform any action based on the React component life cycle

export const CounterButton = ({onIncrement, numberOfClicks}) => {
    useEffect( () => {
        console.log("useEffect function called for CounterButton");
        //This function will be called whenever this component is rendered initially or the prop values for the component are updated
    }
    );
    return (
        <>
            <p>You've clicked the button  {numberOfClicks} times</p>
            {/*
            <> </> is used to denote the React fragments 
            onIncrement is a function passed from App.js. 
            similarly numberOfClicks is a property passed from App.js which is a parent
            This pattern is for sharing the state across different React components*/}
            <DangerButton  onClick={onIncrement}>Click Me!</DangerButton>
        </>
    );
}
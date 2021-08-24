import React, {useEffect} from 'react';

export const CongratulationsMessage = ({numberOfClicks, threshold, onHide}) => {

    useEffect( () => {
        //Don't call any state changing logic inside useEffect() to avoid infinite loops
        return  () => console.log("Unmounting the CongratulationsMessage component");
        //The above function will be called when the respective element is removed from the DOM.
    }, []// This array indicates the properties whose values changed should trigger this useEffect method invocation.
    //Empty array means the function will be called only when component is rendered initially

    );
    return (
         <>
            <h1> Congratulations! You've reached {threshold} number of clicks!</h1>
            <button onClick={onHide}>Hide Message</button>
         </>
    );
}
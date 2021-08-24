import React, {useState, useEffect} from 'react';
import { useParams, useLocation } from 'react-router-dom';//Used to handle the parameters passed in the URL 
//import { parse } from 'query-string';
import { CounterButton } from '../CounterButton';
import {CongratulationsMessage} from '../CongratulationsMessage';
import { DisplayIf } from '../DisplayIf';
import { usePersistenceState  } from '../usePersistenceState';

export const CounterButtonPage = () => {
  const [numberOfClicks, setNumberOfClicks] = usePersistenceState('numberOfClicks', 0, Number);
    const { name } = useParams();
    const location = useLocation();
    //const startingValue = parse(location.search).startingValue;//parse the query parameter string and access each parameter by the name
    //const [numberOfClicks, setNumberOfClicks] = useState(Number(startingValue) || 0);



    const [hideMessage, setHideMessage] = useState(false);
  //useState is the way of maintaining the state in React. The value passed in paranthesis is the initial value of the state. 
  //The 2nd elements in the LHS is the function that gets called whenever the state is updated.    
    const increment = ()=> setNumberOfClicks(numberOfClicks + 1); 
    
    return (
        <>
            <h1>{!!name ? name+"'s" : ""} Counter Button page</h1>
            <DisplayIf condition={!hideMessage && numberOfClicks >= 10}>
               <CongratulationsMessage 
                    numberOfClicks={numberOfClicks} 
                    threshold={10}
                    onHide={() => setHideMessage(true)}/>
              </DisplayIf>
              <CounterButton numberOfClicks={numberOfClicks} onIncrement={increment}/>
        </>        
      );
}
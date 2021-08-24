import React from 'react';
import { CounterButtonCB } from './CounterButtonCB';
import { CongratulationsMessageCB } from './CongratulationsMessageCB';
import { DisplayIf } from '../DisaplyIf';

export class CounterButtonPageCB extends React.Component {
    state = {
        hideMessage: false,
        numberOfClicks : 0
    };

    //Life cycle can be controlled using ComponentDidMount, ComponentDidUnmount

    increment = () => {
        this.setState({numberOfClicks : this.state.numberOfClicks + 1});
    };

    render () {
        const {hideMessage, numberOfClicks} = this.state;
        return (
            <>
                <h1>{!!name ? name+"'s" : ""} Counter Button page</h1>
                <DisplayIf condition={!hideMessage && numberOfClicks >= 10}>
                   <CongratulationsMessageCB 
                        numberOfClicks={numberOfClicks} 
                        threshold={10}
                        onHide={() => this.setState({hideMessage: true})}/>
                  </DisplayIf>
                  <CounterButtonCB numberOfClicks={numberOfClicks} onIncrement={increment}/>
            </>        
          );
    }
}
import React from 'react';
import { Greeting } from '../Greeting';

export const HomePage = () => (
    <>
        <h1>Home Page</h1>
        <Greeting personName="Subhash" numOfMsgs={5}/>
    </>
)
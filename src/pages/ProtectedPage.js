import React, { useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';

export const ProtectedPage = () => {
    const isAuth = false;
    const history = useHistory();

    useEffect(()=>{
        if(!isAuth){
            history.push("/");//Use this for a programmatic redirection
        }

    });
    return (
        <h1> Only authorized users can see this page </h1>
    );
}
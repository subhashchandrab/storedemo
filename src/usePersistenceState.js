import { useEffect, useState } from "react";

export const usePersistenceState = (storageKey, defaultValue, Type) => {
    const [state, setState] = useState(
        Type(localStorage.getItem(storageKey)) || defaultValue //Retrive the value from local storage
    );

    useEffect( () => {
        localStorage.setItem(storageKey, state);// For storing the data in local storage
    }, [state] );

    return [state, setState];
}
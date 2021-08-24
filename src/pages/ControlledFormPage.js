import React, { useState } from 'react';

export const ControlledFormPage = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    return (
        <form>
            <h3>Please enter your information</h3>
            <div>
                <input 
                type="text" 
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Name" />
            </div>
            <div>
                <input 
                type="text"
                value={age}
                onChange={e => setAge(e.target.value)} 
                placeholder="Age" />
            </div>
            <div>
                <input 
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)} 
                placeholder="Email" />
            </div>  
            <button onClick={ e=> alert(`Name: ${name}, Age: ${age}, Email: ${email}`)}>
                Submit
            </button>                      
        </form>
    );
}
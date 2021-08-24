import React from 'react';

export const UncontrolledFormPage = () =>{
    const nameInput = React.createRef();
    const ageInput = React.createRef();
    const emailInput = React.createRef();

    return (
        <form>
            <h3>Please enter your information</h3>
            <div>
                <input 
                type="text" 
                ref={nameInput}
                placeholder="Name" />
            </div>
            <div>
                <input 
                type="text"
                ref={ageInput}
                placeholder="Age" />
            </div>
            <div>
                <input 
                type="text"
                ref={emailInput}
                placeholder="Email" />
            </div>  
            <button onClick={ e=> {
                                    alert(`Name: ${nameInput.current.value}, Age: ${ageInput.current.value}, Email: ${emailInput.current.value}`);
                                    e.preventDefault();
                                  }
                            }>
                Submit
            </button>                      
        </form>
    );    
}
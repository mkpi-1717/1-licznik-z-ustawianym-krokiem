import React from 'react';
import './Step.css';

function Step(props) {

    let inputStep = null; 
        return (
            <div className='step'>
                
                <label>Krok: </label>
               <input ref={(data) => {inputStep = data} } onChange={() => props.updateStep(inputStep.value)} type="number" value={props.stepValue}></input>
            </div>
        );
    }
  
export default Step; 
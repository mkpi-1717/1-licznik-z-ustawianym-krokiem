import React from 'react';
import './ButtonsPanel.css'

function ButtonsPanel(props) {

    return(

        <div className="buttons-panel">
            <button className="button" onClick={() => {
                props.buttonMethod('add');
            }}>Add {props.stepValue}</button>

            <button className="button" onClick={() => {
                props.buttonMethod('reinit');
            }}>ReInit</button>

            <button className="button" onClick={() => {
                props.buttonMethod('reset');
            }}>Reset</button>
        </div>
    );
}

export default ButtonsPanel;
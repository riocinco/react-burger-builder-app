import React from 'react';
import CssStyle from './BuildControl.css';

const BuildControl = (props) => {
    return (
        <div className={CssStyle.BuildControl}>            
            <div className={CssStyle.Label}>{props.label}</div>
            <button className={CssStyle.Less} onClick={props.removed} disabled={props.disabled}>Less</button>
            <button className={CssStyle.More} onClick={props.added}>More</button>
        </div>
    )
}

export default BuildControl

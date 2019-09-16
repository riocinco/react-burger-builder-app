import React from 'react'

import CssStyle from './Button.css'
const Button = (props) => (
    <button 
        className={[CssStyle.Button, CssStyle[props.btnType]].join(' ')}
        onClick={props.clicked}>
        {props.children}
    </button>
);
   

export default Button

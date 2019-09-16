import React from 'react'

import CssStyle from './Backdrop.css'

const Backdrop = (props) => (
    props.show ? <div className={CssStyle.Backdrop} onClick={props.clicked}></div> : null
);

export default Backdrop

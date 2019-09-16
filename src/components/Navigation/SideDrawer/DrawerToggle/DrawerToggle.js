import React from 'react'
import CssStyle from './DrawerToggle.css'

const DrawerToggle = (props) => (
    <div className={CssStyle.DrawerToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default DrawerToggle

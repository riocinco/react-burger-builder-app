import React from 'react'
import CssStyle from './NavigationItem.css'

const NavigationItem = (props) => (
    <li className={CssStyle.NavigationItem}>
        <a href={props.link}
           className={props.active ? CssStyle.active : null }>{props.children}</a>
    </li>
);

export default NavigationItem

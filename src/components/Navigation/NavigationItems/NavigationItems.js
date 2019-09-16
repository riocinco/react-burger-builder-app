import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem';
import CssStyle from './NavigationItems.css';

const NavigationItems = () => (
    <ul className={CssStyle.NavigationItems}>
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
);
    

export default NavigationItems

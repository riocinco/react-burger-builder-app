import React from 'react';
import CssStyle from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const Toolbar = (props) => (
    <header className={CssStyle.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <div className={CssStyle.Logo}>
            <Logo />
        </div>
        <nav className={CssStyle.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default Toolbar

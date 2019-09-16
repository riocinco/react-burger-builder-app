import React, { Fragment }from 'react'

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import CssStyle from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

const SideDrawer = (props) => {

    let attachedStyle = [CssStyle.SideDrawer, CssStyle.Close];
    if (props.open) {
        attachedStyle = [CssStyle.SideDrawer, CssStyle.Open];
    }
    attachedStyle = attachedStyle.join(' ');

    return (
        <Fragment >
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedStyle}>
                <div className={CssStyle.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Fragment>
    )
}

export default SideDrawer

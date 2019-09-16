import React from 'react';

import BurgerLogo from '../../assets/images/burger-logo.png';
import CssStyle from './Logo.css'

const Logo = (props) => (
    <div  className={CssStyle.Logo}> 
        <img src={BurgerLogo} alt="MyBurger" />
    </div>
);

export default Logo

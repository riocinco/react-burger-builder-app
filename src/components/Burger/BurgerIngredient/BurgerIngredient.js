import React, {Component} from 'react'
import PropTypes from 'prop-types';

import CssStyle from './BurgerIngredient.css';

class BurgerIngredient extends Component {

    render() {
        let ingredient = null;
        switch ( this.props.type) {
            case 'bread-bottom':
                ingredient = <div className={CssStyle.BreadBottom}></div>
                break;
            case 'bread-top':
                ingredient = (
                    <div className={CssStyle.BreadTop}>
                        <div className={CssStyle.Seeds1}></div>
                        <div className={CssStyle.Seeds2}></div>
                    </div>
                );
                break;
            case 'meat':
                ingredient = <div className={CssStyle.Meat}></div>
                break;
            case 'cheese':
                ingredient = <div className={CssStyle.Cheese}></div>
                break;
            case 'salad':
                ingredient = <div className={CssStyle.Salad}></div>
                break;
            case 'bacon':
                ingredient = <div className={CssStyle.Bacon}></div>
                break;
            default:
                ingredient = null;
                break;
        }
        return ingredient;
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};


export default BurgerIngredient

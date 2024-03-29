import React, { Fragment } from 'react'
import Button from '../../UI/Button/Button'

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey} </span>: {props.ingredients[igKey]}
                </li>
            )
        })
    return (
        <Fragment>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p> <strong>Total Price: {props.price} </strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType='Danger' clicked={props.cancelledOrder} >CANCEL</Button>
            <Button btnType='Success' clicked={props.proceedOrder}>CONTINUE</Button>
        </Fragment>
    )
}

export default OrderSummary

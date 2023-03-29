import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart
    return (
        <div>
             
                <h1>Orders</h1>
                <p>Items: {cart.length}</p>
            </div>
        
    );
};

export default Cart;
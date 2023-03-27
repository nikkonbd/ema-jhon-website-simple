import React from 'react';
import './Cart.css';

const Cart = (props) => {
    // console.log(props);
    const { cart } = props;

    let total = 0;
    for (const product of cart) {
        total = total + product.price;
    }

    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Carts: {cart.length}</p>
            <p>Total Price: {total}</p>
            <p>Total Shipping Charge: </p>
            <p>Tax: </p>
            <h5>Grand Total: </h5>
        </div>
    );
};

export default Cart;
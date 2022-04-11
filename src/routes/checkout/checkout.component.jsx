import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout.styles.scss';

import React from 'react';

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart } =
    useContext(CartContext);
  return (
    <div>
      <h1>Checkout</h1>
      <div>
        {cartItems.map((cartItem) => {
          const { id, name, quantity } = cartItem;
          return (
            <div className='checkout-container' key={id}>
              <h2>{name}</h2>
              <span>{quantity}</span>
              <span onClick={() => removeItemFromCart(cartItem)}>
                decrement{' '}
              </span>
              <span onClick={() => addItemToCart(cartItem)}> increment</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;

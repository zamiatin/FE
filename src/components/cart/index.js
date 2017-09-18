import React from 'react';

//conponents
import Cart from './cart';

//styles
import styles from './styles/cart.scss';

const CartBlock = () => (
  <div style={{ position: 'relative' }}>
    <div className="cartWrapper">
      <Cart />
    </div>
    <div className="cartBottom" />
  </div>
);

export default CartBlock;
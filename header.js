import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Header() {
  const cartItems = useSelector(state => state.cart.items);
  const totalCount = Object.values(cartItems).reduce((sum, qty) => sum + qty, 0);

  return (
    <header style={{ padding: '1rem', backgroundColor: '#def', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <nav>
        <Link to="/products" style={{ marginRight: '1rem' }}>Products</Link>
        <Link to="/cart">Cart</Link>
      </nav>
      <div>
        <span role="img" aria-label="cart" style={{ marginRight: 5 }}>🛒</span>
        <strong>{totalCount}</strong>
      </div>
    </header>
  );
}

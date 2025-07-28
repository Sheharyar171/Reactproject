import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from './store';

export default function ProductListingPage() {
  const products = useSelector(state => state.products);
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Group products by category
  const grouped = products.reduce((acc, product) => {
    (acc[product.category] = acc[product.category] || []).push(product);
    return acc;
  }, {});

  const handleAdd = (id) => {
    dispatch(addToCart(id));
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Houseplants for Sale</h2>
      {Object.entries(grouped).map(([category, items]) => (
        <div key={category} style={{ marginBottom: '2rem' }}>
          <h3>{category}</h3>
          <div style={{ display: 'flex', gap: '1rem' }}>
            {items.map(({ id, name, price, thumbnail }) => (
              <div
                key={id}
                style={{
                  border: '1px solid #ccc',
                  borderRadius: '8px',
                  padding: '1rem',
                  width: '150px',
                  textAlign: 'center',
                }}
              >
                <img src={thumbnail} alt={name} width={100} height={100} />
                <h4>{name}</h4>
                <p>${price}</p>
                <button
                  onClick={() => handleAdd(id)}
                  disabled={!!cartItems[id]}
                >
                  {cartItems[id] ? 'Added' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './LandingPage';
import ProductListingPage from './ProductListingPage';
import ShoppingCartPage from './ShoppingCartPage';
import Header from './Header';

export default function App() 
{
  return (
    <Router>
      <div>
        {/* Show header only on these pages */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/products"
            element={
              <>
                <Header />
                <ProductListingPage />
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <>
                <Header />
                <ShoppingCartPage />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

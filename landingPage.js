import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() 
{
  return (
    <div
      style={{
        height: '100vh',
        backgroundImage: 'url(https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1350&q=80)',
        backgroundSize: 'cover',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textShadow: '1px 1px 3px #000',
        padding: '2rem',
      }}
    >
      <h1>GreenLeaf Nursery</h1>
      <p>Your trusted source for beautiful houseplants to brighten your home and workspace.</p>
      <Link
        to="/products"
        style={{
          marginTop: '2rem',
          padding: '1rem 2rem',
          backgroundColor: 'green',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '5px',
          fontWeight: 'bold',
        }}
      >
        Get Started
      </Link>
    </div>
  );
}
